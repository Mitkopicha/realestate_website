"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/properties", label: "Assets" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline/60 bg-charcoal/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-display text-lg tracking-wide text-bone">
          Sunrise Estates
        </Link>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
                  active ? "text-brass" : "text-steel hover:text-bone"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden text-steel"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="font-mono text-xs uppercase tracking-widest">
            {open ? "Close" : "Menu"}
          </span>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-hairline/60 px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-xs uppercase tracking-[0.18em] text-steel hover:text-bone"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
