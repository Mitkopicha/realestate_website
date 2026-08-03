type Props = {
  name: string;
  refCode: string;
  className?: string;
};

// Textural placeholder standing in for on-site photography: a horizon line,
// fine contour rules, and the asset's monogram — reads as an architectural
// elevation rather than a stock photo, so it holds its own until real
// photography is dropped in.
export default function PropertyVisual({ name, refCode, className = "" }: Props) {
  const initials = name
    .split(" ")
    .filter((w) => w.length > 2 || w === w.toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={`relative overflow-hidden bg-panel ${className}`}
      role="img"
      aria-label={`Elevation placeholder for ${name}`}
    >
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`sky-${refCode}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#232c36" />
            <stop offset="100%" stopColor="#171d23" />
          </linearGradient>
        </defs>
        <rect width="400" height="300" fill={`url(#sky-${refCode})`} />
        <line x1="0" y1="190" x2="400" y2="190" stroke="#3a4a5c" strokeWidth="1" />
        {[210, 230, 250, 270].map((y) => (
          <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#2a333d" strokeWidth="1" />
        ))}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-display text-5xl italic tracking-wide text-steel-dim">
          {initials}
        </span>
      </div>
      <div className="absolute left-4 top-4 font-mono text-[11px] tracking-widest text-steel-dim">
        {refCode}
      </div>
    </div>
  );
}
