import type { Metadata } from "next";
import CourseCards from "@/components/launch/CourseCards";
import styles from "@/components/launch/launch.module.css";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Live Online English Courses",
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <main id="site-content" className={`${styles.wrap} ${styles.section}`}>
      <div className={`${styles.sectionIntro} ${styles.subpageTitle}`}>
        <p className={styles.overline}>Live online courses</p>
        <h1>Find your English course.</h1>
        <p>Practise everyday English or build the communication skills you need for interviews and work.</p>
      </div>
      <CourseCards />
      <a id="demo" className={styles.textLink} href={SITE.googleFormUrl}>Ask about a regular course demo</a>
    </main>
  );
}
