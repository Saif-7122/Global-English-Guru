import { WHATSAPP_URL } from "@/data/site";

export default function Referral() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container-xl">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          style={{ background: "var(--color-primary-light)" }}
        >
          {/* Decorative icons */}
          <div className="absolute top-4 left-6 text-4xl opacity-20" aria-hidden="true">🎁</div>
          <div className="absolute bottom-4 right-6 text-4xl opacity-20" aria-hidden="true">✨</div>

          <div className="relative z-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-slate-900 mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Love our classes? Bring a friend.
            </h2>
            <p className="text-slate-700 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Refer a friend to Global English Guru and you receive{" "}
              <span className="font-bold text-slate-900 bg-amber-200 px-2 py-0.5 rounded">
                ₹500 off your next batch fee
              </span>{" "}
              when they enrol. Learning is better when a friend joins with you.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm"
              aria-label="Ask about the referral program on WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              Ask about referrals
            </a>

            <p className="text-slate-500 text-xs mt-6">
              Terms & conditions apply. Exact reward details will be provided by our team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
