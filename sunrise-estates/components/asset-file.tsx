import Link from "next/link";
import { Property } from "@/lib/properties";

interface AssetFileProps {
  property: Property;
}

export default function AssetFile({ property }: AssetFileProps) {
  // Determine primary area display (Land or Built footprint)
  const areaDisplay =
    property.totalAreaSqm > 0
      ? `${property.totalAreaSqm.toLocaleString()} m² (Built)`
      : `${property.landAreaSqm.toLocaleString()} m² (Land)`;

  return (
    <div className="group relative mb-8 border border-hairline/80 bg-panel transition-all hover:border-steel-blue">
      {/* Ref Code Tag */}
      <div className="flex items-center justify-between border-b border-hairline/60 px-6 py-3 font-mono text-xs">
        <span className="text-brass">{property.refCode}</span>
        <span className="text-steel-dim">{property.category}</span>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-12 md:items-start">
          {/* Main Info */}
          <div className="md:col-span-8">
            <h3 className="font-display text-xl text-bone transition-colors group-hover:text-brass md:text-2xl">
              <Link href={`/properties/${property.slug}`}>
                <span className="absolute inset-0" />
                {property.title}
              </Link>
            </h3>

            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-steel">
              {property.location} • {property.region}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-steel line-clamp-2">
              {property.shortDescription}
            </p>
          </div>

          {/* Pricing & Callout */}
          <div className="flex flex-col justify-between border-t border-hairline/40 pt-4 md:col-span-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-steel-dim">
                Asking Price
              </p>
              <p className="mt-1 font-mono text-2xl text-bone">
                {property.askingPriceDisplay}
              </p>
              {property.priceNote && (
                <p className="text-xs text-steel">{property.priceNote}</p>
              )}
            </div>

            <div className="mt-6">
              <p className="font-mono text-xs uppercase tracking-widest text-steel-dim">
                Footprint
              </p>
              <p className="mt-1 font-mono text-sm text-bone">{areaDisplay}</p>
            </div>
          </div>
        </div>

        {/* Investment Highlights Tags */}
        <div className="mt-6 flex flex-wrap gap-2 border-t border-hairline/40 pt-4">
          {property.investmentHighlights.slice(0, 3).map((highlight, i) => (
            <span
              key={i}
              className="border border-hairline/60 bg-charcoal/40 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-steel"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}