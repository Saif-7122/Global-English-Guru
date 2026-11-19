import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AudioLines, CalendarDays, MessageCircle, Mic, Plus, UsersRound, Video } from "lucide-react";
import CourseCards from "@/components/launch/CourseCards";
import VideoGallery from "@/components/launch/VideoGallery";
import VoiceStage from "@/components/launch/VoiceStage";
import styles from "@/components/launch/launch.module.css";
import { INTERESTS, registerHref, REVIEWS } from "@/data/launch";
import { SITE, TRAINERS } from "@/data/site";

const title = "Spoken English Masterclass & Live Online Courses";
const description = "Practise spoken English with Global English Guru. Register for the masterclass or explore live online courses in everyday English and career communication.";
const [trainer] = TRAINERS;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: { title: `${title} | ${SITE.name}`, description, type: "website", url: "/", images: [trainer.photo] },
  twitter: { card: "summary_large_image", title, description, images: [trainer.photo] },
};

const practice = [
  { title: "Introduce yourself", description: "Say where you’re from, what you do, and one thing you’re interested in.", icon: Mic },
  { title: "Keep a conversation going", description: "Ask a follow-up question that invites the other person to tell you more.", icon: MessageCircle },
  { title: "Give a clear interview answer", description: "State your point first, then give one example that supports it.", icon: AudioLines },
];

const questions = [
  { question: "Who are the courses for?", answer: "Everyday English is for learners who understand English but hesitate to speak. Career Communication is designed for final-year students, recent graduates, and working professionals." },
  { question: "How do the online classes work?", answer: "Classes are live and interactive, with up to 10 learners in a batch. Expect speaking practice, role-plays or discussions, and feedback from your trainer." },
  { question: "Does registering interest reserve a course seat?", answer: "The form sends an inquiry to our team. We’ll follow up about batch dates and how to enrol." },
  { question: "What happens after I register for the masterclass?", answer: "Look for a confirmation email. The Global English Guru team can follow up with the session details and joining instructions." },
];

