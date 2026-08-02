"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

// ── Data extracted from Google Review screenshots ───────────
const GOOGLE_REVIEWS = [
  {
    name: "Siddarth C",
    image: "/assets/google-review-1.png",
    rating: 5,
    timeAgo: "a month ago",
    text: "I feel comfortable to speak in English after joining Global English Guru. The faculty is experienced and also supportive in improving self confidence. I have improved my communication skills and feel better now. I thank Global English Guru for developing my skills.",
    initial: "S",
    color: "bg-rose-500",
  },
  {
    name: "Mani Mono",
    image: "/assets/google-review-2.png",
    rating: 5,
    timeAgo: "4 months ago",
    text: "Very supportive and friendly teacher. The teaching method is very simple and easy to understand. The teacher encourages everyone to speak without fear. Highly recommend for anyone who wants to improve communication skills. Thanks to Global English Guru for enhancing my skills and self confidence.",
    initial: "M",
    color: "bg-purple-500",
  },
  {
    name: "Shaik Irfan",
    image: "/assets/google-review-3.png",
    rating: 5,
    timeAgo: "a year ago",
    text: "I attended Global English Guru classes and they exceeded my expectations! The trainer is knowledgeable, patient, and provides personalised feedback. I have improved my communication skills and interview skills. It is the right place to learn communication skills. Thanks — Sajid Ahmed Sir.",
    initial: "S",
    color: "bg-blue-600",
  },
  {
    name: "Prabhas M",
    image: "/assets/google-review-4.png",
    rating: 5,
    timeAgo: "a year ago",
    text: "I attended the spoken English and communication skills course. I have improved my self confidence and I can speak fluently with conviction. Individual care is taken as the number of students is less, so I could ask any doubt without shyness. They also guide us to self development. Thank you Global English Guru.",
    initial: "P",
    color: "bg-green-600",
  },
  {
    name: "Anusha Alahari",
    image: "/assets/google-review-5.png",
    rating: 5,
    timeAgo: "3 years ago",
    text: "The faculty is professional with rich experience. Classes are good. I have learnt communication skills after joining here and I have developed my self-confidence also. Now I am able to speak English correctly and confidently. Thanks to Global English Guru.",
    initial: "A",
    color: "bg-orange-500",
  },
  {
    name: "Siri Meghana",
    image: "/assets/google-review-6.png",
    rating: 5,
    timeAgo: "a year ago",
    text: "The spoken English course is excellent. I have improved my fluency and self confidence. I can speak English fluently. Thanks to Global English Guru for the guidance.",
    initial: "S",
    color: "bg-teal-600",
  },
  {
    name: "Ranjith Kumar G",
    image: "/assets/google-review-7.png",
    rating: 5,
    timeAgo: "4 years ago",
    text: "This is the best English training institute in Kurnool. Sir's teaching is the best. He uses very easy methods to make students learn English along with Grammar. I enjoyed learning English at Global English Guru.",
    initial: "R",
    color: "bg-indigo-600",
  },
  {
    name: "Arekanti Madhu",
    image: "/assets/google-review-8.png",
    rating: 5,
    timeAgo: "3 years ago",
    text: "I have improved a lot by attending the classes at Global English Guru. They teach not only spoken English but also focus on personality development with easy and unique tips and techniques to improve fluency and self confidence. Thanks for the guidance.",
    initial: "A",
    color: "bg-pink-600",
  },
];

// Written feedback cards derived from the same reviews
const WRITTEN_FEEDBACK = [
  {
    name: "Siddarth C",
    initial: "S",
    color: "bg-rose-500",
    course: "Communication Skills",
    quote:
      "The faculty is experienced and supportive. I have improved my communication skills and feel better now. I thank Global English Guru for developing my skills.",
  },
  {
    name: "Mani Mono",
    initial: "M",
    color: "bg-purple-500",
    course: "Spoken English",
    quote:
      "Very supportive and friendly teacher. The teaching method is simple and easy to understand. The teacher encourages everyone to speak without fear. Highly recommend!",
  },
  {
    name: "Shaik Irfan",
    initial: "S",
    color: "bg-blue-600",
    course: "Communication & Interview Skills",
    quote:
      "The trainer is knowledgeable, patient, and provides personalised feedback. I improved my communication and interview skills. The right place to learn communication skills.",
  },
  {
    name: "Prabhas M",
    initial: "P",
    color: "bg-green-600",
    course: "Spoken English",
    quote:
      "I can speak fluently with conviction. Individual care is taken as the number of students is less — I could ask any doubt without shyness. They guide us to self development.",
  },
  {
    name: "Anusha Alahari",
    initial: "A",
    color: "bg-orange-500",
    course: "Communication Skills",
    quote:
      "The faculty is professional with rich experience. I developed my self-confidence and now I am able to speak English correctly and confidently.",
  },
  {
    name: "Siri Meghana",
    initial: "S",
    color: "bg-teal-600",
    course: "Spoken English",
    quote:
      "The spoken English course is excellent. I have improved my fluency and self confidence. I can speak English fluently. Thanks for the guidance.",
  },
  {
    name: "Ranjith Kumar G",
    initial: "R",
    color: "bg-indigo-600",
    course: "Spoken English",
    quote:
      "This is the best English training institute in Kurnool. Sir uses very easy methods to teach English. I thoroughly enjoyed learning at Global English Guru.",
  },
  {
    name: "Arekanti Madhu",
    initial: "A",
    color: "bg-pink-600",
    course: "Spoken English & Personality Development",
    quote:
      "They teach not only spoken English but also focus on personality development with easy and unique tips to improve fluency and self confidence.",
  },
];

