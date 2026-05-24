"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { Button } from "./ui/Button";

const navLinks = [
  { label: "EVALS", href: "#evals", num: "01" },
  { label: "FLEET", href: "#fleet", num: "02" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.15em] text-muted transition-colors hover:text-foreground"
            >
              <span className="text-[9px] opacity-50">{link.num}</span>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="#" variant="primary" className="hidden sm:inline-flex !py-2 !px-4 !text-[10px]">
            Get early access
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center border border-border-light text-foreground lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-muted hover:text-foreground"
              >
                {link.num} {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
