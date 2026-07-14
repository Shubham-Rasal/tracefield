"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CONTACT_MAILTO } from "@/lib/contact";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";

const navLinks = [
  { label: "Problem", href: "/#problem" },
  { label: "Proof", href: "/#proof" },
  { label: "Demo", href: "/demo" },
  { label: "Contact", href: CONTACT_MAILTO },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-light bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href={CONTACT_MAILTO} className="hidden sm:inline-flex !py-2 !px-4">
            Book a call
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center border border-border-light text-foreground md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border-light bg-background px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-sm uppercase tracking-widest text-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Button href={CONTACT_MAILTO} className="w-fit">
              Book a call
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
