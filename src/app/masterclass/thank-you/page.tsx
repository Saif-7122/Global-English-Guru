import type { Metadata } from "next";
import Link from "next/link";
import { getInterest, INTERESTS } from "@/data/launch";
import { SITE } from "@/data/site";
import launch from "@/components/launch/launch.module.css";
import styles from "../registration.module.css";

export const metadata: Metadata = {
  title: "Thank you for registering",
  robots: { index: false, follow: true },
};

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string | string[]; interest?: string | string[] }>;
}) {
  const params = await searchParams;
  const emailPending = params.email === "pending";
  const interest = getInterest(params.interest);
  const isMasterclass = interest === "masterclass";

  return (
    <>
      <p className={styles.kicker}>{INTERESTS[interest]}</p>
      <h1 id="registration-title">{isMasterclass ? "Thank you for registering!" : "Thanks for your interest!"}</h1>
      <p className={styles.description}>
        {emailPending
          ? "We received your details. Your confirmation email may take a little longer to arrive."
          : "We received your details. Check your inbox for the confirmation email, or your spam folder if it takes a while."}
      </p>
      <p className={styles.description}>
        Have a question? <a href={`mailto:${SITE.email}`}>Email Global English Guru</a>.
      </p>
      <Link className={`${launch.button} ${launch.primary} ${styles.return}`} href="/">Visit again</Link>
    </>
  );
}
