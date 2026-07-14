import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/contact";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border-light px-6 py-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <Logo variant="footer" />
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-wider text-muted">
          <Link href="/demo" className="hover:text-foreground">
            Demo
          </Link>
          <Link href={CONTACT_MAILTO} className="hover:text-foreground">
            {CONTACT_EMAIL}
          </Link>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-[1200px] text-center text-xs text-muted">
        © 2026 Tracefield, Inc.
      </p>
    </footer>
  );
}
