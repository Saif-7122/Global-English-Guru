import { LEARNING_FLOW, ACTIVITIES } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

const ACTIVITY_ICONS: Record<string, React.ReactNode> = {
  "users-2": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 19a6 6 0 0 0-12 0"/><circle cx="8" cy="9" r="4"/><path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"/></svg>,
  theater: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 10s3-3 3-8"/><path d="M22 10s-3-3-3-8"/><path d="M10 2c0 4.4-3.6 8-8 8"/><path d="M14 2c0 4.4 3.6 8 8 8"/><path d="M2 10s2 2 2 5"/><path d="M22 10s-2 2-2 5"/><path d="M8 15h8"/><path d="M2 22v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1"/></svg>,
  mic: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
  "message-square": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  briefcase: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  presentation: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="13" rx="2" ry="2"/><path d="M12 16v5"/><path d="M8 21h8"/></svg>,
  video: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>,
  "clipboard-list": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>,
};

export default function LearningExperience() {
  return (
    <section
      id="how-it-works"
      className="section-pad"
      style={{ background: "var(--color-dark)" }}
    >
      <div className="container-xl">
        <SectionHeading
          eyebrow="The Communication Lab"
          title="Every session is built for speaking, not listening"
          subtitle="We design each class as a speaking lab — short inputs, lots of practice, immediate feedback. You speak more in one session than in a month of traditional classes."
          light
        />

        {/* Learning Flow Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {LEARNING_FLOW.map((step, i) => (
            <div key={step.step} className="relative">
              {/* Connector line on desktop */}
              {i < LEARNING_FLOW.length - 1 && (
                <div
                  className="hidden lg:block absolute top-7 left-full w-full h-0.5 z-0"
                  style={{
                    background: "linear-gradient(90deg, rgba(255,255,255,0.2), transparent)",
                    width: "calc(100% - 3rem)",
                    left: "4rem",
                  }}
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 flex flex-col items-center text-center gap-3">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg border-2"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    borderColor: "rgba(255,255,255,0.25)",
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {step.step}
                </div>
                <div>
                  <div
                    className="text-white font-semibold text-sm mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.title}
                  </div>
                  <p className="text-blue-200 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Activities grid */}
        <div className="max-w-3xl mx-auto">
          <h3
            className="text-white text-center text-lg font-semibold mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Activities in every batch
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ACTIVITIES.map((act) => (
              <div
                key={act.label}
                className="flex flex-col items-center text-center gap-2 bg-white/10 border border-white/15 rounded-2xl p-4"
              >
                <div className="text-amber-400">
                  {ACTIVITY_ICONS[act.icon] || null}
                </div>
                <span className="text-white text-sm font-medium leading-snug">
                  {act.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-blue-200 text-sm mt-10 max-w-xl mx-auto">
          Sessions are designed so every student speaks — not just watches. You
          will be gently encouraged and supported, not put on the spot.
        </p>
      </div>
    </section>
  );
}
