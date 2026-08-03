import Link from "next/link";
import { getFeaturedProperties } from "@/lib/properties";
import AssetFile from "@/components/asset-file";

export default function Home() {
  const featured = getFeaturedProperties().slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-hairline/60">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 md:pt-32">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
            Bulgaria Investment Assets
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.15] text-bone md:text-6xl">
            Prime commercial assets &{" "}
            <span className="italic text-steel">mineral spring developments.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-steel">
            We present specialized resort conversions, thermal spring estates, and regulated development land across Bulgaria — tailored for Norwegian and Scandinavian investors.
          </p>
          <div className="mt-10 flex gap-4">
            <Link
              href="/properties"
              className="border border-brass bg-brass px-6 py-3 font-mono text-xs uppercase tracking-widest text-charcoal transition-opacity hover:opacity-90"
            >
              View current assets
            </Link>
            <Link
              href="/about"
              className="border border-hairline px-6 py-3 font-mono text-xs uppercase tracking-widest text-bone transition-colors hover:border-steel"
            >
              About the firm
            </Link>
          </div>
        </div>
      </section>

      {/* Positioning strip */}
      <section className="border-b border-hairline/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
          {[
            ["5", "Institutional Assets"],
            ["260k m²", "Largest Single Parcel"],
            ["100%", "Thermal / Mineral Focus"],
            ["Full", "Legal & Closing Concierge"],
          ].map(([stat, label]) => (
            <div key={label}>
              <p className="font-display text-2xl text-bone">{stat}</p>
              <p className="mt-1 text-xs text-steel">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured assets */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-2xl text-bone">Featured assets</h2>
          <Link
            href="/properties"
            className="font-mono text-xs uppercase tracking-widest text-steel hover:text-brass"
          >
            View all →
          </Link>
        </div>

        <div className="mt-10">
          {featured.map((property) => (
            <AssetFile key={property.refCode} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
}