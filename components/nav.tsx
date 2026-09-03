"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/properties", label: "Assets" },
  { href: "/residential", label: "Residential" },
  { href: "/consultation", label: "Consultation" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline/60 bg-charcoal/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        
        {/* Logo */}
        <Link href="/" className="font-display text-lg tracking-wide text-bone">
          Nordic Capital <span className="text-brass">Advisors</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 md:flex md:items-center">
          {links.map((link) => {
            const active = pathname === link.href;
            const isContact = link.href === "/contact";

            if (isContact) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border border-brass/40 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-brass hover:bg-brass hover:text-charcoal transition-all"
                >
                  {link.label}
                </Link>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
                  active ? "text-brass font-semibold" : "text-steel hover:text-bone"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-steel hover:text-bone transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="font-mono text-xs uppercase tracking-widest">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {open && (
        <nav className="flex flex-col gap-2 border-t border-hairline/60 bg-charcoal px-6 py-4 md:hidden">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-2 font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
                  active ? "text-brass font-semibold" : "text-steel hover:text-bone"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}