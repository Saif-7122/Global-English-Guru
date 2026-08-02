import Image from "next/image";
import { SITE, WHATSAPP_URL } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ background: "var(--color-dark)" }}
      className="text-slate-300"
    >
      {/* Main footer grid */}
      <div className="container-xl py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded bg-white p-1 flex items-center justify-center">
                <Image
                  src="/assets/logo.png"
                  alt="Global English Guru Logo"
                  width={32}
                  height={32}
                  className="object-contain w-full h-full"
                />
              </div>
              <span
                className="text-white font-bold text-base"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {SITE.name}
              </span>
            </div>
            <p
              className="text-slate-400 text-sm leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {SITE.tagline}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              {SITE.shortDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                ["Home", "#home"],
                ["Why Us", "#why-us"],
                ["Courses", "#courses"],
                ["How It Works", "#how-it-works"],
                ["Trainers", "#trainers"],
                ["Reviews", "#reviews"],
                ["FAQ", "#faq"],
                ["Free Demo", SITE.googleFormUrl],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-amber-400" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href={`tel:${SITE.phone}`} className="hover:text-white transition-colors">{SITE.phone}</a>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-amber-400" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors break-all">{SITE.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0 text-amber-400" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="leading-relaxed">{SITE.address}</span>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors mt-1"
                  id="footer-whatsapp-btn"
                  aria-label="Chat on WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Policies */}
          <div>
            <h3
              className="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Follow Us
            </h3>
            <div className="flex gap-3 mb-6">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-pink-600 flex items-center justify-center text-white transition-colors"
                aria-label="Follow on Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a
                href={SITE.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-red-600 flex items-center justify-center text-white transition-colors"
                aria-label="Subscribe on YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
              </a>
              <a
                href={SITE.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center text-white transition-colors"
                aria-label="View on Google Maps"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </a>
            </div>

            <h3
              className="text-white font-semibold mb-3 text-sm uppercase tracking-wider"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Policies
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-slate-400">
              {[
                ["Privacy Policy", "/privacy-policy"],
                ["Terms & Conditions", "/terms"],
                ["Refund & Cancellation", "/refund-policy"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-xs text-slate-500 leading-relaxed">
              Student photographs, videos, names and testimonials are published
              only with explicit written consent.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-xl py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p>Confidence. Communication. Careers.</p>
        </div>
      </div>
    </footer>
  );
}