export default function HomePage() {
  const details = [
    process.env.MASTERCLASS_DATE_TIME,
    process.env.MASTERCLASS_FORMAT,
    process.env.MASTERCLASS_FEE,
  ].flatMap((value) => value?.trim() || []);

  return (
    <main id="site-content">
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={`${styles.wrap} ${styles.heroLayout}`}>
          <div className={styles.heroCopy}>
            <p className={styles.heroKicker}><span /> Live online masterclass</p>
            <h1 id="hero-title">You know<br />English.<br /><em>Now speak it.</em></h1>
            <p className={styles.heroDescription}>Join Sajid Ahmed for a live spoken English masterclass. Practise finding your words in conversations, at work, and in interviews.</p>
            <div className={styles.heroActions}>
              <Link href={registerHref()} className={`${styles.button} ${styles.acid}`}>Register for the masterclass</Link>
              <Link href="#courses" className={`${styles.button} ${styles.ghost}`}>Explore online courses</Link>
            </div>
          </div>
          <VoiceStage />
        </div>
        <div className={styles.benefits}>
          <div className={styles.wrap}>
            <p><Video size={19} aria-hidden="true" /> Live speaking practice</p>
            <p><UsersRound size={20} aria-hidden="true" /> Up to 10 per course batch</p>
            <p><MessageCircle size={19} aria-hidden="true" /> Personal feedback</p>
          </div>
        </div>
      </section>

      <section id="masterclass" className={styles.masterclass}>
        <div className={`${styles.wrap} ${styles.masterclassGrid}`}>
          <div className={styles.masterclassCopy}>
            <p className={styles.overline}>Spoken English masterclass</p>
            <h2>Inside the masterclass.</h2>
            <p>Work through practical examples with Sajid Ahmed. Try introducing yourself, keeping a conversation moving, and answering an interview question clearly.</p>
            {details.length > 0 && (
              <ul className={styles.schedule} aria-label="Masterclass details">
                {details.map((detail, index) => <li key={index}><CalendarDays size={16} aria-hidden="true" />{detail}</li>)}
              </ul>
            )}
            <Link href={registerHref()} className={`${styles.button} ${styles.acid}`}>Register for the masterclass</Link>
          </div>
          <div className={styles.promptPanel}>
            <h3>Try a speaking prompt</h3>
            {practice.map(({ title, description, icon: Icon }) => (
              <details key={title} className={styles.prompt}>
                <summary><span><Icon size={20} aria-hidden="true" />{title}</span><Plus size={17} aria-hidden="true" /></summary>
                <p>{description}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className={`${styles.wrap} ${styles.section}`}>
        <div className={styles.sectionIntro}>
          <p className={styles.overline}>Live online courses</p>
          <h2>Two ways to keep speaking.</h2>
          <p>Both courses give you time to speak. Pick the one that matches the conversations you want to have.</p>
        </div>
        <CourseCards />
      </section>

      <section id="videos" className={`${styles.wrap} ${styles.section}`}>
        <div className={styles.sectionIntro}>
          <p className={styles.overline}>Student videos</p>
          <h2>Hear from our learners.</h2>
        </div>
        <VideoGallery />
      </section>

      <section id="trainer" className={styles.trainerSection}>
        <div className={`${styles.wrap} ${styles.trainerLayout}`}>
          <figure className={styles.trainerPhoto}>
            <Image src={trainer.photo} alt="Sajid Ahmed speaking at an event with a microphone" fill sizes="(max-width: 720px) 90vw, 440px" />
            <figcaption>Founder and lead trainer</figcaption>
          </figure>
          <div className={styles.trainerCopy}>
            <p className={styles.overline}>Meet your trainer</p>
            <h2>Sajid Ahmed</h2>
            <p>A certified soft skills and personality development trainer with 20 years of teaching experience. He founded Global English Guru in Kurnool and coaches learners in spoken English, interviews, and professional communication.</p>
            <div className={styles.trainerArchive}>
              <figure>
                <Image src="/assets/students in seminar (2017).webp" alt="Learners attending a seminar in 2017" width={480} height={405} />
                <figcaption>Student seminar, 2017</figcaption>
              </figure>
              <figure>
                <Image src="/assets/awarded as the best soft skills trainer in the divison.webp" alt="Sajid Ahmed receiving a soft skills training award" width={585} height={473} />
                <figcaption>Soft skills trainer award</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className={`${styles.wrap} ${styles.section}`}>
        <div className={styles.sectionIntro}>
          <p className={styles.overline}>Google reviews</p>
          <h2>In their own words.</h2>
        </div>
        <div className={styles.reviewGrid}>
          {REVIEWS.map(({ name, quote }) => (
            <figure className={styles.review} key={name}>
              <span aria-label="5 out of 5 stars" role="img">★★★★★</span>
              <blockquote>“{quote}”</blockquote>
              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </div>
        <a className={styles.textLink} href="https://www.google.com/search?q=Global+English+Guru+Kurnool">Find Global English Guru on Google</a>
      </section>

      <section id="faq" className={styles.faq}>
        <div className={`${styles.wrap} ${styles.faqLayout}`}>
          <div className={styles.sectionIntro}><p className={styles.overline}>Questions</p><h2>Before you join.</h2></div>
          <div>
            {questions.map(({ question, answer }) => (
              <details key={question} className={styles.faqItem}>
                <summary>{question}<Plus size={19} aria-hidden="true" /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCall}>
        <div className={styles.wrap}>
          <div><p className={styles.overline}>{INTERESTS.masterclass}</p><h2>Ready to speak up?</h2></div>
          <Link href={registerHref()} className={`${styles.button} ${styles.acid}`}>Register for the masterclass</Link>
        </div>
      </section>
    </main>
  );
}
