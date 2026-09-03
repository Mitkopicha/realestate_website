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
      "260,000 m² unified core layout (112k m² & 133k m² plots)",
      "Active final zoning phase with minimal conversion fees",
      "Direct planned access to Malo Buchino highway junction",
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
      "Ready-to-develop mountain residential land adjacent to an 18-hole championship golf course, subdivided into 91 independent villa plots with utilities on-site.",
    bullets: [
      "Fully regulated urban land (UPI) allowing up to 64,000 m² GBA",
      "Subdivided into 91 independent individual villa building plots",
      "Essential electricity and water connections available on-site",
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
      "Operational upscale boutique thermal resort with 7 completed luxury villas (Act 16), a private mineral water pipeline, and active 15-year exploitation concession.",
    bullets: [
      "7 completed luxury villas with individual private mineral pools",
      "Secured 15-year thermal mineral water exploitation concession",
      "Immediate expansion potential for an additional 1,000 m² GBA",
    ],
  },
  {
    id: "SE-04",
    category: "Hospitality Conversion",
    title: "Project 4: Black Sea Coast Boutique Hotel",
    location: "Sozopol / Black Sea Coast",
    price: "€2,400,000",
    priceNote: "Excl. VAT",
    size: "3,500 m² Built",
    slug: "black-sea-boutique-hotel",
    description:
      "Prime coastal hospitality asset with direct sea access, ideal for luxury boutique conversion or branded wellness resort operations.",
    bullets: [
      "Prime frontline position with unobstructed sea views",
      "Existing Act 16 structure with immediate renovation potential",
      "Private parking and outdoor amenity zone",
    ],
  },
  {
    id: "SE-05",
    category: "Thermal Mineral Estate",
    title: "Project 5: Velingrad Thermal SPA Development",
    location: "Velingrad / Rhodope Mountains",
    price: "€3,100,000",
    priceNote: "Excl. VAT",
    size: "45,000 m² Land",
    slug: "velingrad-thermal-spa-development",
    description:
      "High-yield thermal spa land development opportunity in the spa capital of the Balkans, featuring active mineral water springs on boundary.",
    bullets: [
      "Direct proximity to high-temperature mineral water source",
      "Approved master plan for 5-star medical & thermal resort",
      "Year-round tourism demand with high occupancy potential",
    ],
  },
  {
    id: "SE-06",
    category: "Commercial & Logistics Park",
    title: "Project 6: Maritsa Industrial Logistics Hub",
    location: "Plovdiv Industrial Zone",
    price: "€4,500,000",
    priceNote: "Excl. VAT",
    size: "120,000 m² Land",
    slug: "maritsa-industrial-logistics-hub",
    description:
      "Strategic industrial and commercial parcel situated right on the Trakia highway corridor, ideal for regional distribution or light manufacturing.",
    bullets: [
      "Direct Trakia Highway (A1) access and frontage",
      "Full industrial utility capacity (high-voltage electricity, gas)",
      "Regulated zoning for industrial and commercial storage",
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