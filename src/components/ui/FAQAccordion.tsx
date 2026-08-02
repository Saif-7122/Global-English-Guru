"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              className={`w-full flex items-start justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 ${
                isOpen ? "bg-blue-50" : "bg-white hover:bg-slate-50"
              }`}
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
              id={`faq-question-${i}`}
            >
              <span
                className={`font-semibold text-base sm:text-lg leading-snug ${
                  isOpen ? "text-blue-700" : "text-slate-900"
                }`}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.q}
              </span>
              <span
                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? "bg-blue-600 text-white rotate-45"
                    : "bg-slate-100 text-slate-500"
                }`}
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>
            <div
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-6 pt-1 pb-5 text-slate-600 leading-relaxed text-base">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
