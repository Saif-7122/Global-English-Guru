"use client";

import { useState } from "react";
import { SITE } from "@/data/site";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    language: "Telugu",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to Google Form
    window.open(SITE.googleFormUrl, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-5 sm:p-8 rounded-3xl shadow-xl border-2 border-slate-100 max-w-md w-full mx-auto"
    >
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 sm:mb-6 font-display text-center">
        Apply Now
      </h3>

      <div className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-slate-700 mb-1.5"
          >
            Full Name
          </label>
          {/*
            font-size: 16px (text-base) prevents iOS/Android auto-zoom on input focus.
            min-height 48px meets WCAG 2.5.5 touch target requirement.
          */}
          <input
            type="text"
            id="name"
            required
            autoComplete="name"
            className="w-full px-4 py-3.5 text-base rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:outline-none transition-colors"
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-slate-700 mb-1.5"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            required
            autoComplete="tel"
            className="w-full px-4 py-3.5 text-base rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:outline-none transition-colors"
            placeholder="+91 XXXXX XXXXX"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div>
          <label
            htmlFor="language"
            className="block text-sm font-semibold text-slate-700 mb-1.5"
          >
            Native Language
          </label>
          <select
            id="language"
            className="w-full px-4 py-3.5 text-base rounded-xl border-2 border-slate-200 focus:border-blue-600 focus:outline-none transition-colors bg-white"
            value={formData.language}
            onChange={(e) =>
              setFormData({ ...formData, language: e.target.value })
            }
          >
            <option value="Telugu">Telugu</option>
            <option value="Hindi">Hindi</option>
            <option value="Kannada">Kannada</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Submit — full width, 52px tall for easy tap */}
        <button
          type="submit"
          className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-secondary-dark)] text-white font-bold font-display px-6 py-4 rounded-xl mt-2 transition-colors shadow-[0_4px_0_0_var(--color-primary-dark)] active:translate-y-1 active:shadow-none hover:translate-y-px hover:shadow-[0_2px_0_0_var(--color-primary-dark)] min-h-[52px]"
        >
          Submit Application
        </button>
      </div>

      <p className="text-center text-slate-400 text-xs mt-4">
        You will be redirected to our secure Google Form to complete your
        registration.
      </p>
    </form>
  );
}
