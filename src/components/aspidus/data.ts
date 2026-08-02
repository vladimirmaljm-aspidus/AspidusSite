import {
  Flame,
  Gem,
  Sprout,
  Beef,
  Package,
  Building2,
  Shirt,
  FlaskConical,
  Cherry,
  Coffee,
  Leaf,
  type LucideIcon,
} from "lucide-react";

export type Commodity = {
  id: string;
  name: string;
  image: string;
  icon: LucideIcon;
  items: string[];
};

export const commodities: Commodity[] = [
  {
    id: "energy",
    name: "Energy",
    image: "/aspidus/energy-premium.png",
    icon: Flame,
    items: ["Brent Crude", "WTI Crude", "LNG", "LPG", "Gasoline", "Diesel", "Jet Fuel", "Polyethylene", "Polypropylene"],
  },
  {
    id: "metals",
    name: "Metals",
    image: "/aspidus/metals-premium.png",
    icon: Gem,
    items: ["Copper", "Aluminium", "Zinc", "Lead", "Gold", "Silver", "Platinum", "Steel", "Iron Ore", "Nickel"],
  },
  {
    id: "agriculture",
    name: "Agriculture",
    image: "/aspidus/agriculture-premium.png",
    icon: Sprout,
    items: ["Wheat", "Corn", "Soybeans", "Rice", "Sunflower Oil", "Palm Oil", "Olive Oil", "Sugar", "Soybean Meal"],
  },
  {
    id: "meat",
    name: "Meat & Processed",
    image: "/aspidus/meat-premium.png",
    icon: Beef,
    items: ["Chicken", "Turkey", "Beef", "Veal", "Lamb", "Sausages", "Cured Hams"],
  },
  {
    id: "raw_materials",
    name: "Raw Materials",
    image: "/aspidus/raw-materials-premium.png",
    icon: Package,
    items: ["Yarn", "Natural Fibers", "Synthetic Fibers", "Industrial Chemicals", "Plastic Pellets", "Wood Pulp", "Lumber"],
  },
  {
    id: "construction",
    name: "Construction",
    image: "/aspidus/construction-premium.png",
    icon: Building2,
    items: ["Cement", "Sand", "Gravel", "Aggregates", "Steel Beams", "Rebars", "Pipes", "Tiles", "Paints", "Drywall"],
  },
  {
    id: "textiles",
    name: "Textiles & Fibers",
    image: "/aspidus/textiles-premium.png",
    icon: Shirt,
    items: ["Cotton", "Wool", "Linen", "Silk", "Polyester", "Nylon", "Acrylic", "Spandex", "Woven Fabrics", "Denim"],
  },
  {
    id: "fertilizers",
    name: "Fertilizers",
    image: "/aspidus/fertilizers-premium.png",
    icon: FlaskConical,
    items: ["Urea", "Ammonium Nitrate", "Ammonium Sulfate", "DAP", "MAP", "TSP", "MOP", "SOP", "NPK"],
  },
  {
    id: "nuts_dried_fruits",
    name: "Nuts & Fruits",
    image: "/aspidus/nuts-premium.png",
    icon: Cherry,
    items: ["Almonds", "Walnuts", "Cashews", "Pistachios", "Hazelnuts", "Raisins", "Apricots", "Dates", "Figs", "Prunes"],
  },
  {
    id: "cocoa_coffee",
    name: "Cocoa & Coffee",
    image: "/aspidus/cocoa-coffee-premium.png",
    icon: Coffee,
    items: ["Cocoa Butter", "Cocoa Mass", "Cocoa Powder", "Roasted Beans", "Instant Coffee", "Coffee Extracts"],
  },
  {
    id: "spices",
    name: "Spices",
    image: "/aspidus/spices-premium.png",
    icon: Leaf,
    items: ["Black Pepper", "Cinnamon", "Cumin", "Turmeric", "Cloves", "Oregano", "Basil", "Thyme", "Rosemary", "Vanilla"],
  },
];

export type Office = {
  id: string;
  name: string;
  legalName: string;
  city: string;
  country: string;
  flag: string;
  image: string;
  address: string;
  hours: string;
  hoursTz: string;
  specialties: string;
  descKey: string;
};

export const offices: Office[] = [
  {
    id: "dubai",
    name: "Aspidus Dubai",
    legalName: "Aspidus DMCC",
    city: "Dubai",
    country: "United Arab Emirates",
    flag: "AE",
    image: "/aspidus/pexels-apasaric-325193.webp",
    address: "Al Sarayat St, Goldcrest Executive Tower, Jumeirah Lakes Towers, Dubai, UAE",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM",
    hoursTz: "GMT+4",
    specialties: "Energy & Precious Metals · Middle East & Asia hub",
    descKey: "locations.dubai.desc",
  },
  {
    id: "capetown",
    name: "Aspidus Cape Town",
    legalName: "Aspidus Commodities Traders (Pty) Ltd",
    city: "Cape Town",
    country: "South Africa",
    flag: "ZA",
    image: "/aspidus/pexels-taryn-elliott-9324233.webp",
    address: "Aintree Avenue, Western Cape, Cape Town, Republic of South Africa",
    hours: "Mon - Fri: 9:00 AM - 5:00 PM",
    hoursTz: "GMT+2",
    specialties: "Agriculture, Coal & Minerals · African gateway",
    descKey: "locations.capetown.desc",
  },
  {
    id: "istanbul",
    name: "Aspidus Istanbul",
    legalName: "Aspidus Istanbul",
    city: "Istanbul",
    country: "Türkiye",
    flag: "TR",
    image: "/aspidus/pexels-dogukanbilgin-13869354.webp",
    address: "Qasar Istanbul Mecidiyeköy, Büyükdere Cd. No:76, Şişli/İstanbul, Türkiye",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM",
    hoursTz: "GMT+3",
    specialties: "Industrial Metals & Natural Resources · Europe-Asia nexus",
    descKey: "locations.istanbul.desc",
  },
];

export type Stat = {
  value: number;
  suffix: string;
  prefix: string;
  labelKey: string;
};

export const stats: Stat[] = [
  { value: 500, suffix: "M+", prefix: "$", labelKey: "stats.s1" },
  { value: 11, suffix: "", prefix: "", labelKey: "stats.s2" },
  { value: 150, suffix: "+", prefix: "", labelKey: "stats.s3" },
  { value: 24, suffix: "", prefix: "", labelKey: "stats.s4" },
];

export const marqueeItems: string[] = [
  "Energy & Petrochemicals",
  "Precious Metals",
  "Agriculture & Grains",
  "Construction Materials",
  "Textiles & Fibers",
  "Fertilizers",
  "Cocoa & Coffee",
  "Nuts & Dried Fruits",
  "Spices & Flavorings",
  "Raw Materials",
  "Meat & Processed",
];

export const CONTACT_EMAIL = "info@aspidus.co";
export const CLIENT_PORTAL_URL = "https://aspidus.pythonanywhere.com/portal/login";
export const LINKEDIN_URL = "https://www.linkedin.com/company/aspidus-dmcc";
