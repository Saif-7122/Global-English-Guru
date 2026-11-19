const blues = ["#9bb8ff", "#afc9ff", "#d2e1ff", "#ffffff", "#e5edff", "#ffffff"];
const green = "#8bff8d";
const fieldWidth = 62;
const fieldHeight = 37;

function seed(x: number, y: number) {
  return ((x * 73856093 ^ y * 19349663) >>> 0) % 997 / 997;
}

function makePixels() {
  return Array.from({ length: fieldWidth * fieldHeight }, (_, index) => {
    const x = index % fieldWidth;
    const y = Math.floor(index / fieldWidth);
    const envelope = Math.sin(Math.PI * x / (fieldWidth - 1)) ** 0.7;
    const amplitude = 1 + envelope * (1 + Math.abs(Math.sin(x * 0.37) * Math.cos(x * 0.11)) * 15);
    const solid = Math.abs(y - fieldHeight / 2) <= amplitude;
    return {
      x, y, solid, grain: seed(x, y), lift: 0, velocity: 0,
    };
  }).filter(({ solid, grain }) => solid);
}

export function mountPixelField(canvas: HTMLCanvasElement, surface: HTMLElement) {
  const context = canvas.getContext("2d");
  if (!context) return;
  const pixels = makePixels();
  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let width = 0;
  let height = 0;
  let scale = 1;
  let frame = 0;
  let pointer: { x: number; y: number } | null = null;
  let lastPointer: { x: number; y: number } | null = null;
  const trails: { x: number; y: number; life: number }[] = [];
  let pulseStarted = -Infinity;
  let pausedHighlight = false;
  let previousTime = 0;
  const onFrame = () => {
    if (!frame) frame = requestAnimationFrame(draw);
  };

  function draw(time: number) {
    frame = 0;
    if (!context || !width || !height) return;
    const delta = previousTime ? Math.min(2, (time - previousTime) / 16.667) : 1;
    previousTime = time;
    const wave = (time - pulseStarted) * 0.62;
    const size = Math.min(width / 62, height / 35);
    const originX = (width - fieldWidth * size) / 2;
    const originY = (height - fieldHeight * size * 0.82) / 2;
    const radius = Math.max(44, size * 10);
    let moving = false;
    context.clearRect(0, 0, width, height);

    for (const pixel of pixels) {
      const x = originX + pixel.x * size + (pixel.y - 18) * size * 0.095;
      const y = originY + pixel.y * size * 0.82;
      let force = 0;
      if (!motion.matches) {
        if (pointer) force = Math.max(0, 1 - Math.hypot(x - pointer.x, y - pointer.y) / radius);
        for (const trail of trails) {
          force = Math.max(force, Math.max(0, 1 - Math.hypot(x - trail.x, y - trail.y) / (radius * 0.78)) * trail.life * 0.82);
        }
        if (wave < width * 0.8) {
          const distance = Math.hypot(x - width * 0.49, y - height * 0.52);
          force = Math.max(force, Math.max(0, 1 - Math.abs(distance - wave) / (radius * 0.63)));
        }
      }
      const target = force ** 1.8 * (16 + pixel.grain * 38);
      if (motion.matches) {
        pixel.lift = 0;
        pixel.velocity = 0;
      } else {
        pixel.velocity = (pixel.velocity + (target - pixel.lift) * 0.13 * delta) * 0.74 ** delta;
        pixel.lift = Math.max(0, pixel.lift + pixel.velocity * delta);
      }
      if (Math.abs(target - pixel.lift) > 0.07 || Math.abs(pixel.velocity) > 0.07) moving = true;
      const edge = size * (pixel.solid ? 0.82 : 0.22 + pixel.grain * 0.15);
      const floatX = x + pixel.lift * (pixel.grain - 0.44) * 0.56;
      const floatY = y - pixel.lift;
      const bright = pixel.lift > 21 && pixel.grain > 0.9 || pausedHighlight && pixel.solid && pixel.grain > 0.94;

      if (pixel.solid || pixel.lift > 3) {
        context.fillStyle = "#07275f";
        context.globalAlpha = Math.min(0.86, 0.38 + pixel.lift * 0.025);
        const depth = Math.min(9, size * 0.34 + pixel.lift * 0.12);
        context.fillRect(floatX + depth * 0.48, floatY + depth, edge, edge);
      }
      context.globalAlpha = pixel.solid ? 0.9 + pixel.grain * 0.1 : Math.min(0.88, 0.14 + pixel.lift * 0.026);
      context.fillStyle = bright ? green : blues[Math.min(5, Math.floor(pixel.grain * 4 + pixel.lift * 0.044))];
      context.fillRect(floatX, floatY, edge, edge);
    }
    context.globalAlpha = 1;

    for (let index = trails.length - 1; index >= 0; index -= 1) {
      trails[index].life -= 0.045 * delta;
      if (trails[index].life <= 0) trails.splice(index, 1);
    }
    canvas.dataset.pixelActive = String(moving || trails.length > 0 || pointer !== null);
    if (!motion.matches && (moving || trails.length > 0 || wave < width * 0.8)) onFrame();
    else previousTime = 0;
  }

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    scale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    context?.setTransform(scale, 0, 0, scale, 0, 0);
    onFrame();
  }

  function track(event: PointerEvent) {
    if (motion.matches || event.target instanceof Element && event.target.closest("button")) return;
    const bounds = canvas.getBoundingClientRect();
    pointer = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
    if (!lastPointer || Math.hypot(pointer.x - lastPointer.x, pointer.y - lastPointer.y) > 14) {
      trails.push({ ...pointer, life: 1 });
      if (trails.length > 8) trails.shift();
      lastPointer = pointer;
    }
    onFrame();
  }

  function leave() {
    pointer = null;
    lastPointer = null;
    onFrame();
  }

  function motionChanged() {
    trails.length = 0;
    pulseStarted = -Infinity;
    pausedHighlight = false;
    leave();
  }

  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  surface.addEventListener("pointermove", track);
  surface.addEventListener("pointerdown", track);
  surface.addEventListener("pointerleave", leave);
  surface.addEventListener("pointerup", leave);
  surface.addEventListener("pointercancel", leave);
  motion.addEventListener("change", motionChanged);
  resize();
  canvas.dataset.ready = "true";

  return {
    pulse() {
      if (motion.matches) pausedHighlight = !pausedHighlight;
      else pulseStarted = performance.now();
      onFrame();
    },
    dispose() {
      cancelAnimationFrame(frame);
      observer.disconnect();
      surface.removeEventListener("pointermove", track);
      surface.removeEventListener("pointerdown", track);
      surface.removeEventListener("pointerleave", leave);
      surface.removeEventListener("pointerup", leave);
      surface.removeEventListener("pointercancel", leave);
      motion.removeEventListener("change", motionChanged);
      delete canvas.dataset.ready;
    },
  };
}
