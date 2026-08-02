import { WHATSAPP_URL } from "@/data/site";
import { DemoButton } from "@/components/ui/Button";
import ContactDropdown from "@/components/ui/ContactDropdown";

const TRUST_BADGES = [
  { icon: "⭐", text: "200+ Google Reviews" },
  { icon: "🏫", text: "Established Institute" },
  { icon: "📡", text: "Live Online" },
  { icon: "👥", text: "Small Batch Size" },
  { icon: "🎙️", text: "Practical Activities" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="gradient-hero relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Decorative background shapes — decorative only, hidden from AT */}
      <div
        className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full opacity-5 pointer-events-none"
        style={{
          background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)",
          transform: "translate(-30%, 30%)",
        }}
        aria-hidden="true"
      />

      {/*
        Top padding: pt-16 accounts for the 56px (h-14) navbar on mobile.
        On sm+ the navbar is 64px (h-16), so pt-20.
        On lg the navbar is taller, so pt-28.
        Bottom padding is tighter on mobile to keep CTA within the fold.
      */}
      <div className="container-xl relative z-10 pt-16 pb-10 sm:pt-20 sm:pb-14 lg:pt-28 lg:pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* ── Left Column — Copy ───────────────────── */}
          <div>
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-amber-300 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full mb-4 sm:mb-6 max-w-full">
              {/* Pulse dot — reduced-motion aware via CSS */}
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" aria-hidden="true" />
              <span className="truncate">Now moving online — complete online batches</span>
            </div>

            {/* H1 — scaled: 2xl on 320px, 3xl on 360-390px, 4xl on sm, 5xl on md, 6xl on xl */}
            <h1
              className="text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Speak with{" "}
              <span className="relative inline-block text-white border-b-4 border-amber-400">
                Confidence
              </span>{" "}
              — in Everyday Life, Interviews &amp; Professional Settings
            </h1>

            {/* Subheadline */}
            <p className="text-white text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 font-medium">
              Live online sessions · Small batch size for extra care · Practical
              speaking activities every class · Personal feedback from real
              communication coaches.
            </p>

            {/* Social proof */}
            <div className="flex items-center gap-2 mb-6 sm:mb-8">
              <div className="flex" aria-hidden="true">
                {["⭐","⭐","⭐","⭐","⭐"].map((s, i) => (
                  <span key={i} className="text-amber-400 text-sm">{s}</span>
                ))}
              </div>
              <span className="text-blue-200 text-sm font-medium">
                Trusted by 200+ students · Established offline institute
              </span>
            </div>

            {/* CTA Buttons — stacked on very small screens, row on sm+ */}
            <div className="flex flex-col min-[400px]:flex-row flex-wrap gap-3 mb-8 sm:mb-10">
              <DemoButton size="lg" id="hero-demo-btn" />
              <ContactDropdown />
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {TRUST_BADGES.map((b) => (
                <span
                  key={b.text}
                  className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  <span aria-hidden="true">{b.icon}</span>
                  {b.text}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right Column — Course teasers (visible on all screens) ── */}
          {/* Hidden on mobile to keep fold clean; visible from lg */}
          <div className="hidden lg:block relative">
            {/* Floating stat cards — only shown at lg to avoid overflow on mobile */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white/10 border border-white/20 rounded-xl p-5 text-center flex flex-col justify-center items-center">
                <div className="text-amber-400 font-bold text-xl leading-tight" style={{ fontFamily: "var(--font-display)" }}>Everyday English</div>
                <div className="text-white text-xs font-medium mt-1">Beginner Friendly</div>
                <div className="text-amber-300 font-bold text-lg mt-2">₹3,000</div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl p-5 text-center flex flex-col justify-center items-center">
                <div className="text-green-400 font-bold text-xl leading-tight" style={{ fontFamily: "var(--font-display)" }}>Career Communication</div>
                <div className="text-white text-xs font-medium mt-1">Career Focused</div>
                <div className="text-green-300 font-bold text-lg mt-2">₹5,000</div>
              </div>
            </div>

            {/* Stats row */}
            <div className="flex gap-4">
              <div className="flex-1 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg flex-shrink-0" style={{ background: "var(--color-primary)" }} aria-hidden="true">👥</div>
                <div>
                  <div className="font-bold text-slate-900 text-sm" style={{ fontFamily: "var(--font-display)" }}>Small Batch Size</div>
                  <div className="text-slate-500 text-xs">for extra care</div>
                </div>
              </div>
              <div className="flex-1 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg flex-shrink-0" style={{ background: "var(--color-accent)" }} aria-hidden="true">⭐</div>
                <div>
                  <div className="font-bold text-slate-900 text-sm" style={{ fontFamily: "var(--font-display)" }}>200+ Reviews</div>
                  <div className="text-slate-500 text-xs">Google Reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile course teaser — compact 2-col below hero copy */}
          <div className="lg:hidden grid grid-cols-2 gap-2 -mt-2">
            <div className="bg-white/10 border border-white/20 rounded-xl p-3 text-center">
              <div className="text-amber-400 font-bold text-sm" style={{ fontFamily: "var(--font-display)" }}>Everyday English</div>
              <div className="text-amber-300 font-bold text-base mt-0.5">₹3,000</div>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-3 text-center">
              <div className="text-green-400 font-bold text-sm" style={{ fontFamily: "var(--font-display)" }}>Career Communication</div>
              <div className="text-green-300 font-bold text-base mt-0.5">₹5,000</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 40 }}>
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
