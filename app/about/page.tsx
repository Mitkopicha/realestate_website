export const metadata = {
  title: "About | Sunrise Estates",
  description: "About Sunrise Estates and the Bulgarian coastal property market.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-brass">
        About the firm
      </p>
      <h1 className="mt-4 font-display text-4xl text-bone">
        A quiet corner of the market, held carefully.
      </h1>

      <div className="mt-10 space-y-6 text-sm leading-relaxed text-steel">
        <p>
          Sunrise Estates works with a small number of coastal properties
          each year, rather than maintaining a large open listing. Every
          asset in the current portfolio has been visited, surveyed, and
          documented directly by our team based in Burgas.
        </p>
        <p>
          We work primarily with buyers from Norway, Sweden, Denmark, and
          Finland — investors who are comfortable with the Bulgarian coast
          as a long-term hold rather than a short-term flip. Many of our
          clients are considering their first property outside their home
          market, and our process is built around that: clear title
          documentation, independent legal review, and a realistic view of
          renovation cost and timeline before any offer is made.
        </p>
        <p>
          The Bulgarian Black Sea coast has a longer history than its
          reputation as a summer destination suggests — Sozopol and Nesebar
          both predate most of Western Europe&apos;s coastal resort towns by
          centuries. Our current portfolio reflects that range, from a 1901
          port building in Varna to a newly built estate finished in 2022.
        </p>
        <p>
          We do not represent every property on the coast, and we turn down
          more than we list. If an asset is in the current portfolio, it has
          passed our own review first.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-8 border-t border-hairline/40 pt-10 sm:grid-cols-4">
        {[
          ["2013", "Firm established"],
          ["Burgas", "Head office"],
          ["4", "Nordic markets served"],
          ["5", "Assets currently held"],
        ].map(([stat, label]) => (
          <div key={label}>
            <p className="font-display text-2xl text-bone">{stat}</p>
            <p className="mt-1 text-xs text-steel">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
