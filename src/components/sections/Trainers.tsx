import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import { DemoButton } from "@/components/ui/Button";

// ── Trainer data ────────────────────────────────────────────
// Founder — fully populated
// Slots 2-5 — photos and details to be filled later
const ALL_TRAINERS = [
  {
    id: "sajid-ahmed",
    photo: "/assets/founder(Sajid Ahmed).webp",
    name: "Mr. Sajid Ahmed",
    role: "Founder & Master Faculty",
    qualifications: "Certified Personality Development & Soft Skills Trainer",
    experience: "20+ years of teaching experience",
    philosophy:
      "Trained by The Times of India and Eenadu. Worked with national-level institutes like VETA (Chennai) and Career Launcher (Delhi). Trained B.Tech, MBA, Degree students, School Children, Teachers, Officials, Business people and Homemakers.",
  },
  {
    id: "trainer-2",
    photo: null,
    name: "Coming Soon",
    role: "Communication Coach",
    qualifications: null,
    experience: null,
    philosophy: null,
  },
  {
    id: "trainer-3",
    photo: null,
    name: "Coming Soon",
    role: "Career & Interview Coach",
    qualifications: null,
    experience: null,
    philosophy: null,
  },
  {
    id: "trainer-4",
    photo: null,
    name: "Coming Soon",
    role: "Spoken English Coach",
    qualifications: null,
    experience: null,
    philosophy: null,
  },
  {
    id: "trainer-5",
    photo: null,
    name: "Coming Soon",
    role: "Personality Development Coach",
    qualifications: null,
    experience: null,
    philosophy: null,
  },
];

export default function Trainers() {
  return (
    <section
      id="trainers"
      className="section-pad"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="container-xl">
        <SectionHeading
          eyebrow="Our Communication Coaches"
          title="Real instructors. Real experience. Real results."
          subtitle="Meet the coaches who will guide your communication journey. Small batches mean they will know you by name — and by goal."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ALL_TRAINERS.map((trainer) => {
            const isEmpty = !trainer.photo && trainer.name === "Coming Soon";
            return (
              <article
                key={trainer.id}
                className="card overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                aria-labelledby={`trainer-name-${trainer.id}`}
              >
                {/* Photo section — no video overlay */}
                <div className="relative aspect-square bg-slate-100">
                  {trainer.photo ? (
                    <Image
                      src={trainer.photo}
                      alt={`${trainer.name} — ${trainer.role}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    // Empty placeholder for upcoming trainers
                    <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-100 to-slate-200">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center"
                        style={{ background: "var(--color-primary-light)" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="var(--color-primary)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                      <span
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: "var(--color-primary)" }}
                      >
                        Photo Coming Soon
                      </span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3
                        id={`trainer-name-${trainer.id}`}
                        className={`text-xl font-bold leading-snug ${isEmpty ? "text-slate-400" : "text-slate-900"}`}
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {trainer.name}
                      </h3>
                      <p
                        className="text-sm font-medium mt-0.5"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {trainer.role}
                      </p>
                    </div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ background: isEmpty ? "#cbd5e1" : "var(--color-primary)" }}
                      aria-hidden="true"
                    >
                      GG
                    </div>
                  </div>

                  {isEmpty ? (
                    <p className="text-slate-400 text-sm italic">
                      Trainer details and certifications will be updated soon.
                    </p>
                  ) : (
                    <>
                      <div className="flex flex-col gap-2 mb-4">
                        {trainer.qualifications && (
                          <div className="flex items-start gap-2 text-sm text-slate-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                            <span>{trainer.qualifications}</span>
                          </div>
                        )}
                        {trainer.experience && (
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            <span>{trainer.experience}</span>
                          </div>
                        )}
                      </div>
                      {trainer.philosophy && (
                        <blockquote
                          className="border-l-4 pl-4 italic text-slate-600 text-sm leading-relaxed"
                          style={{ borderColor: "var(--color-secondary)" }}
                        >
                          {trainer.philosophy}
                        </blockquote>
                      )}
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex justify-center mt-10">
          <DemoButton size="md" id="trainers-demo-btn" />
        </div>
      </div>
    </section>
  );
}
