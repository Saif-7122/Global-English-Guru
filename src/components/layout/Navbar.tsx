"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { SITE } from "@/data/site";
import { DemoButton } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Why Us", href: "#why-us" },
  { label: "Courses", href: "#courses" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Trainers", href: "#trainers" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
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
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo / Brand */}
            <a
              href="#home"
              className="flex items-center gap-2 text-white no-underline"
              aria-label="Global English Guru — Home"
            >
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white rounded-xl p-1 shadow-sm">
                <Image
                  src="/assets/logo.png"
                  alt="Global English Guru Logo"
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </div>
              <span
                className="text-white font-bold text-base sm:text-lg leading-tight"
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

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
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
          <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
            <span
              className="text-white font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {SITE.name}
            </span>
            <button
              className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <nav className="flex-1 px-6 py-6 flex flex-col gap-2" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white hover:bg-white/10 rounded-lg px-4 py-3 font-medium transition-colors text-base"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="px-6 pb-8">
            <DemoButton size="md" className="w-full justify-center" id="mobile-demo-btn" />
          </div>
        </div>
      </div>
    </>
  );
}
