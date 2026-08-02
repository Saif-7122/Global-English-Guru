import { COURSES } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import { DemoButton } from "@/components/ui/Button";

export default function Courses() {
  return (
    <section id="courses" className="section-pad bg-white">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Our Courses"
          title="Two courses. One goal — confident communication."
          subtitle="Both courses are live online, practical, and limited to a maximum of 10 students per batch. Choose the one that matches your goal."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {COURSES.map((course) => {
            const isCareer = course.id === "career";
            const primary = isCareer ? "#f59e0b" : "var(--color-primary)";
            const primaryBg = isCareer ? "#fef3c7" : "var(--color-primary-light)";
            const btnClass = isCareer
              ? "bg-amber-500 hover:bg-amber-400 text-white"
              : "bg-blue-700 hover:bg-blue-600 text-white";
            const badgeBg = isCareer
              ? "bg-amber-100 text-amber-700"
              : "bg-blue-50 text-blue-700";

            return (
              <article
                key={course.id}
                className="card overflow-hidden flex flex-col"
                aria-labelledby={`course-name-${course.id}`}
              >
                {/* Card header */}
                <div
                  className="px-6 pt-6 pb-4 border-b"
                  style={{ borderColor: primaryBg }}
                >
                  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${badgeBg}`}>
                    {course.badge}
                  </span>
                  <h3
                    id={`course-name-${course.id}`}
                    className="text-xl sm:text-2xl font-bold text-slate-900 mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {course.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {course.audience}
                  </p>
                </div>

                <div className="px-6 py-5 flex-1 flex flex-col gap-5">
                  {/* Ideal for */}
                  <div>
                    <h4
                      className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Ideal for
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {course.audienceDetails.map((a) => (
                        <li
                          key={a}
                          className="text-xs text-slate-600 bg-slate-100 px-3 py-1 rounded-full"
                        >
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h4
                      className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      What you'll achieve
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {course.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2 text-sm text-slate-700">
                          <span
                            className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs mt-0.5"
                            style={{ background: primary }}
                            aria-hidden="true"
                          >
                            ✓
                          </span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Activities */}
                  <div>
                    <h4
                      className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Practical activities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {course.activities.map((a) => (
                        <span
                          key={a}
                          className="text-xs font-medium px-2.5 py-1 rounded-lg"
                          style={{ background: primaryBg, color: primary }}
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />

                  {/* Fee + batch info */}
                  <div className="border-t border-slate-100 pt-4 flex items-end justify-between gap-4">
                    <div>
                      <div
                        className="text-3xl font-bold"
                        style={{ fontFamily: "var(--font-display)", color: primary }}
                      >
                        {course.fee}
                      </div>
                      <div className="text-slate-500 text-xs mt-0.5">
                        {course.batchSize} · {course.format}
                      </div>
                      <div className="text-slate-400 text-xs mt-1 italic">
                        {course.batchNote}
                      </div>
                    </div>
                    <a
                      href="#demo"
                      className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${btnClass}`}
                      id={`course-demo-btn-${course.id}`}
                      aria-label={`Register for a free demo — ${course.name}`}
                    >
                      Free Demo →
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Can't decide */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm mb-4">
            Not sure which course suits you? Attend the free demo — your coach will help you decide.
          </p>
          <DemoButton size="md" id="courses-demo-btn" />
        </div>
      </div>
    </section>
  );
}
