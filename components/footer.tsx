import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-hairline/60 bg-panel text-steel">
      {/* Investor Concierge & Services Section */}
      <div className="border-b border-hairline/40 bg-panel/50 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 max-w-3xl">
            <h3 className="font-display text-2xl text-bone">
              Investor Concierge & Brokerage Services
            </h3>
            <p className="mt-2 text-sm text-steel-dim">
              We ensure a seamless, fully-assisted investment experience from the moment you land in Bulgaria.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Card 1: VIP Viewing Package */}
            <div className="rounded-lg border border-hairline/60 bg-panel p-6">
              <div className="flex items-start justify-between gap-4">
                <h4 className="font-display text-lg text-bone">
                  Full-Service Viewing Stay
                </h4>
                <span className="whitespace-nowrap rounded-full border border-brass/30 bg-brass/10 px-3 py-1 font-mono text-xs text-brass">
                  €2,000 Package
                </span>
              </div>
              
              <ul className="mt-4 space-y-2 text-xs font-mono text-steel">
                <li className="flex items-center gap-2">
                  <span className="text-brass">✓</span> Airport pickup & round-trip transfers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brass">✓</span> Up to 3 nights hotel accommodation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brass">✓</span> 3 days of guided asset & property viewings
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brass">✓</span> Full legal, administrative & notary assistance
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-brass">✓</span> Hosted dinner during your stay
                </li>
              </ul>

              <div className="mt-6 rounded border border-brass/20 bg-brass/5 p-3 text-xs text-steel">
                <p className="text-bone font-medium">
                 Fee Deduction Guarantee
                </p>
                <p className="mt-1 text-steel-dim">
                  The €2,000 package fee is 100% deductible from the final property price upon closing the deal.
                </p>
              </div>
            </div>

            {/* Card 2: Post-Acquisition Services */}
            <div className="flex flex-col justify-between rounded-lg border border-hairline/60 bg-panel p-6">
              <div>
                <h4 className="font-display text-lg text-bone">
                  Post-Acquisition & Construction Support
                </h4>
                <p className="mt-2 text-xs text-steel-dim">
                  Our advisory extends beyond transaction closing. We provide complete after-sales assistance to oversee and add maximum value to your asset portfolio:
                </p>
                <ul className="mt-4 space-y-2 text-xs font-mono text-steel">
                  <li className="flex items-center gap-2">
                    <span className="text-brass">✓</span> Vetted local construction & renovation teams
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brass">✓</span> Finishing works & interior fit-out oversight
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-brass">✓</span> Custom project estimates & ongoing site monitoring
                  </li>
                </ul>
              </div>
              
              <p className="mt-6 pt-4 border-t border-hairline/40 text-[11px] font-mono text-steel-dim">
                * Construction and finishing services are quoted individually based on project scope.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Contact Information */}
      <div className="mx-auto max-w-6xl px-6 py-12 md:flex md:items-center md:justify-between">
        {/* Brand & Info */}
        <div>
          <Link href="/" className="font-display text-xl text-bone">
            Nordic Capital Advisors
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
                  Contact & Consultation
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="hover:text-bone">
                  Contact & Consultation
                </Link>
              </li>
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
                Borislav:{" "}
                <a href="tel:+359876756855" className="hover:text-bone">
                  +359 87 675 6855
                </a>
              </li>
              <li>
                Dimitar:{" "}
                <a href="tel:+359890304010" className="hover:text-bone">
                  +359 89 030 4010
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-hairline/40 mx-auto max-w-6xl px-6 py-6 text-center md:text-left font-mono text-[11px] text-steel-dim flex flex-col md:flex-row justify-between gap-2">
        <p>© {new Date().getFullYear()} Nordic Capital Advisors. All rights reserved.</p>
        <p>Registered in the Republic of Bulgaria</p>
      </div>
    </footer>
  );
}