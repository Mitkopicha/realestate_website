import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-hairline/60 bg-panel text-steel">
      <div className="mx-auto max-w-6xl px-6 py-12 md:flex md:items-center md:justify-between">
        {/* Brand & Info */}
        <div>
          <Link href="/" className="font-display text-xl text-bone">
            Sunrise Estates
          </Link>
          <p className="mt-2 text-xs text-steel-dim max-w-sm">
            Commercial real estate, thermal spring developments, and resort conversions in Bulgaria for Nordic & international investors.
          </p>
        </div>

        {/* Navigation & Contact */}
        <div className="mt-8 grid grid-cols-2 gap-8 md:mt-0 md:flex md:gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-brass">
              Navigation
            </p>
            <ul className="mt-3 space-y-2 font-mono text-xs">
              <li>
                <Link href="/properties" className="hover:text-bone">
                  Assets
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-bone">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-bone">
                  Contact
                </Link>
              </li>
              <li><Link href="/consultation" className="hover:text-bone">
  Consultation
</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-brass">
              Direct Advisory
            </p>
            <ul className="mt-3 space-y-2 font-mono text-xs">
              <li className="text-bone">Burgas & Sofia, Bulgaria</li>
              <li>
                <a
                  href="mailto:borislav.m.vasilev@gmail.com"
                  className="hover:text-bone text-brass underline"
                >
                  borislav.m.vasilev@gmail.com
                </a>
              </li>
              <li>
                Dimitar:{" "}
                <a href="tel:+359890304010" className="hover:text-bone">
                  +359 89 030 4010
                </a>
              </li>
              <li>
                Borislav:{" "}
                <a href="tel:+359876756855" className="hover:text-bone">
                +359 87 675 6855
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-hairline/40 mx-auto max-w-6xl px-6 py-6 text-center md:text-left font-mono text-[11px] text-steel-dim flex flex-col md:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} Sunrise Estates. All rights reserved.</p>
        <p>Registered in the Republic of Bulgaria</p>
      </div>
    </footer>
  );
}