// app/residential/page.tsx
import Link from "next/link";

const residentialProperties = [
  {
    id: "RES-01",
    title: "Alpine Studio in Pirin Golf & Thermal SPA Resort",
    location: "Bansko · Blagoevgrad Province · Bulgaria",
    price: "€64,990",
    specs: "33 m² · 3rd Floor · Monolithic Brick (2010)",
    status: "Available / Fully Managed",
    image: "/residential/res-3.jpg",
    slug: "silvermountain", // folder name in app/residential/
    description:
      "An all-inclusive investor package featuring a 33 sq.m fully furnished Alpine studio in a world-class golf and thermal SPA resort.",
  },
  {
    id: "RES-02",
    title: "Boyana Luxury Residence",
    location: "Boyana · Sofia · Bulgaria",
    price: "€285,000",
    specs: "110 m² · 2 Bed · Vitosha Mountain View",
    status: "Available / Premium",
    image: "/residential/livingspace.jpg", // add image in public/residential/
    slug: "boyana", // folder name in app/residential/
    description:
      "A modern residential apartment situated at the foot of Vitosha Mountain in Sofia's prestigious Boyana district.",
  },
];

export default function ResidentialPortfolioPage() {
  return (
    <main className="min-h-screen bg-charcoal text-bone px-6 py-12 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="border-b border-hairline/60 pb-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
            Portfolio Overview
          </span>
          <h1 className="mt-2 font-display text-4xl text-bone md:text-5xl">
            Residential Properties
          </h1>
          <p className="mt-3 max-w-xl text-sm text-steel">
            Explore active residential investment assets across Bulgaria.
          </p>
        </div>

        {/* LISTINGS STACK */}
        <div className="mt-12 space-y-10">
          {residentialProperties.map((property) => (
            <div
              key={property.id}
              className="grid gap-8 border border-hairline/60 bg-panel p-6 lg:grid-cols-[400px_1fr] lg:p-8"
            >
              {/* IMAGE THUMBNAIL */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-charcoal">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* DETAILS */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
                      {property.id}
                    </span>
                    <span className="border border-brass/40 bg-brass/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-brass">
                      {property.status}
                    </span>
                  </div>

                  <h2 className="mt-3 font-display text-2xl text-bone md:text-3xl">
                    {property.title}
                  </h2>

                  <p className="mt-1 font-mono text-xs uppercase tracking-widest text-steel">
                    {property.location}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-steel">
                    {property.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-end justify-between gap-4 border-t border-hairline/40 pt-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-steel-dim">
                      Listing Price
                    </p>
                    <p className="font-display text-2xl text-brass">
                      {property.price}
                    </p>
                    <p className="font-mono text-[10px] text-steel-dim">
                      {property.specs}
                    </p>
                  </div>

                  <Link
                    href={`/residential/${property.slug}`}
                    className="inline-flex items-center justify-center border border-brass bg-brass px-6 py-2.5 font-mono text-xs uppercase tracking-widest text-charcoal transition-opacity hover:opacity-90"
                  >
                    View Property Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}