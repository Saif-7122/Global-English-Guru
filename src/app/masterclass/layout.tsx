import registrationStyles from "./registration.module.css";

export default function RegistrationLayout({ children }: { children: React.ReactNode }) {
  return (
    <main id="site-content" className={registrationStyles.page}>
      <section className={registrationStyles.panel} aria-labelledby="registration-title">
        {children}
      </section>
    </main>
  );
}
