import Image from "next/image";
import Link from "next/link";
import { registerHref } from "@/data/launch";
import { SITE } from "@/data/site";
import styles from "./launch.module.css";

const navigation = [
  { label: "Masterclass", href: "/#masterclass" },
  { label: "Online courses", href: "/#courses" },
  { label: "Student videos", href: "/#videos" },
  { label: "About us", href: "/#trainer" },
];

function Wordmark() {
  return (
    <Link href="/" className={styles.wordmark}>
      <Image src="/assets/logo.png" alt="" width={44} height={44} />
      <span>Global English<span> Guru</span></span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <a className={styles.skipLink} href="#site-content">Skip to content</a>
      <div className={`${styles.wrap} ${styles.headerInner}`}>
        <Wordmark />
        <nav aria-label="Main navigation" className={styles.headerNav}>
          {navigation.map(({ label, href }) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link href={registerHref()} className={`${styles.button} ${styles.acid} ${styles.navButton}`}>
          Register
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.wrap} ${styles.footerTop}`}>
        <div>
          <Wordmark />
          <p>Spoken English and communication coaching<br />from Kurnool, Andhra Pradesh.</p>
        </div>
        <nav aria-label="Explore Global English Guru">
          <h2>Explore</h2>
          {navigation.map(({ label, href }) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className={styles.footerContact}>
          <h2>Contact</h2>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={`tel:+${SITE.whatsappNumber}`}>+91 93470 47827</a>
          <a href="tel:+917660981213">+91 76609 81213</a>
          <a href={SITE.googleMapsUrl}>Find us on Google Maps</a>
        </div>
      </div>
      <div className={`${styles.wrap} ${styles.footerBottom}`}>
        <span>© {new Date().getFullYear()} Global English Guru</span>
        <nav aria-label="Site policies">
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/refund-policy">Refunds</Link>
        </nav>
      </div>
    </footer>
  );
}
