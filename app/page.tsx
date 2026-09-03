import Link from "next/link";

const featuredAssets = [
  {
    id: "SE-01",
    category: "Mega-Scale Land Development",
    title: "Project 1: Sofia Suburbs (Bankya / Malo Buchino)",
    location: "Greater Sofia Area",
    price: "€8,000,000",
    priceNote: "Excl. VAT",
    size: "260,000 m²",
    slug: "sofia-suburbs-bankya",
    description:
      "Mega-scale land package for a premium gated residential community or longevity village. Active final zoning phase for full regulation (UPI) with direct planned highway access.",
    bullets: [
      "260,000 m² unified core layout (112k m² & 133k m² plots)[cite: 1]",
      "Active final zoning phase with minimal municipal conversion fees[cite: 1]",
      "Direct planned access to Malo Buchino highway junction[cite: 1]",
    ],
  },
  {
    id: "SE-02",
    category: "Golf & Residential Resort Land",
    title: "Project 2: Razlog Valley Master-Planned Plot",
    location: "Bansko / Razlog Valley",
    price: "€1,950,000",
    priceNote: "Excl. VAT",
    size: "80,015 m²",
    slug: "razlog-valley-master-plot",
    description:
      "Ready-to-develop mountain residential land adjacent to an 18-hole championship golf course, subdivided into 91 independent villa plots with utilities on-site[cite: 1].",
    bullets: [
      "Fully regulated urban land (UPI) allowing up to 64,000 m² GBA[cite: 1]",
      "Subdivided into 91 independent individual villa building plots[cite: 1]",
      "Essential electricity and water grid connections available on-site[cite: 1]",
    ],
  },
  {
    id: "SE-03",
    category: "Thermal Spa Resort & Concession",
    title: "Project 3: Banya Thermal Villa Resort",
    location: "Banya / Razlog Municipality",
    price: "€1,700,000",
    priceNote: "Excl. VAT",
    size: "1,200 m² Built + Land",
    slug: "banya-thermal-villa-resort",
    description:
      "Operational upscale boutique thermal resort with 7 completed luxury villas (Act 16), a private mineral water pipeline, and active 15-year exploitation concession[cite: 1].",
    bullets: [
      "7 completed luxury villas with individual private mineral pools[cite: 1]",
      "Secured long-term 15-year thermal mineral water exploitation concession[cite: 1]",
      "Immediate expansion potential for an additional 1,000 m² GBA[cite: 1]",
    ],
  },
  {
    id: "SE-04",
    category: "Hospitality & Wellness Asset",
    title: "Project 4: Bansko Alpine Hotel",
    location: "Bansko Ski Resort",
    price: "€1,200,000",
    priceNote: "Excl. VAT",
    size: "1,800 m² Built (33 Keys)",
    slug: "bansko-alpine-hotel",
    description:
      "Near-complete wellness hotel asset featuring 33 keys, operational elevator, indoor SPA with swimming pool, restaurant, and lobby bar[cite: 1].",
    bullets: [
      "33 keys: 25 double rooms, 4 luxury maisonettes, and 4 studios[cite: 1]",
      "Indoor SPA zone with pool, sauna, restaurant, and conference room[cite: 1]",
      "Secured off-site valet parking lot within 300 meters[cite: 1]",
    ],
  },
  {
    id: "SE-05",
    category: "Commercial Development Land",
    title: "Project 5: Sapareva Banya Commercial Plot",
    location: "Sapareva Banya",
    price: "€1,200,000",
    priceNote: "Excl. VAT",
    size: "9,000 m² Land",
    slug: "sapareva-banya-commercial-plot",
    description:
      "Regulated commercial plot in Europe's premier 103°C geyser thermal resort, priority-listed for municipal mineral water network connections[cite: 1].",
    bullets: [
      "Fully Regulated Urban Commercial Land (UPI)[cite: 1]",
      "Directly adjacent to operational mineral water pool complexes[cite: 1]",
      "Ideal for medical spa hotel or luxury longevity clinic[cite: 1]",
    ],
  },
  {
    id: "SE-06",
    category: "Balneo Sanatorium Refurbishment",
    title: "Project 6: Shipkovo Balneo Sanatorium",
    location: "Shipkovo Baths",
    price: "€600,000",
    priceNote: "Incl. VAT",
    size: "4,000 m² Built / 3,374 m² Plot",
    slug: "shipkovo-balneo-sanatorium",
    description:
      "Massive solid-structure sanatorium building on main avenue, directly adjacent to active healing thermal springs[cite: 1]. Value-add medical spa opportunity[cite: 1].",
    bullets: [
      "4,000 m² solid structure on a 3,374 m² regulated plot[cite: 1]",
      "Proximity to abundant mineral water thermal springs[cite: 1]",
      "Includes contractual option to acquire 5,000 m² adjacent expansion land[cite: 1]",
    ],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-charcoal text-bone">
      {/* Hero Section */}
      <section className="border-b border-hairline/60 py-20 px-6 max-w-6xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass block mb-3">
          Bulgaria Investment Assets
        </span>
        <h1 className="font-display text-4xl md:text-6xl text-bone max-w-3xl leading-tight mb-6">
          Prime Commercial Assets & Mineral Spring Developments
        </h1>
        <p className="text-steel text-base md:text-lg max-w-2xl leading-relaxed mb-8">
          We present specialized resort conversions, thermal spring estates, regulated development land, and residential assets across Bulgaria — tailored for Scandinavian and international capital.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/properties"
            className="px-6 py-3 bg-brass text-charcoal font-mono text-xs uppercase tracking-widest font-semibold hover:bg-bone transition"
          >
            View Commercial Assets
          </Link>
          <Link
            href="/residential"
            className="px-6 py-3 border border-brass/50 text-brass font-mono text-xs uppercase tracking-widest hover:bg-brass hover:text-charcoal transition"
          >
            View Residential
          </Link>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="border-b border-hairline/60 bg-charcoal/50 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="font-display text-3xl md:text-4xl text-brass">{featuredAssets.length}</div>
            <div className="font-mono text-xs uppercase text-steel mt-1">Institutional Assets</div>
          </div>
          <div>
            <div className="font-display text-3xl md:text-4xl text-brass">260k m²</div>
            <div className="font-mono text-xs uppercase text-steel mt-1">Largest Parcel</div>
          </div>
          <div>
            <div className="font-display text-3xl md:text-4xl text-brass">100%</div>
            <div className="font-mono text-xs uppercase text-steel mt-1">Thermal / Mineral Focus</div>
          </div>
          <div>
            <div className="font-display text-3xl md:text-4xl text-brass">Full</div>
            <div className="font-mono text-xs uppercase text-steel mt-1">Legal & Closing Concierge</div>
          </div>
        </div>
      </section>

      {/* Featured Commercial Assets */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-10 border-b border-hairline/40 pb-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-brass block mb-1">
              Curated Selection
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-bone">All Featured Assets</h2>
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-brass">
            Showing All ({featuredAssets.length})
          </span>
        </div>

        <div className="space-y-8">
          {featuredAssets.map((asset) => (
            <div
              key={asset.id}
              className="border border-hairline/60 bg-charcoal/50 p-6 rounded hover:border-brass/60 transition"
            >
              <div className="flex justify-between items-start border-b border-hairline/40 pb-4 mb-4">
                <div>
                  <span className="font-mono text-xs text-brass uppercase tracking-widest block mb-1">
                    {asset.id} — {asset.category}
                  </span>
                  <h3 className="font-display text-xl text-bone">{asset.title}</h3>
                  <span className="text-xs text-steel font-mono">{asset.location}</span>
                </div>
                <div className="text-right font-mono">
                  <div className="text-xl text-brass font-bold">{asset.price}</div>
                  <div className="text-[10px] text-steel uppercase">{asset.priceNote}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6 items-center">
                <div className="md:col-span-3">
                  <p className="text-steel text-xs leading-relaxed mb-3">{asset.description}</p>
                  <ul className="space-y-1 text-xs text-steel">
                    {asset.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-brass">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-1 flex justify-end">
                  <Link
                    href={`/contact?asset=${asset.id}`}
                    className="w-full text-center py-2.5 px-4 border border-brass/50 text-brass hover:bg-brass hover:text-charcoal transition font-mono text-xs uppercase tracking-widest"
                  >
                    Request Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}