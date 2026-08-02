import { SITE, WHATSAPP_URL } from "@/data/site";
import { DemoButton } from "@/components/ui/Button";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
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
      {/* Decorative background shapes */}
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

      <div className="container-xl relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-amber-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
              Now moving online — complete online batches for these two courses
            </div>

            {/* H1 */}
            <h1
              className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Speak with{" "}
              <span
                className="relative inline-block text-white border-b-4 border-amber-400"
              >
                Confidence
              </span>{" "}
              — in Everyday Life, Interviews &amp; Professional Settings
            </h1>

            {/* Subheadline */}
            <p className="text-white text-lg sm:text-xl leading-relaxed mb-8 font-medium drop-shadow-md">
              Live online sessions · Small batch size for extra care · Practical
              speaking activities every class · Personal feedback from real
              communication coaches.
            </p>

            {/* Proof line */}
            <div className="flex items-center gap-2 mb-8">
              <div className="flex -space-x-1">
                {["⭐","⭐","⭐","⭐","⭐"].map((s, i) => (
                  <span key={i} className="text-amber-400 text-base" aria-hidden="true">{s}</span>
                ))}
              </div>
              <span className="text-blue-200 text-sm font-medium">
                Trusted by 200+ students · Established offline institute
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <DemoButton size="lg" id="hero-demo-btn" />
              <ContactDropdown />
            </div>

            {/* Trust badges row */}
            <div className="flex flex-wrap gap-2">
              {TRUST_BADGES.map((b) => (
                <span
                  key={b.text}
                  className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white text-xs font-medium px-3 py-1.5 rounded-full drop-shadow-sm"
                >
                  <span aria-hidden="true">{b.icon}</span>
                  {b.text}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative">
            {/* Main image placeholder */}
            <div className="relative">
              <PlaceholderImage
                label="Trainer / classroom photograph — replace with real photo"
                aspectRatio="portrait"
                className="w-full max-w-md mx-auto"
              />

              {/* Floating stat cards */}
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
                style={{ maxWidth: 200 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg"
                  style={{ background: "var(--color-primary)" }}
                  aria-hidden="true"
                >
                  👥
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm" style={{ fontFamily: "var(--font-display)" }}>
                    Small Batch Size
                  </div>
                  <div className="text-slate-500 text-xs">for extra care</div>
                </div>
              </div>

              <div
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3"
                style={{ maxWidth: 200 }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-lg"
                  style={{ background: "var(--color-accent)" }}
                  aria-hidden="true"
                >
                  ⭐
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm" style={{ fontFamily: "var(--font-display)" }}>
                    200+ Reviews
                  </div>
                  <div className="text-slate-500 text-xs">Google Reviews</div>
                </div>
              </div>
            </div>

            {/* Course teasers */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 text-center flex flex-col justify-center items-center h-full">
                <div className="text-amber-400 font-bold text-lg leading-tight" style={{ fontFamily: "var(--font-display)" }}>Everyday English</div>
                <div className="text-white text-xs font-medium mt-1">Beginner Friendly</div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl p-4 text-center flex flex-col justify-center items-center h-full">
                <div className="text-green-400 font-bold text-lg leading-tight" style={{ fontFamily: "var(--font-display)" }}>Career Communication</div>
                <div className="text-white text-xs font-medium mt-1">Career Focused</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: 60 }}>
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
