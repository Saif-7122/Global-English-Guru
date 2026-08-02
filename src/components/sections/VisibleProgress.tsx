import { PROGRESS_MILESTONES } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";

const PROGRESS_ICONS: Record<string, React.ReactNode> = {
  video: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>,
  activity: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  "message-circle": <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  briefcase: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  mic: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
  users: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  film: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/></svg>,
};

export default function VisibleProgress() {
  return (
    <section
      id="progress"
      className="section-pad bg-white"
    >
      <div className="container-xl">
        <SectionHeading
          eyebrow="Visible Progress"
          title="You will see yourself improve — week by week"
          subtitle="Unlike traditional classes where you wonder if you're getting better, our approach creates visible evidence of your growth."
        />

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
              style={{ background: "var(--color-border)" }}
              aria-hidden="true"
            />

            <div className="flex flex-col gap-8">
              {PROGRESS_MILESTONES.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div
                    key={m.label}
                    className={`relative flex items-start gap-4 sm:gap-0 ${
                      isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 pl-14 sm:pl-0 ${
                        isLeft ? "sm:pr-10 sm:text-right" : "sm:pl-10 sm:text-left"
                      }`}
                    >
                      <div className="card p-4 inline-block text-left">
                        <div
                          className="font-semibold text-slate-900 text-base mb-1"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {m.label}
                        </div>
                        <p className="text-slate-500 text-sm">{m.description}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div
                      className="absolute left-0 sm:left-1/2 sm:-translate-x-1/2 w-12 h-12 rounded-full border-4 border-white shadow-md flex items-center justify-center"
                      style={{
                        background: "var(--color-primary)",
                        color: "white",
                      }}
                    >
                      {PROGRESS_ICONS[m.icon]}
                    </div>

                    {/* Spacer on opposite side for desktop */}
                    <div className="hidden sm:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Portfolio note */}
          <div
            className="mt-12 rounded-2xl p-6 border border-blue-100"
            style={{ background: "var(--color-primary-light)" }}
          >
            <div className="flex items-start gap-3">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white"
                style={{ background: "var(--color-primary)" }}
                aria-hidden="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              </div>
              <div>
                <div
                  className="font-semibold text-blue-900 mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Communication Portfolio — Coming Soon
                </div>
                <p className="text-blue-800 text-sm leading-relaxed">
                  Selected speaking activities and progress recordings may be
                  organised for students during the course. This feature is
                  being developed and details will be shared when available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
