import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Nordic Capital Advisors",
  description:
    "Sunrise Estates connects international buyers and investors with carefully selected residential and investment properties in Bulgaria.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-charcoal text-bone">
      {/* 1. HERO SECTION */}
      <section className="relative border-b border-hairline/60 px-6 py-20 md:py-28 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-brass">
            About · Nordic Capital Advisors
          </p>

          <h1 className="mt-4 font-display text-4xl leading-[1.1] text-bone md:text-5xl lg:text-6xl">
            Bulgarian property with an international perspective.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-steel md:text-lg">
            Sunrise Estates connects international buyers and investors with
            carefully selected properties across Bulgaria, combining local
            market knowledge with a clear and professional approach.
          </p>

          <div className="mt-10 h-px w-16 bg-brass" />
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="px-6 py-16 md:py-24 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
              Our Approach
            </p>

            <h2 className="mt-3 font-display text-3xl leading-snug text-bone md:text-4xl">
              A focused approach to property.
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-relaxed text-steel md:text-base lg:col-span-7">
            <p>
              Buying property in another country requires more than access to
              listings. It requires local knowledge, clear information and
              reliable support throughout the process.
            </p>

            <p>
              We focus on a carefully selected portfolio rather than high-volume
              listings, with attention to location, condition, documentation
              and long-term potential.
            </p>

            <p>
              Our clients include international buyers looking for a home,
              holiday property or a carefully considered investment in Bulgaria.
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERNATIONAL FOCUS */}
      <section className="border-y border-hairline/60 bg-panel px-6 py-16 md:py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
              International Focus
            </p>

            <h2 className="mt-3 font-display text-3xl leading-snug text-bone md:text-4xl">
              Local expertise. International standards.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-steel md:text-base">
              We work with buyers and investors from Scandinavia, the UK and
              across Europe, providing straightforward communication and
              practical support from initial enquiry through to completion.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-hairline/60 bg-charcoal/50 p-8">
              <span className="font-mono text-xs text-brass">
                01 / CLARITY
              </span>

              <h3 className="mt-3 font-display text-xl text-bone">
                Clear Information
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-steel">
                Straightforward information on properties, ownership,
                costs and key considerations.
              </p>
            </div>

            <div className="border border-hairline/60 bg-charcoal/50 p-8">
              <span className="font-mono text-xs text-brass">
                02 / LOCATION
              </span>

              <h3 className="mt-3 font-display text-xl text-bone">
                Local Knowledge
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-steel">
                Practical insight into locations, infrastructure,
                accessibility and local market conditions.
              </p>
            </div>

            <div className="border border-hairline/60 bg-charcoal/50 p-8 sm:col-span-2 lg:col-span-1">
              <span className="font-mono text-xs text-brass">
                03 / SUPPORT
              </span>

              <h3 className="mt-3 font-display text-xl text-bone">
                End-to-End Assistance
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-steel">
                Practical support throughout the purchase process,
                including coordination with relevant professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INVESTMENT PROPERTIES */}
      <section className="px-6 py-16 md:py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
                Investment
              </p>

              <h2 className="mt-3 font-display text-3xl leading-snug text-bone md:text-4xl">
                Property with potential.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-steel md:text-base">
                Our investment properties are selected with a broader view of
                the asset — considering location, scale, accessibility,
                infrastructure and potential future use.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-steel md:text-base">
                Selected opportunities are presented with international and
                Scandinavian investors in mind, with relevant information
                highlighted clearly within each property listing.
              </p>
            </div>

            <div className="border border-brass/30 bg-panel p-8 lg:col-span-6">
              <h3 className="font-display text-xl text-brass">
                Investment Considerations
              </h3>

              <ul className="mt-6 space-y-4 border-t border-hairline/50 pt-6 font-mono text-xs text-steel">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 bg-brass" />
                  <span>
                    <strong className="text-bone">Location:</strong>{" "}
                    Accessibility, surrounding amenities and regional
                    development.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 bg-brass" />
                  <span>
                    <strong className="text-bone">Development:</strong>{" "}
                    Existing structures, development potential and permitted use.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 bg-brass" />
                  <span>
                    <strong className="text-bone">Infrastructure:</strong>{" "}
                    Roads, utilities, parking and essential services.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 bg-brass" />
                  <span>
                    <strong className="text-bone">Market Potential:</strong>{" "}
                    Demand, possible uses and long-term positioning.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR PRINCIPLES */}
      <section className="border-t border-hairline/60 bg-panel px-6 py-16 md:py-24 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
              Our Principles
            </p>

            <h2 className="mt-3 font-display text-3xl text-bone md:text-4xl">
              How we work.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-hairline/60 bg-charcoal/40 p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-brass">
                01
              </p>

              <h3 className="mt-3 font-display text-lg text-bone">
                Selective
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-steel">
                A focused portfolio of properties selected for their
                characteristics and potential.
              </p>
            </div>

            <div className="border border-hairline/60 bg-charcoal/40 p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-brass">
                02
              </p>

              <h3 className="mt-3 font-display text-lg text-bone">
                Transparent
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-steel">
                Clear information and realistic expectations from the outset.
              </p>
            </div>

            <div className="border border-hairline/60 bg-charcoal/40 p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-brass">
                03
              </p>

              <h3 className="mt-3 font-display text-lg text-bone">
                Personal
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-steel">
                Advice and communication tailored to each client's objectives.
              </p>
            </div>

            <div className="border border-hairline/60 bg-charcoal/40 p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-brass">
                04
              </p>

              <h3 className="mt-3 font-display text-lg text-bone">
                Long-Term
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-steel">
                Building lasting relationships beyond the completion of a sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. KEY FACTS */}
      <section className="px-6 py-16 lg:px-16">
        <div className="mx-auto max-w-6xl border-y border-hairline/60 py-10">
          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
            <div>
              <p className="font-display text-3xl text-brass md:text-4xl">
                Bulgaria
              </p>

              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-steel">
                Property Market
              </p>
            </div>

            <div>
              <p className="font-display text-3xl text-brass md:text-4xl">
                Nordic &amp; EU
              </p>

              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-steel">
                International Focus
              </p>
            </div>

            <div>
              <p className="font-display text-3xl text-brass md:text-4xl">
                Selected
              </p>

              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-steel">
                Property Portfolio
              </p>
            </div>

            <div>
              <p className="font-display text-3xl text-brass md:text-4xl">
                End-to-End
              </p>

              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-steel">
                Client Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="px-6 py-16 md:py-24 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
            Get in Touch
          </p>

          <h2 className="mt-3 font-display text-3xl text-bone md:text-5xl">
            Looking for property in Bulgaria?
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-steel md:text-base">
            Whether you are looking for a home, holiday property or investment
            opportunity, we are available to discuss your requirements.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/residential"
              className="inline-flex items-center justify-center border border-brass bg-brass px-8 py-4 font-mono text-xs uppercase tracking-widest text-charcoal transition-opacity hover:opacity-90"
            >
              View Properties
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-brass px-8 py-4 font-mono text-xs uppercase tracking-widest text-brass transition-colors hover:bg-brass hover:text-charcoal"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}