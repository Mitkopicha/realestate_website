export interface Property {
  slug: string;
  refCode: string;
  title: string;
  location: string;
  region: string;
  category: "Thermal & Spa Resort" | "Land & Development" | "Hospitality & Wellness" | "Residential Portfolio";
  askingPrice: number; // in EUR
  askingPriceDisplay: string;
  priceNote?: string;
  totalAreaSqm: number;
  landAreaSqm: number;
  status: "Available" | "Under Offer" | "Sold";
  featured: boolean;
  shortDescription: string;
  fullDescription: string;
  investmentHighlights: string[];
  specifications: Record<string, string>;
  coordinates?: {
    lat: number;
    lng: number;
  };
  images: string[];
}

export const PROPERTIES: Property[] = [
  {
    slug: "shipkovo-balneosanatorium-wellness-resort",
    refCode: "SE-01",
    title: "Shipkovo Thermal Balneosanatorium & Wellness Estate",
    location: "Shipkovo Village, Troyan Municipality",
    region: "Balkan Mountains",
    category: "Hospitality & Wellness",
    askingPrice: 600000,
    askingPriceDisplay: "€600,000",
    priceNote: "Includes VAT",
    totalAreaSqm: 4000,
    landAreaSqm: 3300,
    status: "Available",
    featured: true,
    shortDescription:
      "A former thermal balneosanatorium featuring 4,000 m² built footprint situated directly adjacent to natural mineral springs, offering ideal positioning for a boutique medical spa, senior living facility, or thermal retreat.",
    fullDescription:
      "Located in the renown mineral spring village of Shipkovo within the Troyan municipality, this substantial 4,000 m² built-area property represents a unique redevelopment asset. Historically operated as a balneosanatorium, the estate benefits from immediate proximity to active natural mineral water springs. The current plot covers 3,300 m² with an option to acquire an additional adjacent 5,000 m² parcel to expand the private grounds and wellness amenities.",
    investmentHighlights: [
      "Immediate proximity to certified natural mineral water springs",
      "Substantial 4,000 m² built footprint (RZP) suitable for hotel or clinic conversion",
      "Option to acquire an additional 5,000 m² surrounding land parcel",
      "Attractive entry valuation at €150/m² built area",
      "Positioned in a region with strong eco-tourism and thermal wellness demand",
    ],
    specifications: {
      "Property Type": "Balneosanatorium / Thermal Facility",
      "Built Area (RZP)": "approx. 4,000 m²",
      "Land Plot Area": "3,300 m² (+5,000 m² optional expansion)",
      "Mineral Water": "Direct proximity to active sources",
      "Zoning / Regulation": "Commercial / Specialized Healthcare & Spa",
      "Tax Status": "Price inclusive of VAT",
    },
    images: ["/properties/shipkovo-1.jpg"],
  },
  {
    slug: "sapareva-banya-thermal-development-plot",
    refCode: "SE-02",
    title: "Sapareva Banya Thermal Development Parcel",
    location: "Sapareva Banya",
    region: "Rila Mountain Region",
    category: "Thermal & Spa Resort",
    askingPrice: 980000,
    askingPriceDisplay: "€980,000",
    priceNote: "+ VAT",
    totalAreaSqm: 0,
    landAreaSqm: 9000,
    status: "Available",
    featured: true,
    shortDescription:
      "Prime 9,000 m² regulated development land (UPI) equipped with existing electrical and water infrastructure and thermal pool access in Europe's hottest mineral water municipality.",
    fullDescription:
      "A prime regulated land parcel (UPI) spanning 9,000 m² situated in Sapareva Banya—home to the hottest mineral geyser in Continental Europe (103°C). The site features full utility access including electricity, municipal water, and immediate access to thermal mineral water pools. Ideal for the construction of a luxury thermal spa hotel, medical wellness resort, or private villa complex.",
    investmentHighlights: [
      "9,000 m² fully regulated land (UPI) ready for master planning",
      "Direct access to Sapareva Banya's famous high-temperature mineral water source",
      "Existing electricity, water, and mineral pool infrastructure on-site",
      "High growth destination for Scandinavian and international thermal wellness buyers",
      "Located at the foot of Rila Mountain with year-round tourism appeal",
    ],
    specifications: {
      "Property Type": "Regulated Development Land (UPI)",
      "Land Area": "9,000 m²",
      "Utilities": "Electricity, Water, Mineral Pools on-site",
      "Development Potential": "Luxury Hotel, Spa Resort, Thermal Residences",
      "Tax Status": "Price excluding VAT",
    },
    images: ["/properties/sapareva-banya-1.jpg"],
  },
  {
    slug: "banya-mineral-chalets-and-concession",
    refCode: "SE-03",
    title: "Banya Thermal Resort Estates & Mineral Concession",
    location: "Banya Village, Razlog Municipality",
    region: "Bansko / Razlog Valley",
    category: "Residential Portfolio",
    askingPrice: 1400000,
    askingPriceDisplay: "€1,400,000",
    priceNote: "+ VAT",
    totalAreaSqm: 2200,
    landAreaSqm: 4500,
    status: "Available",
    featured: true,
    shortDescription:
      "Turnkey resort portfolio comprising 7 completed alpine chalets (Act 16), capacity for 1,000 m² of additional construction, and a private mineral water pipeline and concession.",
    fullDescription:
      "An exceptional thermal resort package located in Banya village, between Bansko ski resort and the Pirin mountains. The asset includes 7 fully constructed chalets with Act 16 completion permits totaling 1,200 m² RZP, plus additional regulated land permitting an extra 1,000 m² of construction. Uniquely, the sale includes private ownership of a dedicated mineral water pipeline and an active mineral water extraction concession.",
    investmentHighlights: [
      "7 completed chalets with Act 16 permits (1,200 m² total built area)",
      "Includes private mineral water pipeline and active mineral water concession",
      "Permitted build space for an additional 1,000 m² RZP on free development plots",
      "Turnkey opportunity for boutique rental pool or private luxury compound",
      "Positioned in Bulgaria's premier mountain spa and ski corridor",
    ],
    specifications: {
      "Property Type": "Chalet Resort + Private Mineral Concession",
      "Existing Built Area": "1,200 m² (7 Chalets with Act 16)",
      "Expansion Potential": "1,000 m² additional permitted RZP",
      "Infrastructure": "Private Mineral Pipeline & Concession rights included",
      "Tax Status": "Price excluding VAT",
    },
    images: ["/properties/banya-1.jpg"],
  },
  {
    slug: "razlog-master-plan-development-land",
    refCode: "SE-04",
    title: "Razlog Valley 80,000 m² Regulated Master Plot",
    location: "Razlog",
    region: "Bansko / Razlog Valley",
    category: "Land & Development",
    askingPrice: 1680000,
    askingPriceDisplay: "€1,680,000",
    priceNote: "+ VAT",
    totalAreaSqm: 0,
    landAreaSqm: 80015,
    status: "Available",
    featured: false,
    shortDescription:
      "Massive 80,015 m² regulated land plot in Razlog subdivided into 91 independent parcels with electricity and water connections, ideal for residential or resort development.",
    fullDescription:
      "A rare land banking and residential development asset offering 80,015 m² in the outskirts of Razlog, adjacent to Bansko Golf & Ski corridor. The property is fully in regulation (UPI) with electricity and water available on site. The estate has been strategically pre-divided into 91 independent title plots, with municipal alignment currently in final sign-off stages.",
    investmentHighlights: [
      "80,015 m² regulated land area (UPI) with high build density allowance",
      "Subdivided into 91 independent individual parcels",
      "Active utility infrastructure with power and water connected to site",
      "Competitive valuation at €21/m² for regulated resort/residential land",
      "Strategic position near Pirin Golf & Country Club and Bansko Ski Area",
    ],
    specifications: {
      "Property Type": "Master-Planned Subdivided Land Plot",
      "Total Land Area": "80,015 m²",
      "Parcel Division": "91 individual regulated plots",
      "Utilities": "Electricity and Municipal Water on-site",
      "Tax Status": "Price excluding VAT",
    },
    images: ["/properties/razlog-1.jpg"],
  },
  {
    slug: "bankya-capital-land-estate-sofia",
    refCode: "SE-05",
    title: "Bankya Capital Mineral Land Portfolio (260,000 m²)",
    location: "Bankya, Sofia Capital Municipality",
    region: "Greater Sofia Area",
    category: "Land & Development",
    askingPrice: 8000000,
    askingPriceDisplay: "€8,000,000",
    priceNote: "+ VAT",
    totalAreaSqm: 0,
    landAreaSqm: 260000,
    status: "Available",
    featured: true,
    shortDescription:
      "Strategic 260,000 m² land estate situated in the upper heights of Bankya (Sofia Spa District), offering direct road connectivity to the Malo Buchino highway node.",
    fullDescription:
      "An institutional-grade land portfolio totaling approximately 260,000 m² across 8 contiguous parcels in Bankya, Sofia's premier mineral spring suburb. The core anchor parcel (Ref: 02659.2266.578) comprises 112,448 m² with regulation approval estimated within 3-4 months. The property includes a cadastral road connection directly to the Malo Buchino highway interchange, placing central Sofia within 20 minutes.",
    investmentHighlights: [
      "260,000 m² mega land footprint within Sofia Capital Municipality",
      "Main plot of 112,448 m² with fast-track regulation (3-4 months window)",
      "Cadastral road access linking directly to Malo Buchino highway node",
      "Located in Sofia's historic mineral bath capital (Bankya)",
      "Unmatched scale for private residential park, retreat, or institutional campus",
    ],
    specifications: {
      "Property Type": "Institutional Land Assembly (8 Parcels)",
      "Total Land Footprint": "approx. 260,000 m²",
      "Anchor Parcel": "112,448 m² (ID: 02659.2266.578)",
      "Road Access": "Cadastral road to Malo Buchino interchange",
      "Tax Status": "Price excluding VAT",
    },
    images: ["/properties/bankya-1.jpg"],
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return PROPERTIES.find((p) => p.slug === slug);
}

export function getFeaturedProperties(): Property[] {
  return PROPERTIES.filter((p) => p.featured);
}