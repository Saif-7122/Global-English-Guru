"use client";

import { SITE, WHATSAPP_URL } from "@/data/site";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "whatsapp" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
  id?: string;
  "aria-label"?: string;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-[var(--color-primary)] hover:bg-[var(--color-secondary-dark)] text-white font-semibold font-display shadow-md hover:shadow-lg",
  secondary:
    "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-semibold font-display",
  whatsapp:
    "bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold font-display shadow-md hover:shadow-lg",
  outline:
    "border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white font-semibold font-display",
};

const sizeStyles: Record<string, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  target,
  rel,
  id,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = [
    "inline-flex items-center gap-2 transition-all duration-200 ease-in-out cursor-pointer select-none",
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        id={id}
        aria-label={ariaLabel}
        // CTA click tracking placeholder: data-track-click="cta"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      id={id}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

/* ── Convenience exports ─────────────────────────────────── */
export function DemoButton({
  size = "lg",
  className = "",
  id,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
  id?: string;
}) {
  return (
    <Button
      href={SITE.googleFormUrl}
      target="_blank"
      variant="primary"
      size={size}
      className={className}
      id={id || "btn-demo"}
      aria-label="Register for a Free Demo Session"
    >
      Register for a Free Demo
    </Button>
  );
}

export function WhatsAppButton({
  size = "md",
  className = "",
  label = "Chat on WhatsApp",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}) {
  return (
    <Button
      href={WHATSAPP_URL}
      target="_blank"
      variant="secondary"
      size={size}
      className={className}
      id="btn-whatsapp-inline"
      aria-label="Chat with Global English Guru on WhatsApp"
    >
      {label}
    </Button>
  );
}
