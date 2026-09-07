"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  {
    src: "/residential/res-1.jpg",
    alt: "Silver Mountain Resort apartment",
  },
  {
    src: "/residential/res-2.jpg",
    alt: "Silver Mountain Resort interior",
  },
  {
    src: "/residential/res-3.jpg",
    alt: "Silver Mountain Resort exterior",
  },
  {
    src: "/residential/res-4.jpg",
    alt: "Silver Mountain Resort bathroom",
  },
  {
    src: "/residential/res-5.jpg",
    alt: "Silver Mountain Resort living area",
  },
  {
    src: "/residential/res-6.jpg",
    alt: "Silver Mountain Resort bedroom",
  },
  {
    src: "/residential/res-7.jpg",
    alt: "Silver Mountain Resort apartment view",
  },
];

export default function SilverMountainPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const closeGallery = () => {
    setSelectedImage(null);
  };

  const previousImage = () => {
    setSelectedImage((current) => {
      if (current === null) return null;

      return (
        (current - 1 + images.length) %
        images.length
      );
    });
  };

  const nextImage = () => {
    setSelectedImage((current) => {
      if (current === null) return null;

      return (current + 1) % images.length;
    });
  };

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-charcoal text-bone">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="px-6 pb-12 pt-12 md:pb-16 md:pt-16 lg:px-16 lg:pt-20">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/residential"
            className="font-mono text-xs uppercase tracking-widest text-steel transition-colors hover:text-brass"
          >
            ← Residential Property
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
                RES-01 · Residential
              </p>

              <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.02] text-bone md:text-5xl lg:text-6xl">
                Silver Mountain Resort
              </h1>

              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-steel">
                Bansko · Blagoevgrad Province · Bulgaria
              </p>

              <div className="mt-6 h-px w-12 bg-brass" />

              <p className="mt-6 max-w-2xl text-sm leading-7 text-steel md:text-base">
                A furnished 33 m² apartment within Silver Mountain Resort in
                Bansko, positioned in a gated complex with swimming pool,
                security and controlled access.
              </p>
            </div>

            <div className="border-l border-hairline/60 pl-6 lg:text-right">
              <p className="font-mono text-[10px] uppercase tracking-widest text-steel-dim">
                Asking Price
              </p>

              <p className="mt-2 font-display text-3xl text-brass">
                €59,990
              </p>

              <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-steel-dim">
                €1,818 / m² · No VAT
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LARGE FEATURE IMAGE
      ========================================================== */}
      <section className="px-6 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <button
            type="button"
            onClick={() => setSelectedImage(0)}
            className="group relative block aspect-[16/9] w-full overflow-hidden bg-panel text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/70">
                  Silver Mountain Resort
                </p>

                <p className="mt-1 font-display text-xl text-bone">
                  Bansko, Bulgaria
                </p>
              </div>

              <span className="hidden border border-white/30 bg-black/30 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-bone backdrop-blur-sm sm:block">
                View Gallery
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* =========================================================
          PROPERTY FACTS
      ========================================================== */}
      <section className="px-6 py-12 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-6xl border-y border-hairline/50">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="border-b border-hairline/50 px-5 py-6 md:border-b-0 md:border-r">
              <p className="font-mono text-[10px] uppercase tracking-widest text-steel-dim">
                Area
              </p>

              <p className="mt-2 font-display text-xl text-bone">
                33 m²
              </p>
            </div>

            <div className="border-b border-hairline/50 px-5 py-6 md:border-b-0 md:border-r">
              <p className="font-mono text-[10px] uppercase tracking-widest text-steel-dim">
                Floor
              </p>

              <p className="mt-2 font-display text-xl text-bone">
                3rd of 6
              </p>
            </div>

            <div className="border-b border-hairline/50 px-5 py-6 md:border-b-0 md:border-r">
              <p className="font-mono text-[10px] uppercase tracking-widest text-steel-dim">
                Construction
              </p>

              <p className="mt-2 font-display text-xl text-bone">
                Brick · 2010
              </p>
            </div>

            <div className="px-5 py-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-steel-dim">
                Maintenance
              </p>

              <p className="mt-2 font-display text-xl text-bone">
                €200 / year
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          DESCRIPTION
      ========================================================== */}
      <section className="px-6 pb-16 lg:px-16 lg:pb-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_320px]">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
              Property Overview
            </p>

            <h2 className="mt-4 font-display text-3xl leading-tight text-bone md:text-4xl">
              A compact mountain residence in a managed resort setting.
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-steel">
              <p>
                The apartment is located within Silver Mountain Resort in
                Bansko. The complex offers a private swimming pool, controlled
                access and security within a gated environment.
              </p>

              <p>
                The property is furnished and situated on the third floor of a
                six-storey building constructed in 2010.
              </p>

              <p>
                The annual maintenance fee is €200. The advertised price is
                €59,990 and no VAT is charged.
              </p>
            </div>
          </div>

          <aside className="h-fit border border-hairline/60 bg-panel p-7">
            <p className="font-mono text-xs uppercase tracking-widest text-brass">
              Key Features
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Furnished",
                "Swimming pool",
                "Elevator",
                "Security",
                "Controlled access",
                "Gated complex",
                "Sanitary insulation",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 border-b border-hairline/30 pb-3 text-sm text-steel"
                >
                  <span className="h-1 w-1 shrink-0 bg-brass" />
                  {feature}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* =========================================================
          FULL GALLERY
      ========================================================== */}
      <section className="border-t border-hairline/50 bg-panel px-6 py-16 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
                Property Gallery
              </p>

              <h2 className="mt-4 font-display text-3xl text-bone md:text-4xl">
                Inside Silver Mountain.
              </h2>
            </div>

            <p className="font-mono text-xs uppercase tracking-widest text-steel-dim">
              {images.length} photographs
            </p>
          </div>

          {/* Gallery grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`group relative overflow-hidden bg-charcoal text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass ${
                  index === 0
                    ? "sm:col-span-2 sm:row-span-2"
                    : ""
                }`}
              >
                <div
                  className={`${
                    index === 0
                      ? "aspect-[4/3] sm:h-full"
                      : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="mb-2 block h-px w-7 bg-brass transition-all duration-500 group-hover:w-11" />

                      <p className="font-display text-sm text-bone">
                        {image.alt}
                      </p>
                    </div>

                    <span className="font-mono text-[10px] text-white/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CTA
      ========================================================== */}
      <section className="px-6 py-14 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-6xl border-t border-hairline/60 pt-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
                Private Viewing
              </p>

              <h2 className="mt-3 font-display text-2xl text-bone md:text-3xl">
                Interested in Silver Mountain?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-steel">
                Contact our team for further property information, additional
                documentation or to arrange a viewing in Bansko.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+359876756855"
                className="inline-flex items-center justify-center border border-brass px-7 py-3 font-mono text-xs uppercase tracking-widest text-brass transition-colors hover:bg-brass hover:text-charcoal"
              >
                +359 87 675 6855
              </a>

              <Link
                href="/contact?asset=RES-01"
                className="inline-flex items-center justify-center border border-brass bg-brass px-7 py-3 font-mono text-xs uppercase tracking-widest text-charcoal transition-opacity hover:opacity-90"
              >
                Make an Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LIGHTBOX
      ========================================================== */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Property gallery"
          onClick={closeGallery}
        >
          {/* Close */}
          <button
            type="button"
            aria-label="Close gallery"
            onClick={closeGallery}
            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center border border-white/20 text-2xl text-bone transition-colors hover:border-brass hover:text-brass"
          >
            ×
          </button>

          {/* Previous */}
          <button
            type="button"
            aria-label="Previous image"
            onClick={(event) => {
              event.stopPropagation();
              previousImage();
            }}
            className="absolute left-2 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center text-4xl text-bone transition-colors hover:text-brass md:left-6"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[82vh] max-w-[88vw] object-contain"
          />

          {/* Next */}
          <button
            type="button"
            aria-label="Next image"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center text-4xl text-bone transition-colors hover:text-brass md:right-6"
          >
            ›
          </button>

          {/* Bottom information */}
          <div className="absolute bottom-5 left-1/2 w-full max-w-xl -translate-x-1/2 px-6 text-center">
            <p className="font-display text-base text-bone">
              {images[selectedImage].alt}
            </p>

            <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-steel">
              {String(selectedImage + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}