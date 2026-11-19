"use client";

import { useEffect, useRef } from "react";
import { AudioLines } from "lucide-react";
import { mountPixelField } from "./pixel-field";
import styles from "./launch.module.css";

export default function VoiceStage() {
  const surface = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const field = useRef<ReturnType<typeof mountPixelField>>(undefined);

  useEffect(() => {
    if (!canvas.current || !surface.current) return;
    const animation = mountPixelField(canvas.current, surface.current);
    field.current = animation;
    return () => {
      animation?.dispose();
      field.current = undefined;
    };
  }, []);

  return (
    <div className={styles.voiceStage} ref={surface} data-pixel-stage>
      <div className={styles.voiceGrid} aria-hidden="true" />
      <canvas ref={canvas} className={styles.voiceCanvas} data-pixel-field aria-hidden="true" />
      <div className={styles.pixelFallback} aria-hidden="true">SPEAK<br />UP</div>
      <div className={styles.voiceControls}>
        <button type="button" data-pulse-pixels onClick={() => field.current?.pulse()}>
          <AudioLines size={16} aria-hidden="true" /> Pulse pixels
        </button>
      </div>
    </div>
  );
}
