import { DEMO_EXPECTATIONS } from "@/data/site";
import ApplicationForm from "@/components/ui/ApplicationForm";

export default function DemoRegistration() {
  return (
    <section
      id="demo"
      className="section-pad gradient-cta"
    >
      <div className="container-xl">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left side — Info */}
          <div className="flex-1 p-8 md:p-12 border-b md:border-b-0 md:border-r border-slate-100">
            <h2
              className="text-3xl font-bold text-slate-900 mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Book your Free Demo
            </h2>
            <p className="text-slate-600 mb-8">
              Experience our unique communication lab approach before committing. No payment or account required.
            </p>

            <h3 className="font-semibold text-slate-900 text-sm uppercase tracking-wider mb-4">
              What to expect:
            </h3>
            <ul className="flex flex-col gap-3 mb-8">
              {DEMO_EXPECTATIONS.map((exp, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] mt-0.5"
                    style={{ background: "var(--color-primary)" }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="text-slate-700 text-sm leading-snug">{exp}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-sm text-amber-600 font-medium bg-amber-50 px-3 py-2 rounded-lg inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Batches fill quickly. Register today.
            </div>
          </div>

          {/* Right side — Form */}
          <div className="flex-1 p-8 md:p-12 bg-slate-50 flex flex-col justify-center items-center">
            <ApplicationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
