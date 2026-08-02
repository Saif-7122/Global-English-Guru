import { FAQS } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";

export default function FAQ() {
  return (
    <section id="faq" className="section-pad bg-white">
      <div className="container-xl">
        <SectionHeading
          eyebrow="Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our courses, batches, and methodology."
        />

        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={FAQS} />
          
          <div className="text-center mt-10">
            <p className="text-slate-500 text-sm mb-4">
              Still have a question we didn't cover?
            </p>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors"
            >
              Ask us on WhatsApp
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
