import Link from "next/link";

const investmentAssets = [
  {
    id: "SE-01",
    category: "Mega-Scale Land Development",
    title: "Project 1: Sofia Suburbs (Bankya / Malo Buchino)",
    location: "Greater Sofia Area",
    price: "€8,000,000",
    priceNote: "Excl. VAT",
    size: "260,000 m²",
    slug: "sofia-suburbs-bankya",
    bullets: [
      "260,000 m² mega-land footprint (core layout: 112,448 m² & 133,048 m² plots) for gated community or longevity village",
      "Active final zoning phase (UPI status expected in 2–4 months) with low 8th category conversion fees",
      "Plotted internal streets in national cadastre with direct planned access to Malo Buchino highway junction",
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
    bullets: [
      "Fully Regulated Urban Land (UPI) allowing up to 64,000 m² Total Built-Up Area (GBA/РЗП)",
      "Officially subdivided into 91 individual villa plots with power and water grids available on-site",
      "Directly adjacent to a premier championship 18-hole golf course",
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
    bullets: [
      "7 completed 2-story luxury villas (Act 16 permits) with individual private mineral pool layouts",
      "Secured, newly renewed 15-year thermal mineral water exploitation concession & private pipeline",
      "Vacant regulated land permits immediate construction of an additional 1,000 m² GBA",
    ],
  },
  {
    id: "SE-04",
    category: "Near-Complete Wellness Hotel",
    title: "Project 4: Bansko Alpine Hotel Asset",
    location: "Bansko Ski Resort",
    price: "€1,200,000",
    priceNote: "Excl. VAT",
    size: "1,800 m² GBA",
    slug: "bansko-alpine-hotel",
    bullets: [
      "33 keys (25 double rooms, 4 luxury maisonettes, 4 studios) with plastered walls and tiled bathrooms",
      "Indoor SPA zone with pool, restaurant, reception, lobby bar, conference room, and 5-stop elevator",
      "Includes secured off-site valet parking layout on a dedicated lot within 300 meters",
    ],
  },
  {
    id: "SE-05",
    category: "Commercial Thermal Land",
    title: "Project 5: Sapareva Banya Commercial Plot",
    location: "Sapareva Banya",
    price: "€1,200,000",
    priceNote: "Excl. VAT",
    size: "9,000 m²",
    slug: "sapareva-banya-commercial-plot",
    bullets: [
      "Fully Regulated Urban Commercial Land (UPI) designed for a medical spa hotel or longevity clinic",
      "Located in Europe's premier 103°C natural geyser resort, next to active mineral complexes",
      "Priority-listed for the upcoming municipal mineral water pipe network connection",
    ],
  },
  {
    id: "SE-06",
    category: "Medical Spa & Balneo Refurbishment",
    title: "Project 6: Shipkovo Balneo Sanatorium",
    location: "Shipkovo Baths, Balkan Mountains",
    price: "€600,000",
    priceNote: "Incl. VAT",
    size: "4,000 m² GBA",
    slug: "shipkovo-balneo-sanatorium",
    bullets: [
      "Solid 4,000 m² building structure on 3,374 m² regulated plot for complete value-add refurbishment",
      "Situated directly on main avenue adjacent to active mineral springs with abundant thermal water",
      "Includes exclusive contractual right to acquire an additional 5,000 m² adjacent park land",
    ],
  },
];

export default function AssetsPage() {
  return (
    <main className="min-h-screen bg-charcoal text-bone px-6 py-12 max-w-6xl mx-auto">
      {/* Page Header */}
      <section className="border-b border-hairline/60 pb-8 mb-12">
        <div className="flex items-center gap-3 text-xs font-mono uppercase text-brass tracking-widest mb-2">
          <span>Strictly Confidential</span>
          <span>•</span>
          <span>Off-Market Investment Opportunities</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl text-bone mb-4">
          Investment Teasers: Real Estate & Wellness Portfolio
        </h1>
        <p className="text-steel text-sm max-w-2xl leading-relaxed">
          Commercial assets, thermal water concessions, and regulated development parcels curated specifically for international and Scandinavian institutional capital.
        </p>
      </section>

      {/* Asset Files List */}
      <div className="space-y-8">
        {investmentAssets.map((asset) => (
          <div
            key={asset.id}
            className="border border-hairline/60 bg-charcoal/50 p-6 rounded hover:border-brass/60 transition"
          >
            {/* Header / ID */}
            <div className="flex justify-between items-start border-b border-hairline/40 pb-4 mb-4">
              <div>
                <span className="font-mono text-xs text-brass uppercase tracking-widest block mb-1">
                  {asset.id} — {asset.category}
                </span>
                <h2 className="font-display text-xl text-bone">{asset.title}</h2>
                <span className="text-xs text-steel font-mono">{asset.location}</span>
              </div>
              <div className="text-right font-mono">
                <div className="text-xl text-brass font-bold">{asset.price}</div>
                <div className="text-[10px] text-steel uppercase">{asset.priceNote}</div>
              </div>
            </div>

            {/* Concise Specs & Bullets */}
            <div className="grid md:grid-cols-4 gap-6 items-center">
              <div className="md:col-span-3">
                <ul className="space-y-2 text-xs text-steel">
                  {asset.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-brass font-bold">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
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
    </main>
  );
}