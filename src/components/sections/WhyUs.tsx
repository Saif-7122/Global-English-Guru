import { WHY_US } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

type IconKey =
  | "mic-2"
  | "users"
  | "heart"
  | "bar-chart-2"
  | "award"
  | "globe";

const ICONS: Record<IconKey, React.ReactNode> = {
  "mic-2": (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
  ),
  users: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  heart: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
  ),
  "bar-chart-2": (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
  ),
  award: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
  ),
  globe: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  ),
};

const ACCENT_COLOURS = [
  "var(--color-primary)",
  "var(--color-secondary)",
  "var(--color-accent)",
  "var(--color-primary)",
  "var(--color-secondary)",
  "var(--color-accent)",
];
const BG_COLOURS = [
  "var(--color-primary-light)",
  "#fef3c7",
  "#d1fae5",
  "var(--color-primary-light)",
  "#fef3c7",
  "#d1fae5",
];

export default function WhyUs() {
  return (
    <section id="why-us" className="section-pad" style={{ background: "var(--color-surface)" }}>
      <div className="container-xl">
        <SectionHeading
          eyebrow="Why Global English Guru"
          title="Six reasons students choose us over other spoken English classes"
          subtitle="We are a practical communication lab — not another grammar class or workshop. Every point below is backed by 15+ years of offline teaching and 200+ five-star Google reviews."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item, i) => (
            <div key={item.title} className="card p-6 flex flex-col gap-4">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{
                  background: BG_COLOURS[i],
                  color: ACCENT_COLOURS[i],
                }}
              >
                {ICONS[item.icon as IconKey]}
              </div>
              <div>
                <h3
                  className="text-lg font-bold text-slate-900 mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom credibility bar */}
        <div
          className="mt-12 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "var(--color-primary)" }}
        >
          <div className="text-white text-center md:text-left">
            <div className="text-2xl font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>
              An established institute. Now online.
            </div>
            <p className="text-blue-100 text-sm max-w-lg">
              Global English Guru has helped students gain communication
              confidence offline. Now we bring the same experience to you,
              wherever you are in India.
            </p>
          </div>
          <a
            href="#reviews"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            View Google Reviews
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
