interface PlaceholderImageProps {
  label: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  className?: string;
  height?: string;
}

const aspectMap = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/6]",
};

export default function PlaceholderImage({
  label,
  aspectRatio = "video",
  className = "",
  height,
}: PlaceholderImageProps) {
  return (
    <div
      className={`placeholder-block ${aspectMap[aspectRatio]} ${className}`}
      style={height ? { height, aspectRatio: "unset" } : undefined}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <div className="flex flex-col items-center gap-2">
        {/* Camera icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-60"
          aria-hidden="true"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
        <span className="text-center leading-snug text-sm font-medium text-slate-500 max-w-[180px]">
          {label}
        </span>
      </div>
    </div>
  );
}
