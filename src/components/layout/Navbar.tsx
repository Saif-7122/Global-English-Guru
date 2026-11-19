"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SITE } from "@/data/site";
import { DemoButton } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Masterclass", href: "/" },
  { label: "Why Us", href: "/courses#why-us" },
  { label: "Courses", href: "/courses#courses" },
  { label: "How It Works", href: "/courses#how-it-works" },
  { label: "Trainers", href: "/courses#trainers" },
  { label: "Reviews", href: "/courses#reviews" },
  { label: "FAQ", href: "/courses#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container-xl">
          {/* h-14 on smallest screens, h-16 from sm, h-18 on lg */}
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
            {/* Logo / Brand */}
            <a
              href="/"
              className="flex items-center gap-2 text-white no-underline min-w-0"
              aria-label="Global English Guru — Home"
            >
              {/* logo box: smaller on tiny screens */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0 flex items-center justify-center bg-white rounded-xl p-0.5 shadow-sm">
                <Image
                  src="/assets/logo.png"
                  alt="Global English Guru Logo"
                  width={56}
                  height={56}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              {/* Brand text: truncate at very small sizes */}
              <span
                className="text-white font-bold text-sm sm:text-base lg:text-lg leading-tight truncate"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Global English Guru
              </span>
            </a>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-6"
              aria-label="Primary navigation"
            >
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <DemoButton size="sm" id="navbar-demo-btn" />
            </div>

            {/* Mobile Hamburger — minimum 44×44px tap target */}
            <button
              className="lg:hidden flex items-center justify-center w-11 h-11 text-white rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
          aria-hidden="true"
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-slate-900 shadow-2xl transition-transform duration-300 flex flex-col ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 h-14 sm:h-16 border-b border-white/10">
            <span
              className="text-white font-bold text-sm"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {SITE.name}
            </span>
            {/* 44×44px close button */}
            <button
              className="flex items-center justify-center w-11 h-11 text-white/70 hover:text-white rounded-lg hover:bg-white/10"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <nav className="flex-1 px-4 py-4 flex flex-col gap-1 overflow-y-auto" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                /* min 44px tap target height */
                className="flex items-center text-slate-300 hover:text-white hover:bg-white/10 rounded-lg px-4 py-3 font-medium transition-colors text-base min-h-[44px]"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="px-5 pb-8 pt-4 border-t border-white/10">
            <DemoButton size="md" className="w-full justify-center" id="mobile-demo-btn" />
          </div>
        </div>
      </div>
    </>
  );
}
