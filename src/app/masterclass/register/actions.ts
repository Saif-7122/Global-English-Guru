"use server";

import { redirect, RedirectType } from "next/navigation";
import { getInterest } from "@/data/launch";

type RegistrationState = {
  message: string;
  values?: { name: string; email: string; phone: string; consent: boolean };
};

export async function register(
  _previous: RegistrationState,
  formData: FormData,
): Promise<RegistrationState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const consent = formData.get("consent") === "yes";
  const interest = getInterest(formData.get("interest"));
  const values = {
    name: name.slice(0, 100),
    email: email.slice(0, 254),
    phone: phone.slice(0, 32),
    consent,
  };
  const failure = (message: string) => ({ values, message });

  if (formData.get("website")) {
    return { message: "Please review your details and try again." };
  }
  if (!name || name.length > 100 || /[\x00-\x1F\x7F]/.test(name)) {
    return failure("Enter your full name.");
  }
  if (email.length > 254 || !/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(email)) {
    return failure("Enter a valid email address.");
  }
  const digits = phone.replace(/\D/g, "");
  const international = phone.startsWith("+");
  const validDigits = international ? /^[1-9]\d{6,14}$/.test(digits) : /^[1-9]\d{9}$/.test(digits);
  if (phone.length > 32 || !/^\+?[\d ().-]+$/.test(phone) || !validDigits) {
    return failure("Enter a valid phone number, including your country code if outside India.");
  }
  if (!consent) {
    return failure("Confirm that our team can contact you about your chosen programme.");
  }

  const endpoint = process.env.MASTERCLASS_APPS_SCRIPT_URL?.trim();
  const secret = process.env.MASTERCLASS_APPS_SCRIPT_SECRET?.trim();
  const unavailable = "Registration is temporarily unavailable. Please try again shortly.";
  if (!endpoint || !secret || !/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(endpoint)) {
    return failure(unavailable);
  }

  let status: string | undefined;
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone: international ? `+${digits}` : `+91${digits}`,
        consent,
        interest,
        secret,
      }),
      signal: AbortSignal.timeout(12_000),
    });
    if (!response.ok || !response.headers.get("content-type")?.includes("application/json")) {
      return failure(unavailable);
    }
    const result: { status?: string } = await response.json();
    status = result.status;
  } catch {
    return failure(unavailable);
  }

  if (status !== "confirmed" && status !== "pending") return failure(unavailable);
  const query = new URLSearchParams();
  if (status === "pending") query.set("email", "pending");
  if (interest !== "masterclass") query.set("interest", interest);
  const suffix = query.size ? `?${query}` : "";
  redirect(`/masterclass/thank-you${suffix}`, RedirectType.replace);
}
