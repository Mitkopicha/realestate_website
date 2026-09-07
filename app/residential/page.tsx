"use client";

import { useEffect, useState } from "react";

const residentialImages = [
  { src: "/residential/res-3.jpg", alt: "Complex exterior and pool" },
  { src: "/residential/res-1.jpg", alt: "Mountain view balcony" },
  { src: "/residential/res-5.jpg", alt: "Master bedroom & sitting area" },
  { src: "/residential/res-7.jpg", alt: "Bedroom overview" },
  { src: "/residential/res-6.jpg", alt: "Bedroom window" },
  { src: "/residential/res-4.jpg", alt: "Bathroom" },
];

export default function ResidentialProperty() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const showPrev = () =>
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + residentialImages.length) % residentialImages.length
    );
  const showNext = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % residentialImages.length));

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  return (
    <section className="bg-[#0A0D13] px-6 py-16 lg:px-16 lg:py-24">
      {/* Property header + short pitch */}
      <div className="mb-12 max-w-2xl lg:mb-16">
        <p className="text-[13px] tracking-wide text-[#9BA1AC]">
          Pirin Golf &amp; Country Club, Bansko
        </p>
        <h1 className="mt-2 font-serif text-4xl leading-[1.1] text-[#F4F1EA] lg:text-5xl">
          Alpine Studio
        </h1>
        <p className="mt-3 text-[15px] text-[#9BA1AC]">
          €64,990 &middot; 33 sq.m &middot; Thermal SPA resort
        </p>
        <span className="mt-4 block h-px w-12 bg-[#B58D46]" />
        <p className="mt-4 text-[15px] leading-relaxed text-[#9BA1AC]">
          A turnkey studio in a gated golf and spa resort — fully finished,
          fully managed, ready to rent. Call Borislav to arrange a viewing.
        </p>
        <a href="tel:+359876756855" className="mt-6 inline-flex items-center justify-center border border-[#B58D46] px-7 py-3 text-[15px] text-[#F4F1EA] transition-colors duration-300 hover:bg-[#B58D46] hover:text-[#0A0D13] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B58D46]">
          Call Borislav — +359 87 675 6855
        </a>
      </div>

      <div className="mb-10 max-w-xl lg:mb-14">
        <h2 className="font-serif text-3xl leading-[1.1] text-[#F4F1EA] lg:text-[2.75rem]">
          Residential Asset Gallery
        </h2>
        <span className="mt-4 block h-px w-12 bg-[#B58D46]" />
        <p className="mt-4 text-[15px] leading-relaxed text-[#9BA1AC]">
          A closer look at the property — from the pool terrace to the master
          suite, presented for prospective buyers and their advisors.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {residentialImages.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setOpenIndex(idx)}
            className="group relative aspect-[4/3] overflow-hidden bg-[#12161E] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B58D46]"
          >
            <img
              src={img.src}
              alt={img.alt}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling?.classList.remove("hidden");
              }}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="hidden absolute inset-0 flex items-center justify-center text-[13px] text-[#5A606B]">
              Image unavailable
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
              <span className="mb-2 block h-px w-8 bg-[#B58D46] transition-all duration-500 group-hover:w-12" />
              <p className="font-serif text-[15px] text-[#F4F1EA] lg:text-base">
                {img.alt}
              </p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-10 lg:mt-20 lg:flex-row lg:items-end lg:justify-between lg:pt-12">
        <div>
          <h3 className="font-serif text-2xl text-[#F4F1EA]">
            Interested in this property?
          </h3>
          <p className="mt-2 max-w-md text-[15px] text-[#9BA1AC]">
            Our advisory team can arrange a private viewing and share the full
            asset documentation.
          </p>
        </div>
        <a href="mailto:office@nordic-capital-advisors.com" className="inline-flex items-center justify-center border border-[#B58D46] px-7 py-3 text-[15px] text-[#F4F1EA] transition-colors duration-300 hover:bg-[#B58D46] hover:text-[#0A0D13] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B58D46]">
          Inquire about this property
        </a>
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 lg:p-10"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 text-2xl text-[#F4F1EA] hover:text-[#B58D46] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B58D46]"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 px-3 py-4 text-3xl text-[#F4F1EA] hover:text-[#B58D46] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B58D46] lg:left-6"
          >
            ‹
          </button>

          <img
            src={residentialImages[openIndex].src}
            alt={residentialImages[openIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] object-contain"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-4 text-3xl text-[#F4F1EA] hover:text-[#B58D46] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B58D46] lg:right-6"
          >
            ›
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[14px] text-[#9BA1AC]">
            {residentialImages[openIndex].alt}
          </p>
        </div>
      )}
    </section>
  );
}