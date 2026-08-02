interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`${centered ? "text-center" : ""} max-w-3xl ${centered ? "mx-auto" : ""} mb-12 ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-sm font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full ${
            light
              ? "bg-white/15 text-white"
              : "bg-blue-50 text-blue-700"
          }`}
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-slate-900"
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-relaxed ${
            light ? "text-blue-100" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
