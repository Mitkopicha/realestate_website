import { PROPERTIES } from "@/lib/properties";
import AssetFile from "@/components/asset-file";

export const metadata = {
  title: "Investment Assets | Sunrise Estates",
  description:
    "Explore high-value investment properties, thermal spa land, and commercial developments across Bulgaria.",
};

export default function PropertiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      {/* Header */}
      <div className="border-b border-hairline/60 pb-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
          Portfolio & Asset Register
        </p>
        <h1 className="mt-4 font-display text-3xl text-bone md:text-5xl">
          Current Investment Dossiers
        </h1>
        <p className="mt-4 max-w-2xl text-base text-steel">
          Commercial assets, thermal water concessions, and regulated development parcels curated specifically for international and Scandinavian investors.
        </p>
      </div>

      {/* Asset List */}
      <div className="mt-12">
        {PROPERTIES.map((property) => (
          <AssetFile key={property.refCode} property={property} />
        ))}
      </div>
    </div>
  );
}