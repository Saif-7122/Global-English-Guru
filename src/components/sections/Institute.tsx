import { SITE } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";

export default function Institute() {
  return (
    <section id="institute" className="section-pad bg-white">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Established Since 2009"
          title="15 years of results. Now available online."
          subtitle="Global English Guru has been training students in Kurnool and Hyderabad since 2009. You are joining a credible, trusted institution — not a new online experiment."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left — Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative aspect-square sm:aspect-portrait rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/assets/students in seminar (2017).webp"
                alt="Students participating in a communication seminar at Global English Guru in 2017"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-square sm:aspect-portrait rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/assets/awarded as the best soft skills trainer in the divison.webp"
                alt="Founder Mr. Sajid Ahmed receiving the Best Soft Skills Trainer award"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right — Info */}
          <div>
            <div className="text-slate-900 text-center md:text-left mb-6">
              <div className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>
                A real institute. A real track record.
              </div>
              <p className="text-slate-600 text-base max-w-lg">
                15+ years in Kurnool. 5 years in Hyderabad. 200+ five-star Google reviews.
                The same coaching quality is now available online, for students across India.
              </p>
            </div>

            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs mt-0.5" style={{ background: "var(--color-primary)" }} aria-hidden="true">✓</span>
                <div>
                  <span className="font-semibold text-slate-900 block mb-1">Accountable & Trustworthy</span>
                  <span className="text-sm text-slate-500">We have a physical location and real reputation to protect.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs mt-0.5" style={{ background: "var(--color-primary)" }} aria-hidden="true">✓</span>
                <div>
                  <span className="font-semibold text-slate-900 block mb-1">Proven Curriculum</span>
                  <span className="text-sm text-slate-500">Our activities have been refined with hundreds of offline students.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs mt-0.5" style={{ background: "var(--color-primary)" }} aria-hidden="true">✓</span>
                <div>
                  <span className="font-semibold text-slate-900 block mb-1">Real Coaches, Real Accessibility</span>
                  <span className="text-sm text-slate-500">Your coaches are reachable on WhatsApp. Questions about class or progress are answered directly — not by a support bot.</span>
                </div>
              </li>
            </ul>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-sm border border-slate-100 flex items-center justify-center text-xl" aria-hidden="true">
                📍
              </div>
              <div className="text-center sm:text-left">
                <div className="font-semibold text-slate-900 text-sm mb-1">Headquarters</div>
                <div className="text-slate-500 text-sm leading-relaxed mb-3">
                  {SITE.address}
                </div>
                <a
                  href={SITE.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold inline-flex items-center gap-1 transition-colors"
                  style={{ color: "var(--color-primary)" }}
                >
                  View on Google Maps
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
