import React from 'react';

export interface GalleryImage {
  id: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
}

const defaultItems: GalleryImage[] = [
  {
    id: '01',
    category: 'MASTER PLAN',
    title: 'Combined Regulated Land Map',
    description: 'Overview of all adjacent land plots forming the total development area in Bankya.',
    imageSrc: '/properties/banya-chalets-exterior.jpg',
  },
  {
    id: '02',
    category: 'PLOT 582',
    title: 'Cadastral Sketch Plot 582',
    description: 'Regulated land plot (2,716 sq.m) designated for development.',
    imageSrc: '/properties/banya-thermal-pool.jpg',
  },
  {
    id: '03',
    category: 'PLOT 583',
    title: 'Access Road Cadastral Map 583',
    description: 'Road infrastructure sketch (363 sq.m) providing secondary access.',
    imageSrc: '/properties/banya-interior-living.jpg',
  },
  {
    id: '04',
    category: 'PLOT 584',
    title: 'Access Corridor Map 584',
    description: 'Secondary road access plot (426 sq.m).',
    imageSrc: '/properties/banya-spa-bathroom.jpg',
  },
  {
    id: '05',
    category: 'MAIN PLOT 578',
    title: 'Primary Expansion Plot 578 Map',
    description: 'Main agricultural & development land parcel measuring 112,448 sq.m.',
    imageSrc: '/properties/banya-development-plot.jpg',
  },
  {
    id: '06',
    category: 'LEGAL STATUS',
    title: 'Official Cadastral Deed & Ownership',
    description: 'Verified registration document from the Agency for Geodesy, Cartography and Cadastre.',
    imageSrc: '/properties/banya-concession-infra.jpg',
  },
];

export default function PropertyGallery({ items = defaultItems }: { items?: GalleryImage[] }) {
  return (
    <section className="mt-8">
      <div className="mb-6">
        <span className="font-mono uppercase text-brass tracking-widest text-xs">
          Visual Showcase
        </span>
        <h2 className="font-display text-2xl text-bone mt-1">
          Property & Thermal Amenities Gallery
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="border border-hairline/80 bg-panel overflow-hidden flex flex-col group hover:border-brass/40 transition-colors duration-300"
          >
            <div className="relative h-48 bg-charcoal overflow-hidden">
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <span className="absolute top-3 left-3 bg-charcoal/90 text-brass font-mono text-[10px] tracking-wider px-2 py-1 border border-hairline/60">
                {item.id} / {item.category}
              </span>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-display text-base text-bone mb-2 group-hover:text-brass transition-colors">
                {item.title}
              </h3>
              <p className="text-steel text-xs leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}