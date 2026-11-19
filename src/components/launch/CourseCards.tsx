import Link from "next/link";
import { AudioLines, BriefcaseBusiness, Check, Plus } from "lucide-react";
import { COURSES } from "@/data/site";
import { getInterest, registerHref } from "@/data/launch";
import styles from "./launch.module.css";

export default function CourseCards() {
  return (
    <div className={styles.courseGrid}>
      {COURSES.map((course) => {
        const everyday = course.id === "everyday";
        const Icon = everyday ? AudioLines : BriefcaseBusiness;
        return (
          <article key={course.id} className={styles.courseCard} data-course={course.id}>
            <div className={styles.courseArt}>
              <span className={styles.courseLabel}>{course.badge}</span>
              <Icon className={styles.courseObject} size={70} strokeWidth={1.05} aria-hidden="true" />
            </div>
            <div className={styles.courseBody}>
              <p className={styles.courseFormat}>{course.format} <span aria-hidden="true">·</span> Up to 10 per batch</p>
              <h3>{course.name}</h3>
              <p>{course.audience}.</p>
              <ul className={styles.courseHighlights}>
                {course.outcomes.slice(0, 3).map((outcome) => (
                  <li key={outcome}><Check size={17} aria-hidden="true" />{outcome}</li>
                ))}
              </ul>
              <details className={styles.courseDetails}>
                <summary>See practice activities <Plus size={16} aria-hidden="true" /></summary>
                <ul>{course.activities.map((activity) => <li key={activity}>{activity}</li>)}</ul>
              </details>
              <div className={styles.courseBottom}>
                <p><span>Course fee</span><strong>{course.fee}</strong></p>
                <Link
                  href={registerHref(getInterest(course.id))}
                  className={`${styles.button} ${styles.primary}`}
                  aria-label={`Ask about the next batch of ${course.name}`}
                >
                  Ask about the next batch
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
