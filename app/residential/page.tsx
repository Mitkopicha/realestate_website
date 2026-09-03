import Link from "next/link";

const residentialProperties = [
  {
    id: "RES-01",
    title: "Alpine Studio in Pirin Golf & Thermal SPA Resort",
    location: "Bansko / Razlog Valley",
    type: "Studio",
    area: "33 sq.m",
    price: "€64,990",
    slug: "alpine-studio-pirin-golf",
    description:
      "All-Inclusive Investor Package: Fully finished studio in a world-class year-round gated golf & thermal SPA resort. Includes clean title deed, all legal/notary fees paid, and complimentary 3-day inspection trip refund.",
    year: "2010",
    maintenance: "€200 / year",
    externalUrl: "https://www.imot.bg/obiava-1a178366252447743-prodava-ednostaen-apartament-oblast-blagoevgrad-gr-bansko",
  },
];

export default function ResidentialPage() {
  return (
    <main className="min-h-screen bg-charcoal text-bone px-6 py-12 max-w-6xl mx-auto">
      {/* Header */}
      <section className="border-b border-hairline/60 pb-8 mb-12">
        <h1 className="font-display text-3xl md:text-4xl mb-4 text-brass">
          Residential & Holiday Properties
        </h1>
        <p className="text-steel max-w-2xl text-sm leading-relaxed">
          Curated selection of premium residential apartments, alpine studios, and holiday homes across Bulgaria.
        </p>
      </section>

      {/* Properties Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {residentialProperties.map((item) => (
          <div
            key={item.id}
            className="border border-hairline/60 p-6 rounded bg-charcoal/50 hover:border-brass/60 transition flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between text-xs text-steel mb-2 font-mono uppercase tracking-wider">
                <span>{item.id}</span>
                <span>{item.location}</span>
              </div>
              <h2 className="text-xl font-display text-bone mb-3">{item.title}</h2>
              <p className="text-steel text-xs leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="grid grid-cols-3 gap-2 font-mono text-xs py-3 border-y border-hairline/40 mb-6">
                <div>
                  <span className="text-steel/70 block text-[10px] uppercase">Type</span>
                  <span className="text-bone">{item.type}</span>
                </div>
                <div>
                  <span className="text-steel/70 block text-[10px] uppercase">Area</span>
                  <span className="text-bone">{item.area}</span>
                </div>
                <div>
                  <span className="text-steel/70 block text-[10px] uppercase">Price</span>
                  <span className="text-brass font-bold">{item.price}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {item.externalUrl && (
                <a
                  href={item.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2 border border-hairline text-steel-dim hover:text-bone hover:border-steel transition font-mono text-[11px] uppercase tracking-wider"
                >
                  View Direct Reference (imot.bg) ↗
                </a>
              )}
              <Link
                href={`/contact?property=${item.id}`}
                className="inline-block w-full text-center py-2.5 border border-brass/50 text-brass hover:bg-brass hover:text-charcoal transition font-mono text-xs uppercase tracking-widest"
              >
                Request Info Packet
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}