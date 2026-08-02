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
              A short live session. No payment required. No preparation needed. See how it works before you commit.
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

            {/* Contact info */}
            <div className="flex flex-col gap-2 mb-6 text-sm">
              <a
                href="tel:+917660981213"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-700 transition-colors"
                aria-label="Call us"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +91 76609 81213 &nbsp;/&nbsp; +91 93470 47827
              </a>
              <span className="text-slate-400 text-xs">Or register below and we will call you back</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-blue-700 font-medium bg-blue-50 px-3 py-2 rounded-lg inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Parents and guardians are welcome to attend the free demo
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
