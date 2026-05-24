import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="6" cy="20" r="2" fill="currentColor" opacity="0.5" />
        <circle cx="14" cy="8" r="2" fill="currentColor" />
        <circle cx="22" cy="16" r="2" fill="currentColor" opacity="0.7" />
        <path
          d="M6 20 L14 8 L22 16"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M22 16 L24 22"
          stroke="currentColor"
          strokeWidth="0.8"
          strokeDasharray="2 2"
          opacity="0.4"
        />
      </svg>
      <span className="font-display text-lg font-bold tracking-tight">
        TRACE<span className="ml-0.5 font-normal opacity-80">field</span>
      </span>
    </Link>
  );
}
