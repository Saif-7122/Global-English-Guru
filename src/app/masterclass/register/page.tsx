import type { Metadata } from "next";
import Link from "next/link";
import { getInterest, INTERESTS } from "@/data/launch";
import RegistrationForm from "./registration-form";
import styles from "../registration.module.css";

export const metadata: Metadata = {
  title: "Register or Ask About an Online Batch",
  robots: { index: false, follow: true },
};

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string | string[] }>;
}) {
  const interest = getInterest((await searchParams).interest);
  const isMasterclass = interest === "masterclass";

  return (
    <>
      <Link className={styles.back} href={isMasterclass ? "/#masterclass" : "/#courses"}>
        {isMasterclass ? "Back to masterclass details" : "Back to online courses"}
      </Link>
      <p className={styles.kicker}>{INTERESTS[interest]}</p>
      <h1 id="registration-title">{isMasterclass ? "Masterclass registration" : "Ask about the next batch"}</h1>
      <p className={styles.description}>
        {isMasterclass
          ? "Enter your details and we’ll email your registration confirmation."
          : "Leave your details and our team will follow up about the next batch and how to enrol."}
      </p>
      <RegistrationForm interest={interest} />
    </>
  );
}
