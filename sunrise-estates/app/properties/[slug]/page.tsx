import { notFound } from "next/navigation";
import Link from "next/link";
import { PROPERTIES, getPropertyBySlug } from "@/lib/properties";
import PropertyGallery from '@/components/property-gallery';

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all properties
export async function generateStaticParams() {
  return PROPERTIES.map((property) => ({
    slug: property.slug,
  }));
}

// Metadata generator
export async function generateMetadata({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return { title: "Property Not Found | Sunrise Estates" };
  }

  return {
    title: `${property.title} | Sunrise Estates`,
    description: property.shortDescription,
  };
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      {/* Back Link */}
      <Link
        href="/properties"
        className="font-mono text-xs uppercase tracking-widest text-steel transition-colors hover:text-brass"
      >
        ← Back to all assets
      </Link>

      {/* Header Info */}
      <div className="mt-8 border-b border-hairline/60 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-widest text-brass">
            Ref Code: {property.refCode}
          </span>
          <span className="border border-hairline/60 bg-panel px-3 py-1 font-mono text-xs text-steel">
            {property.category}
          </span>
        </div>

        <h1 className="mt-4 font-display text-3xl text-bone md:text-5xl">
          {property.title}
        </h1>

        <p className="mt-2 font-mono text-sm uppercase tracking-wider text-steel">
          {property.location} • {property.region}
        </p>
      </div>

      {/* Key Numbers Grid */}
      <div className="mt-8 grid grid-cols-2 gap-4 border border-hairline/80 bg-panel p-6 md:grid-cols-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-steel-dim">
            Asking Price
          </p>
          <p className="mt-1 font-mono text-xl text-bone md:text-2xl">
            {property.askingPriceDisplay}
          </p>
          {property.priceNote && (
            <p className="text-[10px] text-steel-dim">{property.priceNote}</p>
          )}
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-steel-dim">
            Built Area
          </p>
          <p className="mt-1 font-mono text-xl text-bone md:text-2xl">
            {property.totalAreaSqm > 0
              ? `${property.totalAreaSqm.toLocaleString()} m²`
              : "N/A"}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-steel-dim">
            Land Plot
          </p>
          <p className="mt-1 font-mono text-xl text-bone md:text-2xl">
            {property.landAreaSqm > 0
              ? `${property.landAreaSqm.toLocaleString()} m²`
              : "N/A"}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-steel-dim">
            Status
          </p>
          <p className="mt-1 font-mono text-xl text-brass md:text-2xl">
            {property.status}
          </p>
        </div>
      </div>

      {/* Descriptions & Sidebar */}
      <div className="mt-12 grid gap-12 md:grid-cols-12">
        <div className="space-y-8 md:col-span-8">
          {/* Executive Summary */}
          <div>
            <h2 className="font-display text-2xl text-bone">Executive Summary</h2>
            <p className="mt-4 text-base leading-relaxed text-steel">
              {property.fullDescription}
            </p>
          </div>

          {/* Investment Highlights */}
          {property.investmentHighlights.length > 0 && (
            <div className="border-t border-hairline/60 pt-8">
              <h2 className="font-display text-2xl text-bone">
                Investment Highlights
              </h2>
              <ul className="mt-4 space-y-3">
                {property.investmentHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-steel">
                    <span className="text-brass">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Property Visual Showcase & Photo Gallery */}
          <div className="border-t border-hairline/60 pt-8">
            <PropertyGallery />
          </div>
        </div>

        {/* Sidebar Call to Action */}
        <div className="md:col-span-4">
          <div className="sticky top-8 border border-hairline/80 bg-panel p-6">
            <h3 className="font-display text-lg text-bone">Inquire on Asset</h3>
            <p className="mt-2 text-xs leading-relaxed text-steel">
              To request full ownership documentation, legal status verification, or arrange an on-site viewing:
            </p>

            <div className="mt-6 space-y-4 border-t border-hairline/60 pt-4 font-mono text-xs">
              <div>
                <p className="text-steel-dim">Bulgarian Operations</p>
                <p className="text-bone">Borislav Vasilev</p>
                <a
                  href="tel:+359876756855"
                  className="text-brass hover:underline block"
                >
                  +359 87 675 6855
                </a>
              </div>

              <div>
                <p className="text-steel-dim">International & English</p>
                <p className="text-bone">Dimitar Dutchev</p>
                <a
                  href="tel:+359890304010"
                  className="text-brass hover:underline block"
                >
                  +359 89 030 4010
                </a>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-6 block w-full border border-brass bg-brass py-3 text-center font-mono text-xs uppercase tracking-widest text-charcoal hover:opacity-90 transition-opacity"
            >
              Direct Inquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}