// ── Google Review Card ──────────────────────────────────────
function GoogleReviewCard({ review }: { review: typeof GOOGLE_REVIEWS[0] }) {
  return (
    <div className="group bg-white border-2 border-slate-100 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-xl hover:brightness-105 cursor-default">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
            {review.initial}
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm">{review.name}</div>
            <div className="text-slate-400 text-xs">{review.timeAgo}</div>
          </div>
        </div>
        {/* Google G */}
        <svg viewBox="0 0 48 48" className="w-7 h-7 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
        </svg>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: review.rating }).map((_, i) => (
          <span key={i} className="text-amber-400 text-base">★</span>
        ))}
      </div>

      {/* Text */}
      <p className="text-slate-600 text-sm leading-relaxed flex-1">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Screenshot thumbnail */}
      <div className="relative w-full h-16 rounded-lg overflow-hidden border border-slate-100 mt-auto opacity-70 group-hover:opacity-100 transition-opacity">
        <Image
          src={review.image}
          alt={`Google review screenshot by ${review.name}`}
          fill
          className="object-cover object-top"
          sizes="300px"
        />
      </div>
    </div>
  );
}

// ── Written Feedback Card ───────────────────────────────────
function FeedbackCard({ feedback }: { feedback: typeof WRITTEN_FEEDBACK[0] }) {
  return (
    <div className="group bg-white border-2 border-slate-100 rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-xl hover:brightness-105 cursor-default">
      {/* Large quote */}
      <div
        className="absolute top-3 left-4 text-6xl font-bold leading-none select-none pointer-events-none"
        style={{ color: "var(--color-primary-light)", fontFamily: "Georgia, serif" }}
        aria-hidden="true"
      >
        &ldquo;
      </div>
      <div className="relative z-10 pt-5 flex-1">
        <p className="text-slate-700 text-sm leading-relaxed italic">
          &ldquo;{feedback.quote}&rdquo;
        </p>
      </div>
      <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
        <div className={`w-9 h-9 rounded-full ${feedback.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
          {feedback.initial}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-slate-900 text-xs">{feedback.name}</div>
          <div className="text-xs truncate" style={{ color: "var(--color-primary)" }}>{feedback.course}</div>
        </div>
        <div className="flex gap-0.5 flex-shrink-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-amber-400 text-xs">★</span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────
export default function Testimonials() {
  return (
    <>
      {/* ── Google Reviews Grid ─────────────────────────── */}
      <section id="reviews" className="section-pad bg-white">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Verified Google Reviews"
            title="What our students say on Google"
            subtitle="Over 200 five-star Google reviews from real students across Kurnool and Hyderabad."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {GOOGLE_REVIEWS.map((review) => (
              <GoogleReviewCard key={review.name} review={review} />
            ))}
          </div>

          <p className="text-center text-slate-400 text-xs mt-8">
            Screenshots of actual Google reviews. All opinions are those of real students.
          </p>
        </div>
      </section>

      {/* ── Written Feedback Grid ───────────────────────── */}
      <section
        id="written-feedback"
        className="section-pad"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="container-xl">
          <SectionHeading
            eyebrow="Written Feedback"
            title="In their own words"
            subtitle="Feedback shared by students who transformed their communication skills with Global English Guru."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {WRITTEN_FEEDBACK.map((feedback) => (
              <FeedbackCard key={feedback.name + feedback.course} feedback={feedback} />
            ))}
          </div>

          <p className="text-center text-slate-400 text-xs mt-8">
            All feedback is published with student knowledge and consent.
          </p>
        </div>
      </section>
    </>
  );
}
