"use client";

import Link from "next/link";
import { useActionState } from "react";
import { registerHref, type Interest } from "@/data/launch";
import { register } from "./actions";
import launch from "@/components/launch/launch.module.css";
import styles from "../registration.module.css";

export default function RegistrationForm({ interest }: { interest: Interest }) {
  const [state, submit, pending] = useActionState(register, { message: "" }, registerHref(interest));
  const isMasterclass = interest === "masterclass";

  return (
    <form action={submit} className={styles.form}>
      <input type="hidden" name="interest" value={interest} />
      {state.message && <p className={styles.error} role="alert">{state.message}</p>}
      <label className={styles.field} htmlFor="attendee-name">
        Full name
        <input id="attendee-name" name="name" autoComplete="name" defaultValue={state.values?.name} maxLength={100} required />
      </label>
      <label className={styles.field} htmlFor="attendee-email">
        Email address
        <input id="attendee-email" name="email" type="email" autoComplete="email" defaultValue={state.values?.email} maxLength={254} required />
      </label>
      <label className={styles.field} htmlFor="attendee-phone">
        Phone number
        <input id="attendee-phone" name="phone" type="tel" autoComplete="tel" defaultValue={state.values?.phone} maxLength={32} aria-describedby="phone-hint" required />
        <span id="phone-hint">Include your country code if you’re outside India.</span>
      </label>
      <div hidden>
        <label htmlFor="attendee-website">Leave this field empty</label>
        <input id="attendee-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className={styles.consent}>
        <input name="consent" value="yes" type="checkbox" defaultChecked={state.values?.consent} required />
        <span>I agree that Global English Guru can call or email me about {isMasterclass ? "this masterclass" : "this course"}.</span>
      </label>
      <p className={styles.privacy}>
        We’ll use your details to confirm your submission and follow up. <Link href="/privacy-policy">Privacy policy</Link>
      </p>
      <button type="submit" className={`${launch.button} ${launch.primary}`} disabled={pending}>
        {pending ? "Submitting…" : isMasterclass ? "Complete registration" : "Send course inquiry"}
      </button>
    </form>
  );
}
