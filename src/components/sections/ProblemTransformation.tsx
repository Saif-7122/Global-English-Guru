import { PROBLEMS } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import { DemoButton } from "@/components/ui/Button";

export default function ProblemTransformation() {
  return (
    <section id="transformation" className="section-pad bg-white">
      <div className="container-xl">
        <SectionHeading
          eyebrow="You are not alone"
          title="Sound familiar? There's a better way."
          subtitle="Millions of people understand English perfectly but struggle when it's time to actually speak. That's exactly what we're here to fix."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          {/* Before column */}
          <div className="relative">
            <div className="text-center mb-6">
              <span className="inline-block bg-red-50 text-red-600 font-semibold text-sm px-4 py-2 rounded-full border border-red-100">
                😓 The Struggle
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {PROBLEMS.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-4"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-200 text-red-700 flex items-center justify-center text-xs font-bold mt-0.5" aria-hidden="true">
                    ✗
                  </span>
                  <span className="text-slate-700 text-base leading-snug">{p.problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow divider */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" aria-hidden="true">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
          </div>

          {/* After column */}
          <div className="relative">
            <div className="text-center mb-6">
              <span className="inline-block bg-green-50 text-green-700 font-semibold text-sm px-4 py-2 rounded-full border border-green-100">
                🌟 The Transformation
              </span>
            </div>
            <div className="flex flex-col gap-3">
              {PROBLEMS.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-xl px-4 py-4"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-200 text-green-700 flex items-center justify-center text-xs font-bold mt-0.5" aria-hidden="true">
                    ✓
                  </span>
                  <span className="text-slate-700 text-base leading-snug">{p.solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-slate-500 text-sm mt-8 max-w-xl mx-auto">
          Outcomes depend on active participation, consistent practice and individual effort.
          We focus on building skills — not making guarantees.
        </p>

        <div className="flex justify-center mt-8">
          <DemoButton size="lg" id="transform-demo-btn" />
        </div>
      </div>
    </section>
  );
}
