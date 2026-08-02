// AUTO-GENERATED from original products/*.json — 92 products across 11 sectors
// Image paths fallback to sector image (original proizvodi/ images were not committed)

export type ProductTab = {
  titleKey: string;
  type: string;
  content: { item: string; value: string }[];
};

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  sector: string;
  image: string;
  tabs: ProductTab[];
};

export const products: Product[] = [
  {
    "slug": "brent-crude",
    "name": "Crude Oil (Brent)",
    "shortDescription": "Brent Crude is a leading global price benchmark for Atlantic basin light sweet crude oils.",
    "sector": "energy",
    "image": "/aspidus/energy.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Light Sweet Crude"
          },
          {
            "item": "API Gravity",
            "value": "Approx. 38.0° - 39.0°"
          },
          {
            "item": "Sulfur Content",
            "value": "Approx. 0.30% - 0.45%"
          },
          {
            "item": "Density (15°C)",
            "value": "Approx. 835 kg/m³"
          },
          {
            "item": "Benchmark For",
            "value": "Europe, Africa, Middle East"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Primary Origin",
            "value": "North Sea (United Kingdom, Norway)"
          },
          {
            "item": "Blend Components",
            "value": "Brent, Forties, Oseberg, Ekofisk, Troll (BFOET)"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Loading",
            "value": "VLCC / Suezmax / Aframax Tankers"
          },
          {
            "item": "Terms",
            "value": "FOB, CIF"
          },
          {
            "item": "Pricing",
            "value": "Dated Brent (Platts)"
          }
        ]
      }
    ]
  },
  {
    "slug": "wti-crude",
    "name": "Crude Oil (WTI)",
    "shortDescription": "West Texas Intermediate (WTI) is a high-quality light sweet crude and a primary benchmark for North American oil.",
    "sector": "energy",
    "image": "/aspidus/energy.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Light Sweet Crude"
          },
          {
            "item": "API Gravity",
            "value": "Approx. 39.0° - 42.0°"
          },
          {
            "item": "Sulfur Content",
            "value": "Approx. 0.20% - 0.35%"
          },
          {
            "item": "Density (15°C)",
            "value": "Approx. 820 kg/m³"
          },
          {
            "item": "Benchmark For",
            "value": "North & South America"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Primary Origin",
            "value": "USA (Texas - Permian Basin, Eagle Ford)"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Delivery Hub",
            "value": "Cushing, Oklahoma (Pipeline)"
          },
          {
            "item": "Export Hub",
            "value": "FOB Houston / Corpus Christi"
          },
          {
            "item": "Loading",
            "value": "Tankers, Pipelines"
          },
          {
            "item": "Pricing",
            "value": "NYMEX Futures"
          }
        ]
      }
    ]
  },
  {
    "slug": "lng",
    "name": "Liquefied Natural Gas (LNG)",
    "shortDescription": "Clean, reliable, and efficient energy source, cooled to a liquid state for transport and storage.",
    "sector": "energy",
    "image": "/aspidus/energy.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Methane (CH4)",
            "value": "87-99% mol"
          },
          {
            "item": "Gross Calorific Value",
            "value": "~39 - 43 MJ/m³ (GHV)"
          },
          {
            "item": "State",
            "value": "Cryogenic Liquid (-162°C / -260°F)"
          },
          {
            "item": "Sulfur Content",
            "value": "Extremely low"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "USA, Qatar, Australia, Nigeria, Algeria"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Transport",
            "value": "Specialized LNG Carriers (Q-Flex, Q-Max)"
          },
          {
            "item": "Terms",
            "value": "DES (Delivered Ex-Ship), FOB"
          },
          {
            "item": "Pricing Benchmark",
            "value": "JKM (Asia), TTF (Europe), Henry Hub (USA)"
          }
        ]
      }
    ]
  },
  {
    "slug": "lpg",
    "name": "Liquefied Petroleum Gas (LPG)",
    "shortDescription": "Versatile fuel mixture (Propane/Butane) used for heating, cooking, and automotive fuel.",
    "sector": "energy",
    "image": "/aspidus/energy.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Composition",
            "value": "Propane (C3H8), Butane (C4H10), or a mix"
          },
          {
            "item": "Standard (Propane)",
            "value": "HD-5 Grade (90% min Propane)"
          },
          {
            "item": "Standard (Auto)",
            "value": "EN 589"
          },
          {
            "item": "Calorific Value",
            "value": "~46.1 MJ/kg (Propane)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Exporters",
            "value": "Middle East (Saudi Arabia, UAE, Qatar), USA"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Transport",
            "value": "VLGC (Very Large Gas Carriers)"
          },
          {
            "item": "Domestic",
            "value": "Pressurized cylinders (11kg, 50kg), bulk tankers"
          },
          {
            "item": "Pricing Benchmark",
            "value": "CP (Saudi Aramco Contract Price), Mont Belvieu (USA)"
          }
        ]
      }
    ]
  },
  {
    "slug": "gasoline",
    "name": "Gasoline (RON 95)",
    "shortDescription": "High-quality unleaded gasoline (petrol) meeting international standards such as RON 95.",
    "sector": "energy",
    "image": "/aspidus/energy.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Standard",
            "value": "EN 228 (Euro 5/6)"
          },
          {
            "item": "RON (Research Octane)",
            "value": "95.0 Min"
          },
          {
            "item": "MON (Motor Octane)",
            "value": "85.0 Min"
          },
          {
            "item": "Sulfur Content",
            "value": "10 mg/kg (10ppm) Max"
          },
          {
            "item": "Density (15°C)",
            "value": "720 - 775 kg/m³"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Origin",
            "value": "Global Refineries"
          },
          {
            "item": "Major Hubs",
            "value": "ARA (Netherlands), Singapore, US Gulf Coast"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Transport",
            "value": "Bulk Cargo Tankers (Handysize, MR, LR)"
          },
          {
            "item": "Terms",
            "value": "FOB, CIF"
          }
        ]
      }
    ]
  },
  {
    "slug": "diesel",
    "name": "Diesel (EN590)",
    "shortDescription": "Ultra-low sulfur diesel (ULSD) compliant with EN590 standards (10ppm sulfur) for modern diesel engines.",
    "sector": "energy",
    "image": "/aspidus/energy.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Standard",
            "value": "EN 590 10ppm"
          },
          {
            "item": "Cetane Index",
            "value": "51.0 Min"
          },
          {
            "item": "Sulfur Content",
            "value": "10 mg/kg (10ppm) Max"
          },
          {
            "item": "Density (15°C)",
            "value": "820 - 845 kg/m³"
          },
          {
            "item": "CFPP (Cold Filter)",
            "value": "Market/Season dependent (e.g., -15°C Winter)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Origin",
            "value": "Global Refineries"
          },
          {
            "item": "Major Exporters",
            "value": "Middle East, India, USA, South Korea"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Transport",
            "value": "Bulk Cargo Tankers (Handysize, MR, LR)"
          },
          {
            "item": "Terms",
            "value": "FOB, CIF"
          },
          {
            "item": "Pricing Benchmark",
            "value": "Platts (e.g., ICE Gasoil)"
          }
        ]
      }
    ]
  },
  {
    "slug": "jet-fuel",
    "name": "Jet Fuel (A-1)",
    "shortDescription": "High-quality aviation turbine fuel (Jet A-1) meeting stringent international safety and performance standards.",
    "sector": "energy",
    "image": "/aspidus/energy.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Standard",
            "value": "ASTM D1655 (Jet A-1)"
          },
          {
            "item": "Flash Point",
            "value": "38°C Min"
          },
          {
            "item": "Freezing Point",
            "value": "-47°C Max"
          },
          {
            "item": "Density (15°C)",
            "value": "775 - 840 kg/m³"
          },
          {
            "item": "Sulfur (Total)",
            "value": "0.30% Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Origin",
            "value": "Global Refineries"
          },
          {
            "item": "Major Hubs",
            "value": "Singapore, Middle East, South Korea, USA"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Transport",
            "value": "Bulk Cargo Tankers, Dedicated Pipelines"
          },
          {
            "item": "Terms",
            "value": "FOB, CIF, TTO"
          }
        ]
      }
    ]
  },
  {
    "slug": "polyethylene",
    "name": "Polyethylene (PE)",
    "shortDescription": "Versatile polymer available in various grades (HDPE, LDPE, LLDPE) for packaging, industrial, and consumer applications.",
    "sector": "energy",
    "image": "/aspidus/energy.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Types",
            "value": "HDPE (High-Density), LDPE (Low-Density), LLDPE (Linear Low-Density)"
          },
          {
            "item": "Format",
            "value": "Granules / Pellets"
          },
          {
            "item": "Key Specs",
            "value": "Melt Flow Index (MFI), Density"
          },
          {
            "item": "Applications (HDPE)",
            "value": "Blow molding (bottles), pipes, crates"
          },
          {
            "item": "Applications (LDPE/LLDPE)",
            "value": "Films, bags, flexible packaging"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Middle East (e.g., SABIC - Saudi Arabia), USA (e.g., Dow), Asia"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "25 kg bags or 1 MT (1000 kg) bulk bags"
          },
          {
            "item": "Loadability",
            "value": "Approx. 25-27 MT per 40' HQ container"
          }
        ]
      }
    ]
  },
  {
    "slug": "polypropylene",
    "name": "Polypropylene (PP)",
    "shortDescription": "Durable and chemical-resistant thermoplastic (Homopolymer, Copolymer) used in automotive, packaging, and textile industries.",
    "sector": "energy",
    "image": "/aspidus/energy.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Types",
            "value": "Homopolymer, Random Copolymer, Impact Copolymer"
          },
          {
            "item": "Format",
            "value": "Granules / Pellets"
          },
          {
            "item": "Key Spec",
            "value": "Melt Flow Index (MFI)"
          },
          {
            "item": "Applications",
            "value": "Injection molding (automotive, caps), fibers (non-woven), film (BOPP)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Middle East, South Korea, USA, Europe"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "25 kg bags or 1 MT (1000 kg) bulk bags"
          },
          {
            "item": "Loadability",
            "value": "Approx. 25-27 MT per 40' HQ container"
          }
        ]
      }
    ]
  },
  {
    "slug": "copper",
    "name": "Copper Cathodes (Grade A)",
    "shortDescription": "High-purity (99.99%) electrolytic copper cathodes (LME Grade A) for electrical, electronic, and industrial applications.",
    "sector": "metals",
    "image": "/aspidus/metals.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Standard",
            "value": "LME Grade A"
          },
          {
            "item": "Purity (Cu)",
            "value": "99.99% Min"
          },
          {
            "item": "Standard",
            "value": "BS EN 1978:1998"
          },
          {
            "item": "Format",
            "value": "Cathodes"
          },
          {
            "item": "Dimensions",
            "value": "Approx. 1m x 1m x 20mm"
          },
          {
            "item": "Weight per Cathode",
            "value": "Approx. 80 - 120 kg"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Chile, Peru, DRC, Zambia"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Bundled Cathodes (approx. 2.5 MT per bundle)"
          },
          {
            "item": "Transport",
            "value": "20' or 40' Containers"
          }
        ]
      }
    ]
  },
  {
    "slug": "aluminium",
    "name": "Aluminium Ingots (P1020)",
    "shortDescription": "Primary aluminium ingots (P1020) for extrusion, rolling, and casting industries.",
    "sector": "metals",
    "image": "/aspidus/metals.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Grade",
            "value": "P1020 (LME P1020A)"
          },
          {
            "item": "Purity (Al)",
            "value": "99.70% Min"
          },
          {
            "item": "Impurities (Fe)",
            "value": "0.20% Max"
          },
          {
            "item": "Impurities (Si)",
            "value": "0.10% Max"
          },
          {
            "item": "Format",
            "value": "Standard Ingots (Sows), T-Bars, Billets"
          },
          {
            "item": "Weight per Ingot",
            "value": "Approx. 20 - 25 kg"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Middle East (UAE, Bahrain), Canada, India, Australia"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Bundled ingots on pallets"
          },
          {
            "item": "Transport",
            "value": "20' or 40' Containers"
          }
        ]
      }
    ]
  },
  {
    "slug": "zinc",
    "name": "Zinc Ingots (SHG)",
    "shortDescription": "Special High Grade (SHG) zinc ingots (99.995% purity) used primarily for galvanizing steel.",
    "sector": "metals",
    "image": "/aspidus/metals.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Grade",
            "value": "SHG (Special High Grade)"
          },
          {
            "item": "Standard",
            "value": "LME Approved (e.g., ASTM B6)"
          },
          {
            "item": "Purity (Zn)",
            "value": "99.995% Min"
          },
          {
            "item": "Format",
            "value": "Ingots / Jumbos"
          },
          {
            "item": "Weight per Ingot",
            "value": "Approx. 25 kg"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "China, Peru, Australia, Canada, USA"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Bundled on pallets (approx. 1-2 MT per bundle)"
          },
          {
            "item": "Transport",
            "value": "20' Containers"
          }
        ]
      }
    ]
  },
  {
    "slug": "lead",
    "name": "Lead Ingots (99.97%)",
    "shortDescription": "High-purity lead ingots (99.97% to 99.99%) primarily used for batteries and radiation shielding.",
    "sector": "metals",
    "image": "/aspidus/metals.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Grade",
            "value": "LME Standard"
          },
          {
            "item": "Purity (Pb)",
            "value": "99.97% Min (Standard)"
          },
          {
            "item": "Alternative Purity",
            "value": "99.99% (available)"
          },
          {
            "item": "Format",
            "value": "Ingots"
          },
          {
            "item": "Weight per Ingot",
            "value": "Approx. 25 kg"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "China, Australia, USA, Mexico"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Bundled on pallets (approx. 1-2 MT per bundle)"
          },
          {
            "item": "Transport",
            "value": "20' Containers"
          }
        ]
      }
    ]
  },
  {
    "slug": "gold",
    "name": "Gold Bullion (999.9)",
    "shortDescription": "Investment-grade gold bullion (bars and ingots) sourced from LBMA-certified refineries.",
    "sector": "metals",
    "image": "/aspidus/metals.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Product",
            "value": "Gold Bullion (Bars)"
          },
          {
            "item": "Purity",
            "value": "99.99% (24 Karat)"
          },
          {
            "item": "Format",
            "value": "1 kg, 12.5 kg (400 oz) bars"
          },
          {
            "item": "Alternative Format",
            "value": "Doré Bars (70-90% purity, from mine sites)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Refinery Hubs",
            "value": "Switzerland, UAE (Dubai), UK, USA, Singapore"
          },
          {
            "item": "Mining Origin",
            "value": "Global (Africa, Americas, Australia)"
          }
        ]
      },
      {
        "titleKey": "certificates",
        "type": "table",
        "content": [
          {
            "item": "Certification",
            "value": "LBMA Good Delivery"
          },
          {
            "item": "Assay",
            "value": "Official Assay Certificate provided"
          },
          {
            "item": "Compliance",
            "value": "Full KYC/AML, Proof of Funds required"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Logistics",
            "value": "Secure, insured transport (Brinks, G4S, Loomis)"
          },
          {
            "item": "Delivery",
            "value": "FOB, CIF, or Secure Vault Transfer"
          }
        ]
      }
    ]
  },
  {
    "slug": "silver",
    "name": "Silver Bullion (999.0)",
    "shortDescription": "Investment-grade silver bars (99.9% purity) from LBMA-approved refineries.",
    "sector": "metals",
    "image": "/aspidus/metals.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Purity",
            "value": "99.9% Min"
          },
          {
            "item": "Format",
            "value": "1000 oz bars (Good Delivery), 1 kg bars"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Mexico, Peru, China, Poland"
          }
        ]
      },
      {
        "titleKey": "certificates",
        "type": "table",
        "content": [
          {
            "item": "Certification",
            "value": "LBMA Good Delivery"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Logistics",
            "value": "Secure, insured transport"
          },
          {
            "item": "Packaging",
            "value": "Packed securely in vault boxes on pallets"
          }
        ]
      }
    ]
  },
  {
    "slug": "platinum",
    "name": "Platinum (Pt)",
    "shortDescription": "Industrial and investment-grade platinum (99.95% purity) for automotive (catalysts) and jewelry industries.",
    "sector": "metals",
    "image": "/aspidus/metals.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Purity",
            "value": "99.95% Min"
          },
          {
            "item": "Format",
            "value": "Bars, Ingots (1-5 kg), Sponge (Powder)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "South Africa, Zimbabwe, Canada, USA"
          }
        ]
      },
      {
        "titleKey": "certificates",
        "type": "table",
        "content": [
          {
            "item": "Certification",
            "value": "LPPM Good Delivery"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Logistics",
            "value": "Secure, insured transport"
          }
        ]
      }
    ]
  },
  {
    "slug": "steel",
    "name": "Steel Products (HRC, CRC, Rebar)",
    "shortDescription": "Trading in various flat and long steel products including Hot-Rolled Coil (HRC), Cold-Rolled Coil (CRC), and Rebar.",
    "sector": "metals",
    "image": "/aspidus/metals.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Products",
            "value": "HRC (Hot-Rolled Coil), CRC (Cold-Rolled Coil), Rebar (Deformed Bars), Billets"
          },
          {
            "item": "Standards (Rebar)",
            "value": "ASTM A615 (Gr 40/60), BS 4449"
          },
          {
            "item": "Standards (HRC/CRC)",
            "value": "JIS G3101, ASTM A36, EN 10025"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Turkey, India, South Korea, Vietnam, Brazil, EU"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging (Coil)",
            "value": "Standard mill export packing"
          },
          {
            "item": "Packaging (Rebar)",
            "value": "Bundles (approx. 2-5 MT)"
          },
          {
            "item": "Transport",
            "value": "Bulk vessel or container"
          }
        ]
      }
    ]
  },
  {
    "slug": "iron-ore",
    "name": "Iron Ore Fines (62% Fe)",
    "shortDescription": "Standard specification iron ore fines (62% Fe content), a key raw material for steel production.",
    "sector": "metals",
    "image": "/aspidus/metals.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Standard",
            "value": "Iron Ore Fines 62% Fe (Platts/TSI)"
          },
          {
            "item": "Fe Content",
            "value": "62.0% (Basis)"
          },
          {
            "item": "Silica (SiO2)",
            "value": "3.0% - 5.0%"
          },
          {
            "item": "Alumina (Al2O3)",
            "value": "1.5% - 3.0%"
          },
          {
            "item": "Phosphorus (P)",
            "value": "0.05% - 0.10%"
          },
          {
            "item": "Sulfur (S)",
            "value": "< 0.05%"
          },
          {
            "item": "Moisture (H2O)",
            "value": "8.0% - 10.0% Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Australia (Pilbara), Brazil"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Transport",
            "value": "Bulk Carrier Vessel (Capesize, Panamax)"
          },
          {
            "item": "Terms",
            "value": "FOB, CFR"
          }
        ]
      }
    ]
  },
  {
    "slug": "nickel",
    "name": "Nickel (LME Grade)",
    "shortDescription": "High-purity primary nickel conforming to LME standards, essential for stainless steel and battery production.",
    "sector": "metals",
    "image": "/aspidus/metals.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Grade",
            "value": "LME Approved Brand"
          },
          {
            "item": "Purity (Ni)",
            "value": "99.80% Min"
          },
          {
            "item": "Standard",
            "value": "ASTM B39-79"
          },
          {
            "item": "Shape",
            "value": "Full Plate Cathodes, Cut Cathodes, Pellets, Briquettes"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Canada, Australia, Indonesia, New Caledonia"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Bundled cathodes or steel drums (for pellets/briquettes)"
          },
          {
            "item": "Lot Size",
            "value": "LME Standard (6 Tonnes)"
          },
          {
            "item": "Transport",
            "value": "20' Containers"
          }
        ]
      }
    ]
  },
  {
    "slug": "copper-concentrate",
    "name": "Copper Concentrate",
    "shortDescription": "Partially processed copper ore with elevated copper content, serving as feedstock for smelting and refining industries.",
    "sector": "metals",
    "image": "/aspidus/metals.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "HS Code",
            "value": "260300"
          },
          {
            "item": "Copper (Cu) Content",
            "value": "20% - 40% (Basis)"
          },
          {
            "item": "Moisture",
            "value": "8% - 12% Max"
          },
          {
            "item": "Payable Metals",
            "value": "Gold (Au), Silver (Ag)"
          },
          {
            "item": "Penalty Elements",
            "value": "Arsenic (As), Lead (Pb), Cadmium (Cd), Mercury (Hg)"
          },
          {
            "item": "Terms",
            "value": "Treatment Charges (TC) / Refining Charges (RC) apply"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Chile, Peru, DRC, Zambia, Mongolia"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Bulk bags (WIB - Wet-in-Bulk) approx. 1-2 MT"
          },
          {
            "item": "Transport",
            "value": "Bulk vessel or container (with safety liners)"
          }
        ]
      }
    ]
  },
  {
    "slug": "zinc-concentrate",
    "name": "Zinc Concentrate",
    "shortDescription": "A raw material for producing refined zinc, also containing traces of valuable by-products like lead and silver.",
    "sector": "metals",
    "image": "/aspidus/metals.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "HS Code",
            "value": "260800"
          },
          {
            "item": "Zinc (Zn) Content",
            "value": "45% - 60% (Basis)"
          },
          {
            "item": "Lead (Pb)",
            "value": "Varies (often 1-5%)"
          },
          {
            "item": "Payable Metals",
            "value": "Silver (Ag)"
          },
          {
            "item": "Moisture",
            "value": "Typically < 10%"
          },
          {
            "item": "Terms",
            "value": "Treatment Charges (TC) apply"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Peru, Australia, USA, Bolivia"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Bulk bags (WIB) approx. 1-2 MT"
          },
          {
            "item": "Transport",
            "value": "Bulk vessel or container"
          }
        ]
      }
    ]
  },
  {
    "slug": "wheat",
    "name": "Milling Wheat (12.5% Protein)",
    "shortDescription": "High-quality milling wheat suitable for flour production, traded on international standards.",
    "sector": "agriculture",
    "image": "/aspidus/agrikultura.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Protein",
            "value": "12.5% Min (Basis)"
          },
          {
            "item": "Moisture",
            "value": "13.5% Max"
          },
          {
            "item": "Test Weight",
            "value": "76 kg/hl Min"
          },
          {
            "item": "Gluten (Wet)",
            "value": "26% Min"
          },
          {
            "item": "Falling Number",
            "value": "250 sec Min"
          },
          {
            "item": "Foreign Matter",
            "value": "2% Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "USA, Canada, Australia, Argentina, EU (France, Germany)"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Bulk vessel or 50kg PP bags"
          },
          {
            "item": "Transport",
            "value": "Bulk Carrier (Panamax, Supramax)"
          }
        ]
      }
    ]
  },
  {
    "slug": "corn",
    "name": "Yellow Corn (Maize) No. 2",
    "shortDescription": "Standard grade Yellow Corn (Maize) used primarily for animal feed and ethanol production.",
    "sector": "agriculture",
    "image": "/aspidus/agrikultura.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Grade",
            "value": "US No. 2 (or equivalent)"
          },
          {
            "item": "Test Weight",
            "value": "54 lbs/bushel (70 kg/hl) Min"
          },
          {
            "item": "Moisture",
            "value": "14.5% Max"
          },
          {
            "item": "Broken Corn & FM",
            "value": "3% Max"
          },
          {
            "item": "Damaged Kernels",
            "value": "5% Max"
          },
          {
            "item": "Aflatoxin",
            "value": "20 PPB Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "USA, Brazil, Argentina, South Africa"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Bulk vessel"
          },
          {
            "item": "Transport",
            "value": "Bulk Carrier (Panamax, Supramax)"
          }
        ]
      }
    ]
  },
  {
    "slug": "soybeans",
    "name": "Soybeans No. 2",
    "shortDescription": "High-quality Yellow Soybeans for crushing (oil and meal production) and human consumption.",
    "sector": "agriculture",
    "image": "/aspidus/agrikultura.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Grade",
            "value": "US No. 2 (or equivalent)"
          },
          {
            "item": "Protein",
            "value": "34% Min (Basis)"
          },
          {
            "item": "Moisture",
            "value": "13.5% Max"
          },
          {
            "item": "Oil Content",
            "value": "18.5% Min (Basis)"
          },
          {
            "item": "Foreign Matter",
            "value": "2% Max"
          },
          {
            "item": "Splits",
            "value": "20% Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "USA, Brazil, Argentina"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Bulk vessel"
          },
          {
            "item": "Transport",
            "value": "Bulk Carrier (Panamax, Supramax)"
          }
        ]
      }
    ]
  },
  {
    "slug": "rice",
    "name": "White Rice (5% Broken)",
    "shortDescription": "Long grain white rice, graded 5% broken, a globally recognized standard for quality.",
    "sector": "agriculture",
    "image": "/aspidus/agrikultura.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Broken",
            "value": "5.0% Max"
          },
          {
            "item": "Moisture",
            "value": "14.0% Max"
          },
          {
            "item": "Foreign Matter",
            "value": "0.1% Max"
          },
          {
            "item": "Yellow Kernels",
            "value": "0.5% Max"
          },
          {
            "item": "Chalky Kernels",
            "value": "6.0% Max"
          },
          {
            "item": "Damaged Kernels",
            "value": "0.75% Max"
          },
          {
            "item": "Average Length",
            "value": "6.2 mm Min"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Vietnam, Thailand, India, Pakistan"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "25kg or 50kg PP bags"
          },
          {
            "item": "Loadability",
            "value": "Approx. 26-27 MT per 20' container"
          }
        ]
      }
    ]
  },
  {
    "slug": "sunflower-oil",
    "name": "Crude Sunflower Oil",
    "shortDescription": "Unrefined crude sunflower oil for further processing into edible oil and other industrial applications.",
    "sector": "agriculture",
    "image": "/aspidus/agrikultura.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Crude, Unrefined"
          },
          {
            "item": "Free Fatty Acids (FFA)",
            "value": "3.0% Max"
          },
          {
            "item": "Moisture & Impurities",
            "value": "0.3% Max"
          },
          {
            "item": "Iodine Value",
            "value": "119 - 138"
          },
          {
            "item": "Saponification Value",
            "value": "188 - 194"
          },
          {
            "item": "Unsaponifiable Matter",
            "value": "1.5% Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Argentina, EU (Romania, Bulgaria, Hungary), Turkey"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Flexitanks (in 20' container)"
          },
          {
            "item": "Transport",
            "value": "Bulk vessel or containers"
          }
        ]
      }
    ]
  },
  {
    "slug": "palm-oil",
    "name": "RBD Palm Olein (CP8)",
    "shortDescription": "Refined, Bleached, and Deodorized (RBD) Palm Olein, cold-pressed (CP8), widely used as cooking oil.",
    "sector": "agriculture",
    "image": "/aspidus/agrikultura.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Free Fatty Acids (FFA)",
            "value": "0.1% Max"
          },
          {
            "item": "Moisture & Impurities",
            "value": "0.1% Max"
          },
          {
            "item": "Iodine Value (Wijs)",
            "value": "57.0 Min"
          },
          {
            "item": "Cloud Point",
            "value": "8.0°C Max (CP8)"
          },
          {
            "item": "Color (5.25\" Lovibond)",
            "value": "3.0 Red Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Malaysia, Indonesia"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Jerry Cans (18-25L), Steel Drums, Flexitanks, Bulk Vessel"
          }
        ]
      }
    ]
  },
  {
    "slug": "olive-oil",
    "name": "Extra Virgin Olive Oil (EVOO)",
    "shortDescription": "Premium quality cold-pressed olive oil with excellent flavor and low acidity.",
    "sector": "agriculture",
    "image": "/aspidus/agrikultura.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Grade",
            "value": "Extra Virgin (IOC Standard)"
          },
          {
            "item": "Acidity (as Oleic)",
            "value": "0.8% Max"
          },
          {
            "item": "Peroxide Value",
            "value": "20 meq O2/kg Max"
          },
          {
            "item": "Organoleptic",
            "value": "Median of defects = 0, Median of fruitiness > 0"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Spain, Italy, Greece, Turkey, Tunisia"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Glass bottles, Tins (3-5L), Drums, IBC Totes"
          }
        ]
      }
    ]
  },
  {
    "slug": "coffee-beans",
    "name": "Coffee Beans (Arabica/Robusta)",
    "shortDescription": "Green coffee beans, graded and sourced for roasting, including high-quality Arabica and robust Robusta.",
    "sector": "agriculture",
    "image": "/aspidus/agrikultura.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Arabica (Washed/Natural), Robusta (Washed/Natural)"
          },
          {
            "item": "Grade (Arabica)",
            "value": "e.g., Brazil NY 2/3, Colombia Supremo"
          },
          {
            "item": "Grade (Robusta)",
            "value": "e.g., Vietnam G1"
          },
          {
            "item": "Screen Size",
            "value": "15-19"
          },
          {
            "item": "Moisture",
            "value": "12.5% Max"
          },
          {
            "item": "Defects",
            "value": "Per grading standard (e.g., <8 defects for NY 2)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Arabica Origin",
            "value": "Brazil, Colombia, Ethiopia"
          },
          {
            "item": "Robusta Origin",
            "value": "Vietnam, Brazil, Indonesia"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "60 kg Jute bags or 69 kg (Colombia)"
          },
          {
            "item": "Loadability",
            "value": "Approx. 19.2 MT per 20' container"
          }
        ]
      }
    ]
  },
  {
    "slug": "sugar",
    "name": "Refined White Sugar ICUMSA 45",
    "shortDescription": "High-quality refined white sugar suitable for human consumption and various industrial applications.",
    "sector": "agriculture",
    "image": "/aspidus/agrikultura.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Standard",
            "value": "ICUMSA 45 RBU"
          },
          {
            "item": "Polarization",
            "value": "99.80% Min"
          },
          {
            "item": "Ash Content",
            "value": "0.04% Max"
          },
          {
            "item": "Moisture",
            "value": "0.04% Max"
          },
          {
            "item": "Solubility",
            "value": "100% Dry & Free Flowing"
          },
          {
            "item": "Radiation",
            "value": "Normal (non-detectable)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Brazil, Thailand, India, Australia"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "50 kg PP bags"
          },
          {
            "item": "Container Load",
            "value": "Approx. 26-27 MT per 20' container"
          },
          {
            "item": "Bulk",
            "value": "Available in bulk vessels"
          },
          {
            "item": "Min. Order",
            "value": "12,500 MT (Spot) or 100,000 MT (Contract)"
          }
        ]
      }
    ]
  },
  {
    "slug": "cocoa-beans",
    "name": "Cocoa Beans (Main Crop)",
    "shortDescription": "Raw, fermented, and dried cocoa beans sourced for chocolate and cocoa product manufacturing.",
    "sector": "agriculture",
    "image": "/aspidus/agrikultura.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Grade",
            "value": "Main Crop (Grade I/II)"
          },
          {
            "item": "Bean Count",
            "value": "95-105 beans / 100g (varies)"
          },
          {
            "item": "Moisture",
            "value": "7.5% Max"
          },
          {
            "item": "Mouldy",
            "value": "< 3% (Grade I)"
          },
          {
            "item": "Slaty",
            "value": "< 3% (Grade I)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Ivory Coast, Ghana, Ecuador, Nigeria, Cameroon"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "60-70 kg Jute bags"
          },
          {
            "item": "Transport",
            "value": "20' Containers"
          }
        ]
      }
    ]
  },
  {
    "slug": "soybean-meal",
    "name": "Soybean Meal (46% Protein)",
    "shortDescription": "High-protein soybean meal, a primary ingredient in animal feed for poultry, swine, and cattle.",
    "sector": "agriculture",
    "image": "/aspidus/agrikultura.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Protein",
            "value": "46.0% Min (As Fed)"
          },
          {
            "item": "Moisture",
            "value": "12.0% Max"
          },
          {
            "item": "Fat / Oil",
            "value": "1.5% - 2.5%"
          },
          {
            "item": "Fiber",
            "value": "7.0% Max"
          },
          {
            "item": "Ash",
            "value": "7.0% Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "USA, Brazil, Argentina"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Bulk vessel or 50kg bags"
          },
          {
            "item": "Transport",
            "value": "Bulk Carrier (Panamax, Supramax)"
          }
        ]
      }
    ]
  },
  {
    "slug": "corn-gluten-feed",
    "name": "Corn Gluten Feed (CGF)",
    "shortDescription": "A by-product of corn wet-milling, CGF is a valuable, medium-protein feed ingredient for livestock.",
    "sector": "agriculture",
    "image": "/aspidus/agrikultura.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Protein",
            "value": "18% - 22% (Basis)"
          },
          {
            "item": "Moisture",
            "value": "10% - 12% Max"
          },
          {
            "item": "Fat",
            "value": "2% - 4%"
          },
          {
            "item": "Fiber",
            "value": "8% - 10% Max"
          },
          {
            "item": "Format",
            "value": "Pellets"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "USA, EU, China"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Bulk vessel or 50kg bags"
          },
          {
            "item": "Transport",
            "value": "Bulk Carrier"
          }
        ]
      }
    ]
  },
  {
    "slug": "chicken",
    "name": "Frozen Chicken (Whole & Cuts)",
    "shortDescription": "High-quality, calibrated frozen chicken products sourced from SIF/BRC/Halal certified facilities, ideal for food service and retail.",
    "sector": "meat",
    "image": "/aspidus/meat.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Product",
            "value": "Whole Chicken, Boneless Breast, Leg Quarters"
          },
          {
            "item": "Grade",
            "value": "Grade A"
          },
          {
            "item": "Freezing",
            "value": "IQF (Individually Quick Frozen) or BQF (Block)"
          },
          {
            "item": "Moisture",
            "value": "< 5%"
          },
          {
            "item": "Broken Bones",
            "value": "< 2%"
          },
          {
            "item": "Black Spots",
            "value": "None"
          }
        ]
      },
      {
        "titleKey": "certificates",
        "type": "table",
        "content": [
          {
            "item": "Standard",
            "value": "BRC, ISO, HACCP"
          },
          {
            "item": "Certification",
            "value": "Halal Certified (SIF)"
          },
          {
            "item": "Veterinary",
            "value": "SGS Inspection, Health Certificate"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Brazil, USA, Turkey, EU (Poland, Netherlands)"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "10kg, 15kg, or 20kg poly-lined cartons"
          },
          {
            "item": "Shelf Life",
            "value": "24 months at -18°C"
          },
          {
            "item": "Transport",
            "value": "40' High-Cube Reefer Container"
          },
          {
            "item": "Loadability",
            "value": "Approx. 27-28 MT"
          }
        ]
      }
    ]
  },
  {
    "slug": "beef",
    "name": "Frozen Boneless Beef",
    "shortDescription": "Premium frozen boneless beef cuts, grass-fed or grain-fed, sourced from leading Halal-certified abattoirs.",
    "sector": "meat",
    "image": "/aspidus/meat.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Popular Cuts",
            "value": "Chuck, Brisket, Shank, Topside, Silverside, Rump"
          },
          {
            "item": "Fat Content",
            "value": "90CL, 95CL (Chemical Lean)"
          },
          {
            "item": "Type",
            "value": "Forequarter or Hindquarter cuts"
          },
          {
            "item": "Freezing",
            "value": "BQF (Block Frozen) at -18°C"
          }
        ]
      },
      {
        "titleKey": "certificates",
        "type": "table",
        "content": [
          {
            "item": "Certification",
            "value": "Halal Certified"
          },
          {
            "item": "Inspection",
            "value": "SGS / Bureau Veritas at loading"
          },
          {
            "item": "Veterinary",
            "value": "Official Health Certificate"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Brazil, Argentina, Uruguay, Australia, India (Buffalo)"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "20kg or 25kg poly-lined cartons"
          },
          {
            "item": "Shelf Life",
            "value": "24 months at -18°C"
          },
          {
            "item": "Transport",
            "value": "40' High-Cube Reefer Container"
          },
          {
            "item": "Loadability",
            "value": "Approx. 27-28 MT"
          }
        ]
      }
    ]
  },
  {
    "slug": "lamb",
    "name": "Frozen Lamb Carcass & Cuts",
    "shortDescription": "High-quality frozen lamb, available as 6-way cut carcasses or specific cuts, sourced from Australia and South America.",
    "sector": "meat",
    "image": "/aspidus/meat.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Product",
            "value": "Whole Carcass (6-way cut), Leg, Shoulder, Rack"
          },
          {
            "item": "Weight (Carcass)",
            "value": "18-24 kg average"
          },
          {
            "item": "Type",
            "value": "Grass-fed"
          },
          {
            "item": "Freezing",
            "value": "Blast frozen at -18°C"
          }
        ]
      },
      {
        "titleKey": "certificates",
        "type": "table",
        "content": [
          {
            "item": "Certification",
            "value": "Halal Certified"
          },
          {
            "item": "Standard",
            "value": "AUS-MEAT standard (Australia)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Australia, New Zealand, Uruguay"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging (Carcass)",
            "value": "Individually wrapped in stockinette bags"
          },
          {
            "item": "Packaging (Cuts)",
            "value": "10-15kg cartons"
          },
          {
            "item": "Transport",
            "value": "40' High-Cube Reefer Container"
          },
          {
            "item": "Loadability",
            "value": "Approx. 26-27 MT"
          }
        ]
      }
    ]
  },
  {
    "slug": "turkey",
    "name": "Frozen Turkey (Whole & Cuts)",
    "shortDescription": "Premium frozen turkey products, including whole birds for food service and specific cuts for processing.",
    "sector": "meat",
    "image": "/aspidus/meat.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Product",
            "value": "Whole Turkey, Boneless Breast Meat, Drumsticks"
          },
          {
            "item": "Grade",
            "value": "Grade A"
          },
          {
            "item": "Weight (Whole)",
            "value": "Calibrated sizes (e.g., 6-10 kg)"
          },
          {
            "item": "Freezing",
            "value": "IQF or BQF"
          }
        ]
      },
      {
        "titleKey": "certificates",
        "type": "table",
        "content": [
          {
            "item": "Certification",
            "value": "Halal, BRC, ISO, HACCP"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "USA, Brazil, EU (Poland, Germany)"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "10-15kg poly-lined cartons"
          },
          {
            "item": "Transport",
            "value": "40' High-Cube Reefer Container"
          },
          {
            "item": "Loadability",
            "value": "Approx. 27 MT"
          }
        ]
      }
    ]
  },
  {
    "slug": "liver",
    "name": "Frozen Beef/Chicken Liver",
    "shortDescription": "High-quality frozen beef and chicken livers, processed and packed for human consumption.",
    "sector": "meat",
    "image": "/aspidus/meat.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Beef Liver or Chicken Liver"
          },
          {
            "item": "Standard",
            "value": "Grade A, 100% suitable for human consumption"
          },
          {
            "item": "Processing",
            "value": "Washed, drained, and flash frozen"
          },
          {
            "item": "Freezing",
            "value": "BQF (Block Frozen)"
          }
        ]
      },
      {
        "titleKey": "certificates",
        "type": "table",
        "content": [
          {
            "item": "Certification",
            "value": "Halal Certified"
          },
          {
            "item": "Inspection",
            "value": "SGS Inspection"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Origin (Beef)",
            "value": "Brazil, Argentina, Uruguay"
          },
          {
            "item": "Origin (Chicken)",
            "value": "Brazil, Turkey, USA"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "10kg or 15kg cartons"
          },
          {
            "item": "Transport",
            "value": "40' High-Cube Reefer Container"
          }
        ]
      }
    ]
  },
  {
    "slug": "yarn",
    "name": "Cotton Yarn (Carded/Combed)",
    "shortDescription": "High-quality ring-spun cotton yarn for knitting and weaving, available in various counts.",
    "sector": "raw_materials",
    "image": "/aspidus/raw_materials.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "100% Cotton, Ring Spun"
          },
          {
            "item": "Count",
            "value": "Ne 20/1, Ne 24/1, Ne 30/1, Ne 40/1"
          },
          {
            "item": "Process",
            "value": "Carded or Combed"
          },
          {
            "item": "Application",
            "value": "Knitting or Weaving"
          },
          {
            "item": "Grade",
            "value": "Uster 5-10% (Top Grade)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "India, Vietnam, Pakistan, Turkey, Uzbekistan"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Cones in export-worthy cartons or pallets"
          },
          {
            "item": "Loadability",
            "value": "Approx. 24-25 MT per 40' HQ container"
          }
        ]
      }
    ]
  },
  {
    "slug": "natural-fibers",
    "name": "Raw Cotton (Ginned)",
    "shortDescription": "Raw ginned cotton bales, graded by staple length, strength, and micronaire for spinning mills.",
    "sector": "raw_materials",
    "image": "/aspidus/raw_materials.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Grade (US)",
            "value": "SGM 1-1/8\" (Staple 36)"
          },
          {
            "item": "Grade (Brazil)",
            "value": "Middling 1-1/8\""
          },
          {
            "item": "Strength (Gpt)",
            "value": "28 Gpt Min"
          },
          {
            "item": "Micronaire",
            "value": "3.8 - 4.9"
          },
          {
            "item": "Moisture",
            "value": "8.5% Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "USA, Brazil, India, Australia, Benin, Ivory Coast"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Standard high-density bales (approx. 220-250 kg)"
          },
          {
            "item": "Loadability",
            "value": "Approx. 25-26 MT per 40' HQ container"
          }
        ]
      }
    ]
  },
  {
    "slug": "synthetic-fibers-textile",
    "name": "Polyester Staple Fiber (PSF)",
    "shortDescription": "Virgin-grade Polyester Staple Fiber (PSF) used for spinning, non-woven fabrics, and filling applications.",
    "sector": "raw_materials",
    "image": "/aspidus/raw_materials.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Virgin, Semi-Dull, Raw White"
          },
          {
            "item": "Denier",
            "value": "1.2D, 1.4D, 1.5D"
          },
          {
            "item": "Cut Length",
            "value": "32mm, 38mm, 51mm"
          },
          {
            "item": "Application",
            "value": "Ring Spinning, Non-Woven"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "China, India, South Korea, Taiwan"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Pressed bales (approx. 300-350 kg)"
          },
          {
            "item": "Loadability",
            "value": "Approx. 24-25 MT per 40' HQ container"
          }
        ]
      }
    ]
  },
  {
    "slug": "industrial-chemicals",
    "name": "Caustic Soda Flakes (99%)",
    "shortDescription": "High-purity Caustic Soda (Sodium Hydroxide) flakes, essential for paper, textile, and detergent manufacturing.",
    "sector": "raw_materials",
    "image": "/aspidus/raw_materials.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Product",
            "value": "Sodium Hydroxide (NaOH)"
          },
          {
            "item": "Purity",
            "value": "99.0% Min"
          },
          {
            "item": "Sodium Chloride (NaCl)",
            "value": "0.05% Max"
          },
          {
            "item": "Sodium Carbonate (Na2CO3)",
            "value": "0.5% Max"
          },
          {
            "item": "Iron (Fe)",
            "value": "10 ppm Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Middle East (Saudi Arabia, UAE), China, USA, EU"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "25 kg PP/PE bags"
          },
          {
            "item": "Loadability",
            "value": "Approx. 25-27 MT per 20' container (palletized)"
          }
        ]
      }
    ]
  },
  {
    "slug": "plastic-pellets",
    "name": "Plastic Pellets (PET / HDPE)",
    "shortDescription": "Prime virgin plastic granules (PET & HDPE) for food-grade packaging, bottle, and pipe manufacturing.",
    "sector": "raw_materials",
    "image": "/aspidus/raw_materials.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Product",
            "value": "PET (Polyethylene Terephthalate) - Bottle Grade"
          },
          {
            "item": "Key Spec (PET)",
            "value": "Intrinsic Viscosity (IV) e.g., 0.80, 0.84"
          },
          {
            "item": "Product",
            "value": "HDPE (High-Density Polyethylene) - Blow Molding Grade"
          },
          {
            "item": "Key Spec (HDPE)",
            "value": "Melt Flow Index (MFI), Density"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Middle East (SABIC), South Korea, Taiwan, USA"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "25 kg bags or 1100 kg bulk bags (Jumbo)"
          },
          {
            "item": "Loadability",
            "value": "Approx. 25-26 MT per 40' HQ container"
          }
        ]
      }
    ]
  },
  {
    "slug": "wood-pulp",
    "name": "Wood Pulp (NBSK)",
    "shortDescription": "Northern Bleached Softwood Kraft (NBSK) pulp, a benchmark commodity for high-quality paper production.",
    "sector": "raw_materials",
    "image": "/aspidus/raw_materials.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "NBSK (Northern Bleached Softwood Kraft)"
          },
          {
            "item": "Brightness",
            "value": "90% ISO Min"
          },
          {
            "item": "Moisture",
            "value": "Air-dry (approx. 10%)"
          },
          {
            "item": "Application",
            "value": "Tissue, Printing Paper, Specialty Paper"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Canada, USA, Sweden, Finland"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Sheet-dried bales (approx. 250 kg), unitized"
          },
          {
            "item": "Transport",
            "value": "Bulk vessel or 40' HQ containers"
          }
        ]
      }
    ]
  },
  {
    "slug": "waste-paper",
    "name": "Waste Paper (OCC 11)",
    "shortDescription": "OCC (Old Corrugated Containers) Grade 11, a key raw material for recycling into new containerboard.",
    "sector": "raw_materials",
    "image": "/aspidus/raw_materials.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Grade",
            "value": "OCC Grade 11 (ISRI Standard)"
          },
          {
            "item": "Description",
            "value": "Consists of corrugated containers"
          },
          {
            "item": "Out-throws",
            "value": "< 5% (non-corrugated materials)"
          },
          {
            "item": "Prohibitive Materials",
            "value": "< 1%"
          },
          {
            "item": "Moisture",
            "value": "< 12% (Bale weight)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Exporters",
            "value": "USA, EU (UK, Netherlands, Germany), Japan"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "High-density pressed bales (approx. 800-1400 kg)"
          },
          {
            "item": "Loadability",
            "value": "Approx. 25-27 MT per 40' HQ container"
          }
        ]
      }
    ]
  },
  {
    "slug": "lumber",
    "name": "Lumber (SPF)",
    "shortDescription": "Construction-grade dimensional lumber, primarily Spruce-Pine-Fir (SPF), for residential and commercial framing.",
    "sector": "raw_materials",
    "image": "/aspidus/raw_materials.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Species",
            "value": "SPF (Spruce-Pine-Fir)"
          },
          {
            "item": "Grade",
            "value": "#2 & Better (Standard construction grade)"
          },
          {
            "item": "Size",
            "value": "2x4, 2x6 (standard US dimensions)"
          },
          {
            "item": "Moisture",
            "value": "Kiln-Dried (KD-HT), 19% Max"
          },
          {
            "item": "Standard",
            "value": "CLS / S4S (Canadian Lumber Standard)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Canada, USA, EU (Germany, Sweden)"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Bundled and wrapped for export"
          },
          {
            "item": "Transport",
            "value": "40' HQ Container or Breakbulk vessel"
          }
        ]
      }
    ]
  },
  {
    "slug": "steel-rebar",
    "name": "Steel Rebar (Deformed)",
    "shortDescription": "Hot-rolled deformed steel reinforcement bars used for concrete reinforcement in construction.",
    "sector": "raw_materials",
    "image": "/aspidus/raw_materials.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Standard",
            "value": "ASTM A615 (Grade 60), BS 4449 (B500B), EN 10080"
          },
          {
            "item": "Diameter",
            "value": "8mm - 40mm"
          },
          {
            "item": "Length",
            "value": "Standard 12 meters (6m available)"
          },
          {
            "item": "Yield Strength (Gr 60)",
            "value": "420 MPa Min (60,000 psi)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Turkey, Vietnam, India, Brazil, EU (Italy, Spain)"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Bundles of 2-5 MT, tagged"
          },
          {
            "item": "Transport",
            "value": "Bulk vessel (Handysize) or 20' Containers (for <12m lengths)"
          }
        ]
      }
    ]
  },
  {
    "slug": "cement",
    "name": "Cement (OPC 42.5N/R)",
    "shortDescription": "High-performance Ordinary Portland Cement (OPC) compliant with EN 197-1, suitable for all general construction purposes.",
    "sector": "construction",
    "image": "/aspidus/construction.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Standard",
            "value": "EN 197-1:2011"
          },
          {
            "item": "Type",
            "value": "CEM I 42.5N or 42.5R (Ordinary Portland Cement)"
          },
          {
            "item": "Compressive Strength (28d)",
            "value": "42.5 MPa (N) - 62.5 MPa (R)"
          },
          {
            "item": "Initial Setting Time",
            "value": "60 minutes Min"
          },
          {
            "item": "Soundness (Le Chatelier)",
            "value": "10 mm Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Exporters",
            "value": "Vietnam, Turkey, Egypt, UAE, Pakistan"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "50 kg bags or 1.5 - 2.0 MT Jumbo bags"
          },
          {
            "item": "Transport (Bagged)",
            "value": "20' Container (Approx. 27 MT)"
          },
          {
            "item": "Transport (Bulk)",
            "value": "Bulk vessel (Cement carrier)"
          }
        ]
      }
    ]
  },
  {
    "slug": "sand",
    "name": "Construction Sand (Washed)",
    "shortDescription": "Clean, washed silica sand used for concrete production, mortar, and other general construction applications.",
    "sector": "construction",
    "image": "/aspidus/construction.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Washed Silica Sand / Concrete Sand"
          },
          {
            "item": "Standard",
            "value": "ASTM C33 / BS 882"
          },
          {
            "item": "Fineness Modulus",
            "value": "2.3 - 3.1"
          },
          {
            "item": "Clay Lumps & Friable",
            "value": "< 3.0%"
          },
          {
            "item": "Chloride Content",
            "value": "Low (for concrete use)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Origin",
            "value": "Highly regional (e.g., UAE, Oman, Saudi Arabia, Vietnam)"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Bulk"
          },
          {
            "item": "Transport",
            "value": "Bulk carrier vessel or local truck delivery"
          }
        ]
      }
    ]
  },
  {
    "slug": "gravel",
    "name": "Gravel / Aggregates",
    "shortDescription": "Crushed stone and gravel (coarse aggregates) used as a primary component in concrete and for road base.",
    "sector": "construction",
    "image": "/aspidus/construction.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Crushed Stone (Gabbro, Limestone)"
          },
          {
            "item": "Standard",
            "value": "ASTM C33 / BS 882"
          },
          {
            "item": "Size",
            "value": "Commonly 10mm, 20mm, 40mm"
          },
          {
            "item": "LA Abrasion Value",
            "value": "< 40%"
          },
          {
            "item": "Water Absorption",
            "value": "< 2%"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Origin",
            "value": "Highly regional (e.g., UAE, Oman, local quarries)"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Bulk"
          },
          {
            "item": "Transport",
            "value": "Bulk carrier vessel or local truck delivery"
          }
        ]
      }
    ]
  },
  {
    "slug": "mineral-wool",
    "name": "Mineral Wool Insulation",
    "shortDescription": "Rock wool (stone wool) insulation boards and batts, providing high-performance thermal, acoustic, and fire insulation.",
    "sector": "construction",
    "image": "/aspidus/construction.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Rock Wool (Stone Wool)"
          },
          {
            "item": "Density",
            "value": "40 kg/m³ to 150 kg/m³"
          },
          {
            "item": "Thickness",
            "value": "50mm, 75mm, 100mm"
          },
          {
            "item": "Thermal Conductivity",
            "value": "Approx. 0.034 - 0.039 W/m·K"
          },
          {
            "item": "Fire Rating",
            "value": "Class A1 (Non-combustible)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "EU (Germany, Poland), Turkey, Middle East"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Compressed and wrapped in PE bags, palletized"
          },
          {
            "item": "Transport",
            "value": "40' HQ Container"
          }
        ]
      }
    ]
  },
  {
    "slug": "steel-beams",
    "name": "Structural Steel Beams",
    "shortDescription": "Hot-rolled structural steel sections (beams) used in construction and engineering projects.",
    "sector": "construction",
    "image": "/aspidus/construction.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Profiles",
            "value": "IPE (European), HEA/HEB (European), UB/UC (British)"
          },
          {
            "item": "Standard",
            "value": "EN 10025, ASTM A36, ASTM A992"
          },
          {
            "item": "Grade",
            "value": "S275JR, S355JR"
          },
          {
            "item": "Length",
            "value": "Standard 12 meters"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Turkey, China, EU (Spain, Germany), South Korea"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Bundles (2-5 MT)"
          },
          {
            "item": "Transport",
            "value": "Bulk vessel or 40' Containers (for smaller profiles)"
          }
        ]
      }
    ]
  },
  {
    "slug": "rebars",
    "name": "Steel Rebars (Construction)",
    "shortDescription": "Hot-rolled deformed steel reinforcement bars used for concrete reinforcement in construction.",
    "sector": "construction",
    "image": "/aspidus/construction.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Standard",
            "value": "ASTM A615 (Grade 60), BS 4449 (B500B), EN 10080"
          },
          {
            "item": "Diameter",
            "value": "8mm - 40mm"
          },
          {
            "item": "Length",
            "value": "Standard 12 meters (6m available)"
          },
          {
            "item": "Yield Strength (Gr 60)",
            "value": "420 MPa Min (60,000 psi)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Turkey, Vietnam, India, Brazil, EU (Italy, Spain)"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Bundles of 2-5 MT, tagged"
          },
          {
            "item": "Transport",
            "value": "Bulk vessel (Handysize) or 20' Containers (for <12m lengths)"
          }
        ]
      }
    ]
  },
  {
    "slug": "pipes",
    "name": "Steel Pipes (Welded)",
    "shortDescription": "Carbon steel pipes (ERW/HFW) used for structural applications, fencing, and fluid conveyance.",
    "sector": "construction",
    "image": "/aspidus/construction.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Standard",
            "value": "ASTM A53 (Grade A, B), API 5L (Grade B, X42)"
          },
          {
            "item": "Type",
            "value": "ERW (Electric Resistance Welded)"
          },
          {
            "item": "Shape",
            "value": "Round, Square (SHS), Rectangular (RHS)"
          },
          {
            "item": "Finish",
            "value": "Black (self-colored) or Galvanized (HDG)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Turkey, China, India, South Korea"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Bundles, hexagonal, wrapped"
          },
          {
            "item": "Transport",
            "value": "Bulk vessel or 20'/40' Containers"
          }
        ]
      }
    ]
  },
  {
    "slug": "tiles",
    "name": "Porcelain Tiles (60x60)",
    "shortDescription": "High-quality glazed porcelain tiles, durable and suitable for residential and commercial flooring.",
    "sector": "construction",
    "image": "/aspidus/construction.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Glazed Porcelain, Rectified Edge"
          },
          {
            "item": "Standard",
            "value": "ISO 13006 / EN 14411 (Group BIa)"
          },
          {
            "item": "Size",
            "value": "600x600 mm (other sizes available)"
          },
          {
            "item": "Water Absorption",
            "value": "≤ 0.5%"
          },
          {
            "item": "PEI Rating (Abrasion)",
            "value": "Grade 4 (Heavy residential / Light commercial)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Spain, Italy, Turkey, India, Vietnam"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Cartons on wooden pallets, shrink-wrapped"
          },
          {
            "item": "Loadability",
            "value": "Approx. 25-27 MT per 20' container (palletized)"
          }
        ]
      }
    ]
  },
  {
    "slug": "drywall",
    "name": "Gypsum Board (Drywall)",
    "shortDescription": "Standard gypsum plasterboard for interior walls and ceilings, offering fast and efficient installation.",
    "sector": "construction",
    "image": "/aspidus/construction.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Standard (Regular) or Moisture-Resistant (MR)"
          },
          {
            "item": "Standard",
            "value": "ASTM C1396 / EN 520"
          },
          {
            "item": "Thickness",
            "value": "12.5 mm (Standard) / 9.5 mm"
          },
          {
            "item": "Size",
            "value": "1200 x 2400 mm (or 4'x8')"
          },
          {
            "item": "Edge",
            "value": "Tapered Edge (TE)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Turkey, EU, Thailand, Middle East (KSA, UAE)"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Stacked on pallets, edge-protected"
          },
          {
            "item": "Transport",
            "value": "20' or 40' Containers"
          }
        ]
      }
    ]
  },
  {
    "slug": "cotton",
    "name": "Raw Cotton Bales",
    "shortDescription": "High-grade raw ginned cotton bales, graded by staple length, strength (Gpt), and micronaire for spinning mills.",
    "sector": "textiles",
    "image": "/aspidus/textiles.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Grade (US)",
            "value": "SGM (Strict Good Middling) 1-1/8\" (Staple 36)"
          },
          {
            "item": "Grade (Brazil)",
            "value": "Middling 1-1/8\""
          },
          {
            "item": "Strength (Gpt)",
            "value": "29 Gpt Min"
          },
          {
            "item": "Micronaire (Mic)",
            "value": "3.8 - 4.9 NCL"
          },
          {
            "item": "Moisture",
            "value": "8.5% Max"
          },
          {
            "item": "Trash",
            "value": "< 3.5%"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "USA, Brazil, India, Australia, Pakistan, Benin, Ivory Coast"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Standard high-density pressed bales"
          },
          {
            "item": "Bale Weight",
            "value": "Approx. 220-250 kg"
          },
          {
            "item": "Loadability",
            "value": "Approx. 25-26 MT per 40' HQ container"
          }
        ]
      }
    ]
  },
  {
    "slug": "wool",
    "name": "Scoured Wool (Merino)",
    "shortDescription": "High-quality scoured (cleaned) Merino wool, graded by micron, ready for spinning and textile production.",
    "sector": "textiles",
    "image": "/aspidus/textiles.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Merino Wool, Scoured"
          },
          {
            "item": "Micron",
            "value": "19.5 mic, 20.5 mic, 22.5 mic (common grades)"
          },
          {
            "item": "Staple Length",
            "value": "75mm - 90mm"
          },
          {
            "item": "Vegetable Matter (VM)",
            "value": "< 1.5%"
          },
          {
            "item": "Grease",
            "value": "< 1.5%"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Australia, New Zealand, South Africa, Argentina"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "High-density pressed bales (approx. 180-200 kg)"
          },
          {
            "item": "Loadability",
            "value": "Approx. 24-25 MT per 40' HQ container"
          }
        ]
      }
    ]
  },
  {
    "slug": "polyester",
    "name": "Polyester Staple Fiber (PSF)",
    "shortDescription": "Virgin-grade Polyester Staple Fiber (PSF) used for spinning, non-woven fabrics, and filling applications.",
    "sector": "textiles",
    "image": "/aspidus/textiles.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Virgin, Semi-Dull, Raw White"
          },
          {
            "item": "Denier",
            "value": "1.2D, 1.4D, 1.5D"
          },
          {
            "item": "Cut Length",
            "value": "32mm, 38mm, 51mm"
          },
          {
            "item": "Tenacity",
            "value": "> 6.0 g/d"
          },
          {
            "item": "Application",
            "value": "Ring Spinning, Non-Woven, Filling"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "China, India, South Korea, Taiwan, Turkey, Vietnam"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Pressed bales (approx. 300-350 kg)"
          },
          {
            "item": "Loadability",
            "value": "Approx. 24-25 MT per 40' HQ container"
          }
        ]
      }
    ]
  },
  {
    "slug": "cotton-yarn",
    "name": "Cotton Yarn (Combed)",
    "shortDescription": "Premium 100% cotton combed ring-spun yarn for high-quality knitting and weaving applications.",
    "sector": "textiles",
    "image": "/aspidus/textiles.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "100% Cotton, Ring Spun, Combed"
          },
          {
            "item": "Count",
            "value": "Ne 30/1 (Standard)"
          },
          {
            "item": "Other Counts",
            "value": "Ne 20/1, Ne 24/1, Ne 40/1"
          },
          {
            "item": "Application",
            "value": "Knitting"
          },
          {
            "item": "Grade",
            "value": "Uster 5-10% (Top Grade)"
          },
          {
            "item": "Strength (CSP)",
            "value": "2500+"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "India, Vietnam, Pakistan, Turkey, Uzbekistan"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "1.89 kg cones, 24 cones per carton (45.36 kg)"
          },
          {
            "item": "Loadability",
            "value": "Approx. 24.5 MT per 40' HQ container"
          }
        ]
      }
    ]
  },
  {
    "slug": "polyester-yarn",
    "name": "Polyester Yarn (DTY)",
    "shortDescription": "Polyester Drawn Textured Yarn (DTY) used widely in weaving and knitting for apparel and home textiles.",
    "sector": "textiles",
    "image": "/aspidus/textiles.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "DTY (Drawn Textured Yarn)"
          },
          {
            "item": "Specification",
            "value": "150D/48F (150 Denier / 48 Filaments)"
          },
          {
            "item": "Other Specs",
            "value": "75D/36F, 300D/96F"
          },
          {
            "item": "Luster",
            "value": "Semi-Dull (SD)"
          },
          {
            "item": "Intermingle",
            "value": "NIM (Non-Intermingled) or SIM (Slightly)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "China, India, Taiwan, South Korea, Turkey"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Approx. 6kg cones, palletized cartons"
          },
          {
            "item": "Loadability",
            "value": "Approx. 24 MT per 40' HQ container"
          }
        ]
      }
    ]
  },
  {
    "slug": "denim",
    "name": "Denim Fabric",
    "shortDescription": "Durable denim fabric for apparel, available in various weights and compositions (100% Cotton or Stretch).",
    "sector": "textiles",
    "image": "/aspidus/textiles.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Composition",
            "value": "98% Cotton / 2% Spandex (Stretch)"
          },
          {
            "item": "Alt. Composition",
            "value": "100% Cotton (Rigid)"
          },
          {
            "item": "Weave",
            "value": "3/1 Twill"
          },
          {
            "item": "Weight",
            "value": "10 oz. - 14.5 oz. (per square yard)"
          },
          {
            "item": "Width",
            "value": "58\" - 62\" (inches)"
          },
          {
            "item": "Dye",
            "value": "Indigo Dyed"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Turkey, Pakistan, India, Bangladesh, China"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Rolls (approx. 50-100 meters per roll)"
          },
          {
            "item": "Transport",
            "value": "20' or 40' Container"
          }
        ]
      }
    ]
  },
  {
    "slug": "urea",
    "name": "Urea 46% N (Granular)",
    "shortDescription": "High-quality granular urea with 46% nitrogen content, the most common nitrogen fertilizer.",
    "sector": "fertilizers",
    "image": "/aspidus/fertilizers.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Nitrogen (N)",
            "value": "46.0% Min"
          },
          {
            "item": "Biuret",
            "value": "1.0% Max"
          },
          {
            "item": "Moisture",
            "value": "0.5% Max"
          },
          {
            "item": "Format",
            "value": "Granular (2-4mm)"
          },
          {
            "item": "Alt. Format",
            "value": "Prilled (1-2mm)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Middle East (Oman, Saudi Arabia, Qatar, UAE), North Africa (Algeria, Egypt), China"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "50 kg bags or 1 MT Jumbo bags"
          },
          {
            "item": "Transport",
            "value": "Bulk vessel or 20' Containers (Approx. 25-27 MT)"
          }
        ]
      }
    ]
  },
  {
    "slug": "ammonium-sulfate",
    "name": "Ammonium Sulfate (AS)",
    "shortDescription": "A sulfur-rich fertilizer, providing 21% nitrogen and 24% sulfur, ideal for alkaline soils.",
    "sector": "fertilizers",
    "image": "/aspidus/fertilizers.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Nitrogen (N)",
            "value": "21.0% Min"
          },
          {
            "item": "Sulfur (S)",
            "value": "24.0% Min"
          },
          {
            "item": "Moisture",
            "value": "0.3% Max"
          },
          {
            "item": "Format",
            "value": "Crystalline (Caprolactam Grade) or Granular"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "China, South Korea, EU (Belgium, Germany)"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "50 kg bags or 1 MT Jumbo bags"
          },
          {
            "item": "Transport",
            "value": "Bulk vessel or 20' Containers"
          }
        ]
      }
    ]
  },
  {
    "slug": "dap",
    "name": "DAP (18-46-0)",
    "shortDescription": "Diammonium Phosphate, the world's most widely used phosphorus fertilizer, with high nutrient content.",
    "sector": "fertilizers",
    "image": "/aspidus/fertilizers.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Formula",
            "value": "18-46-0"
          },
          {
            "item": "Total Nitrogen (N)",
            "value": "18.0% Min"
          },
          {
            "item": "Total Phosphate (P2O5)",
            "value": "46.0% Min"
          },
          {
            "item": "Moisture",
            "value": "1.5% Max"
          },
          {
            "item": "Format",
            "value": "Granular"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "China, USA, Saudi Arabia, Morocco"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "50 kg bags or 1 MT Jumbo bags"
          },
          {
            "item": "Transport",
            "value": "Bulk vessel or 20' Containers"
          }
        ]
      }
    ]
  },
  {
    "slug": "map",
    "name": "MAP (11-52-0)",
    "shortDescription": "Monoammonium Phosphate, a high-phosphorus fertilizer used in early plant growth stages.",
    "sector": "fertilizers",
    "image": "/aspidus/fertilizers.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Formula",
            "value": "11-52-0"
          },
          {
            "item": "Total Nitrogen (N)",
            "value": "11.0% Min"
          },
          {
            "item": "Total Phosphate (P2O5)",
            "value": "52.0% Min"
          },
          {
            "item": "Moisture",
            "value": "1.0% Max"
          },
          {
            "item": "Format",
            "value": "Granular"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "USA, Morocco, Saudi Arabia"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "50 kg bags or 1 MT Jumbo bags"
          },
          {
            "item": "Transport",
            "value": "Bulk vessel or 20' Containers"
          }
        ]
      }
    ]
  },
  {
    "slug": "mop",
    "name": "MOP (Muriate of Potash)",
    "shortDescription": "Muriate of Potash (Potassium Chloride), the most common potassium source, providing 60% K2O.",
    "sector": "fertilizers",
    "image": "/aspidus/fertilizers.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Potassium Oxide (K2O)",
            "value": "60.0% Min"
          },
          {
            "item": "Moisture",
            "value": "0.5% Max"
          },
          {
            "item": "Format",
            "value": "Granular (Pink/White) or Standard (Red)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Canada, Jordan, Germany, Israel"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "50 kg bags or 1 MT Jumbo bags"
          },
          {
            "item": "Transport",
            "value": "Bulk vessel or 20' Containers"
          }
        ]
      }
    ]
  },
  {
    "slug": "sop",
    "name": "SOP (Sulphate of Potash)",
    "shortDescription": "Sulphate of Potash, a premium low-chloride potassium fertilizer ideal for sensitive crops like fruits and tobacco.",
    "sector": "fertilizers",
    "image": "/aspidus/fertilizers.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Potassium Oxide (K2O)",
            "value": "50.0% Min"
          },
          {
            "item": "Sulfur (S)",
            "value": "17.0% Min"
          },
          {
            "item": "Chloride (Cl)",
            "value": "1.0% Max (Premium Grade)"
          },
          {
            "item": "Format",
            "value": "Granular or Powder (Soluble)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Germany (K+S), Chile, China, USA"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "25 kg or 50 kg bags"
          },
          {
            "item": "Transport",
            "value": "20' Containers"
          }
        ]
      }
    ]
  },
  {
    "slug": "npk",
    "name": "NPK Complex Fertilizers",
    "shortDescription": "Compound NPK fertilizers providing balanced nutrition in a single granule, tailored to specific crop requirements.",
    "sector": "fertilizers",
    "image": "/aspidus/fertilizers.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Common Grades",
            "value": "15-15-15, 12-12-17+2MgO, 20-10-10"
          },
          {
            "item": "Nutrients",
            "value": "Total N, P2O5, and K2O content guaranteed"
          },
          {
            "item": "Format",
            "value": "Granular"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "EU (Yara, Borealis), Turkey, Morocco, Saudi Arabia"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "50 kg bags or 1 MT Jumbo bags"
          },
          {
            "item": "Transport",
            "value": "Bulk vessel or 20' Containers"
          }
        ]
      }
    ]
  },
  {
    "slug": "almonds",
    "name": "Almonds (Nonpareil)",
    "shortDescription": "Premium California Nonpareil almonds, shelled and graded by count, ideal for snacking and confectionery.",
    "sector": "nuts_dried_fruits",
    "image": "/aspidus/nuts_dried_fruits.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Variety",
            "value": "Nonpareil (Supreme)"
          },
          {
            "item": "Grade",
            "value": "U.S. Fancy"
          },
          {
            "item": "Size (Count/oz)",
            "value": "18/20, 20/22, 23/25, 27/30"
          },
          {
            "item": "Style",
            "value": "Shelled, Unroasted, Pasteurized"
          },
          {
            "item": "Crop Year",
            "value": "Current"
          },
          {
            "item": "Moisture",
            "value": "6% Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "USA (California), Australia, Spain"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "22.68 kg (50 lbs) vacuum-packed cartons"
          },
          {
            "item": "Loadability",
            "value": "Approx. 19-20 MT per 40' container"
          }
        ]
      }
    ]
  },
  {
    "slug": "walnuts",
    "name": "Walnuts (Chandler)",
    "shortDescription": "Chandler variety walnuts, known for their light color and high-quality kernels. Available as halves or in-shell.",
    "sector": "nuts_dried_fruits",
    "image": "/aspidus/nuts_dried_fruits.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Variety",
            "value": "Chandler"
          },
          {
            "item": "Style",
            "value": "Shelled (Halves & Pieces) or In-Shell (Jumbo)"
          },
          {
            "item": "Grade (Halves)",
            "value": "LHP (Light Halves & Pieces), 80% Halves"
          },
          {
            "item": "Color",
            "value": "Extra Light / Light"
          },
          {
            "item": "Crop Year",
            "value": "Current"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "USA (California), Chile, China"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging (Shelled)",
            "value": "10 kg or 12.5 kg vacuum-packed cartons"
          },
          {
            "item": "Packaging (In-Shell)",
            "value": "25 kg bags"
          },
          {
            "item": "Transport",
            "value": "20' or 40' Container"
          }
        ]
      }
    ]
  },
  {
    "slug": "cashews",
    "name": "Cashew Kernels (WW320)",
    "shortDescription": "White Wholes 320 (WW320) grade cashew kernels, a global standard for size and quality.",
    "sector": "nuts_dried_fruits",
    "image": "/aspidus/nuts_dried_fruits.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Grade",
            "value": "WW320 (White Wholes, 300-320 kernels/lb)"
          },
          {
            "item": "Alt. Grade",
            "value": "WW240 (Larger size)"
          },
          {
            "item": "Standard",
            "value": "AFI Standard"
          },
          {
            "item": "Moisture",
            "value": "5% Max"
          },
          {
            "item": "Broken",
            "value": "5% Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Processing Hubs",
            "value": "Vietnam, India"
          },
          {
            "item": "Raw Nut Origin",
            "value": "Ivory Coast, Nigeria, Ghana, Tanzania"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "22.68 kg (50 lbs) vacuum-packed, CO2-flushed flexi-pouches in cartons"
          },
          {
            "item": "Loadability",
            "value": "Approx. 15.876 MT per 20' container"
          }
        ]
      }
    ]
  },
  {
    "slug": "pistachios",
    "name": "Pistachios (In-Shell)",
    "shortDescription": "Roasted and salted in-shell pistachios, graded by size (count per ounce) and split percentage.",
    "sector": "nuts_dried_fruits",
    "image": "/aspidus/nuts_dried_fruits.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Variety",
            "value": "Kerman (USA), Fandoghi (Iran - *Note: Using Turkish source*)"
          },
          {
            "item": "Grade (US)",
            "value": "US Fancy"
          },
          {
            "item": "Size (Count/oz)",
            "value": "21/25 or 26/30"
          },
          {
            "item": "Closed Shell",
            "value": "< 4% Max"
          },
          {
            "item": "Style",
            "value": "Roasted, Salted, In-Shell"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "USA (California), Turkey (Gaziantep)"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "10 kg or 25 kg bags/cartons"
          },
          {
            "item": "Transport",
            "value": "20' or 40' Container"
          }
        ]
      }
    ]
  },
  {
    "slug": "hazelnuts",
    "name": "Hazelnut Kernels (Turkish)",
    "shortDescription": "Shelled, roasted, or natural hazelnut kernels from the Turkish Black Sea region, sized and graded.",
    "sector": "nuts_dried_fruits",
    "image": "/aspidus/nuts_dried_fruits.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Levant Quality (Giresun quality also available)"
          },
          {
            "item": "Style",
            "value": "Natural or Roasted Kernels"
          },
          {
            "item": "Size",
            "value": "11/13 mm, 13/15 mm"
          },
          {
            "item": "Moisture",
            "value": "6% Max"
          },
          {
            "item": "Purity",
            "value": "99.9% Min"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Turkey (Black Sea), Italy, Azerbaijan"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "25 kg vacuum bags in cartons or 50 kg jute bags"
          },
          {
            "item": "Transport",
            "value": "20' or 40' Container"
          }
        ]
      }
    ]
  },
  {
    "slug": "raisins",
    "name": "Raisins (Sultana)",
    "shortDescription": "Turkish Sultana raisins, Type 9, a standard for baking and confectionery. Also available as Thompson Seedless (USA).",
    "sector": "nuts_dried_fruits",
    "image": "/aspidus/nuts_dried_fruits.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Sultana (Type 9)"
          },
          {
            "item": "Alt. Type",
            "value": "Thompson Seedless (USA)"
          },
          {
            "item": "Size",
            "value": "Standard or Medium"
          },
          {
            "item": "Moisture",
            "value": "13% - 16%"
          },
          {
            "item": "Purity",
            "value": "99.5% Min"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Turkey (Aegean), USA (California), South Africa"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "10 kg or 12.5 kg cartons with poly liner"
          },
          {
            "item": "Loadability",
            "value": "Approx. 20-22 MT per 20' container"
          }
        ]
      }
    ]
  },
  {
    "slug": "apricots",
    "name": "Dried Apricots (Turkish)",
    "shortDescription": "Whole dried Turkish apricots from Malatya, graded by size (Jumbo, No. 1, etc.) and treated with SO2 or natural.",
    "sector": "nuts_dried_fruits",
    "image": "/aspidus/nuts_dried_fruits.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Whole, Pitted"
          },
          {
            "item": "Variety",
            "value": "Malatya"
          },
          {
            "item": "Size",
            "value": "Jumbo (60-80/kg), No. 1 (81-100/kg), No. 2 (101-120/kg)"
          },
          {
            "item": "SO2 Content",
            "value": "2000-3000 ppm (Standard) or <100 ppm (Natural)"
          },
          {
            "item": "Moisture",
            "value": "25% Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Turkey (Malatya)"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "5 kg or 12.5 kg cartons with poly liner"
          },
          {
            "item": "Loadability",
            "value": "Approx. 20-22 MT per 20' container"
          }
        ]
      }
    ]
  },
  {
    "slug": "dates",
    "name": "Dates (Medjool)",
    "shortDescription": "Premium Medjool dates, known for their large size, soft texture, and rich flavor.",
    "sector": "nuts_dried_fruits",
    "image": "/aspidus/nuts_dried_fruits.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Variety",
            "value": "Medjool (Medjoul)"
          },
          {
            "item": "Alt. Variety",
            "value": "Deglet Nour"
          },
          {
            "item": "Grade",
            "value": "Premium / Fancy"
          },
          {
            "item": "Size",
            "value": "Jumbo (18-23 g/pc), Large (15-18 g/pc)"
          },
          {
            "item": "Style",
            "value": "Whole, with pit"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Jordan, Israel, Palestine, USA (California), Morocco"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging (Retail)",
            "value": "500g, 1kg, 2kg boxes"
          },
          {
            "item": "Packaging (Bulk)",
            "value": "5 kg cartons"
          },
          {
            "item": "Transport",
            "value": "Reefer container"
          }
        ]
      }
    ]
  },
  {
    "slug": "figs",
    "name": "Dried Figs (Turkish Lerida)",
    "shortDescription": "Turkish dried figs (Lerida type), a popular format, graded by size and quality.",
    "sector": "nuts_dried_fruits",
    "image": "/aspidus/nuts_dried_fruits.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Lerida (manipulated into flat round shape)"
          },
          {
            "item": "Alt. Type",
            "value": "Natural (Garland)"
          },
          {
            "item": "Size",
            "value": "No. 1 (Largest) to No. 10 (Smallest)"
          },
          {
            "item": "Moisture",
            "value": "22% - 26%"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Turkey (Aydin)"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "1kg, 5kg, 10kg cartons"
          },
          {
            "item": "Transport",
            "value": "20' Container"
          }
        ]
      }
    ]
  },
  {
    "slug": "sunflower-seeds",
    "name": "Sunflower Seeds (Hulled)",
    "shortDescription": "Hulled sunflower seed kernels (bakery grade), high purity, for baking, confectionery, and oil production.",
    "sector": "nuts_dried_fruits",
    "image": "/aspidus/nuts_dried_fruits.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Hulled Kernels (Bakery Grade)"
          },
          {
            "item": "Purity",
            "value": "99.9% Min"
          },
          {
            "item": "Moisture",
            "value": "8% Max"
          },
          {
            "item": "Broken",
            "value": "5% Max"
          },
          {
            "item": "Oil Content",
            "value": "48% Min (for crushing grade)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Bulgaria, Romania, Moldova, Argentina"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "25 kg paper bags"
          },
          {
            "item": "Loadability",
            "value": "Approx. 22-24 MT per 20' container"
          }
        ]
      }
    ]
  },
  {
    "slug": "sesame-seeds",
    "name": "Sesame Seeds (Natural)",
    "shortDescription": "Natural unhulled sesame seeds, 99.9% purity, widely used for oil extraction (tahini) and baking.",
    "sector": "nuts_dried_fruits",
    "image": "/aspidus/nuts_dried_fruits.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Natural, Unhulled"
          },
          {
            "item": "Purity",
            "value": "99.90% Min"
          },
          {
            "item": "Moisture",
            "value": "6% Max"
          },
          {
            "item": "Oil Content",
            "value": "48% - 52% Min"
          },
          {
            "item": "FFA",
            "value": "2% Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Sudan, Ethiopia, Nigeria, Tanzania, India"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "25 kg or 50 kg PP bags"
          },
          {
            "item": "Loadability",
            "value": "Approx. 19-20 MT per 20' container"
          }
        ]
      }
    ]
  },
  {
    "slug": "cocoa-butter",
    "name": "Cocoa Butter (Natural & Deodorized)",
    "shortDescription": "Premium natural or deodorized cocoa butter, ideal for chocolate manufacturing, confectionery, and cosmetic applications.",
    "sector": "cocoa_coffee",
    "image": "/aspidus/cacao_coffee.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type 1",
            "value": "Natural Cocoa Butter (Golden color, strong aroma)"
          },
          {
            "item": "Type 2",
            "value": "Deodorized Cocoa Butter (Light color, neutral aroma)"
          },
          {
            "item": "Free Fatty Acids (FFA)",
            "value": "1.75% Max"
          },
          {
            "item": "Moisture & Volatiles",
            "value": "0.2% Max"
          },
          {
            "item": "Melting Point",
            "value": "32-36°C (Slightly variable by type)"
          },
          {
            "item": "Saponification Value",
            "value": "190-200 mg KOH/g"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Ivory Coast, Ghana, Ecuador, Netherlands, Germany"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "25 kg cartons with PE liners (block form)"
          },
          {
            "item": "Alt. Packaging",
            "value": "ISO Tanktainers (liquid bulk)"
          },
          {
            "item": "Loadability",
            "value": "Approx. 20-25 MT per 20' FCL"
          }
        ]
      },
      {
        "titleKey": "certificates",
        "type": "text",
        "content": "ISO, HACCP, Fair Trade, Halal, Kosher. All relevant certificates are provided with shipment."
      }
    ]
  },
  {
    "slug": "cocoa-mass",
    "name": "Cocoa Mass (Cocoa Liquor)",
    "shortDescription": "Pure, unsweetened 100% cocoa, produced from ground cocoa nibs. The base ingredient for all chocolate.",
    "sector": "cocoa_coffee",
    "image": "/aspidus/cacao_coffee.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Natural or Alkalized"
          },
          {
            "item": "Fat Content",
            "value": "50-58% (Standard)"
          },
          {
            "item": "Fineness",
            "value": "99.5% min through 75-micron sieve"
          },
          {
            "item": "Moisture",
            "value": "2.0% Max"
          },
          {
            "item": "pH (Natural)",
            "value": "5.2 - 5.8"
          },
          {
            "item": "pH (Alkalized)",
            "value": "6.8 - 7.5"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Ivory Coast, Ghana, Ecuador, Netherlands"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "25 kg cartons (blocks or wafers/chips)"
          },
          {
            "item": "Alt. Packaging",
            "value": "ISO Tanktainers (liquid bulk)"
          },
          {
            "item": "Loadability",
            "value": "Approx. 20-25 MT per 20' FCL"
          }
        ]
      }
    ]
  },
  {
    "slug": "cocoa-powder",
    "name": "Cocoa Powder (Alkalized & Natural)",
    "shortDescription": "High-quality cocoa powder, available in various fat contents and pH levels for baking, beverages, and industrial use.",
    "sector": "cocoa_coffee",
    "image": "/aspidus/cacao_coffee.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type 1 (Natural)",
            "value": "Fat: 10-12%, pH: 5.0-6.0 (Light brown, acidic)"
          },
          {
            "item": "Type 2 (Alkalized)",
            "value": "Fat: 10-12%, pH: 6.8-7.2 (Medium brown, 'Dutched')"
          },
          {
            "item": "Type 3 (Alkalized High Fat)",
            "value": "Fat: 20-22%, pH: 7.2-7.8 (Dark red/black, rich flavor)"
          },
          {
            "item": "Fineness",
            "value": "99.0% - 99.5% min through 75-micron sieve"
          },
          {
            "item": "Moisture",
            "value": "5.0% Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Netherlands, Germany, Spain, Ivory Coast, Ghana"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "25 kg multi-ply paper bags with PE liner"
          },
          {
            "item": "Loadability (10-12%)",
            "value": "Approx. 15-17 MT per 20' container"
          },
          {
            "item": "Loadability (20-22%)",
            "value": "Approx. 12-14 MT per 20' container"
          }
        ]
      }
    ]
  },
  {
    "slug": "roasted-beans",
    "name": "Green Coffee Beans (Arabica/Robusta)",
    "shortDescription": "Green coffee beans, graded and sourced for roasting, including high-quality Arabica and robust Robusta.",
    "sector": "cocoa_coffee",
    "image": "/aspidus/cacao_coffee.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type 1: Arabica",
            "value": "Washed/Natural. Grades: Brazil NY 2/3, Colombia Supremo (Sc. 17/18), Ethiopia Yirgacheffe (G2)"
          },
          {
            "item": "Type 2: Robusta",
            "value": "Washed/Natural. Grades: Vietnam G1 (Sc. 18), Uganda Screen 18"
          },
          {
            "item": "Moisture",
            "value": "12.5% Max"
          },
          {
            "item": "Defects",
            "value": "Per grading standard (e.g., <8 defects for NY 2)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Arabica Origin",
            "value": "Brazil, Colombia, Ethiopia"
          },
          {
            "item": "Robusta Origin",
            "value": "Vietnam, Brazil, Indonesia"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "60 kg Jute bags or 69 kg (Colombia)"
          },
          {
            "item": "Loadability",
            "value": "Approx. 19.2 MT per 20' container"
          }
        ]
      },
      {
        "titleKey": "certificates",
        "type": "text",
        "content": "ICO Certificate of Origin, Fair Trade, Rainforest Alliance (available upon request)."
      }
    ]
  },
  {
    "slug": "instant-coffee",
    "name": "Instant Coffee (Spray & Freeze Dried)",
    "shortDescription": "Soluble coffee available as spray-dried agglomerated or premium freeze-dried, made from Arabica or Robusta beans.",
    "sector": "cocoa_coffee",
    "image": "/aspidus/cacao_coffee.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type 1: Spray Dried",
            "value": "Agglomerated or Powder. Cost-effective, fast processing."
          },
          {
            "item": "Type 2: Freeze Dried",
            "value": "Granules. Preserves more aroma and flavor (premium)."
          },
          {
            "item": "Bean Source",
            "value": "100% Robusta, 100% Arabica, or Blends"
          },
          {
            "item": "Moisture",
            "value": "3.5% - 5.0% Max"
          },
          {
            "item": "Caffeine Content",
            "value": "Varies (e.g., 2-4%)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Brazil, Vietnam, Colombia, India, Germany, Netherlands"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "25 kg or 30 kg cartons with poly liner"
          },
          {
            "item": "Transport",
            "value": "20' or 40' Container"
          },
          {
            "item": "Loadability",
            "value": "Approx. 11 MT (40' HQ), 5 MT (20')"
          }
        ]
      }
    ]
  },
  {
    "slug": "black-pepper",
    "name": "Black Pepper (Whole)",
    "shortDescription": "Whole dried black pepper, graded by density (g/l), sourced from primary producers.",
    "sector": "spices",
    "image": "/aspidus/spices.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Quality",
            "value": "550 g/l (FAQ - Fair Average Quality)"
          },
          {
            "item": "Alt. Quality",
            "value": "500 g/l"
          },
          {
            "item": "Alt. Quality (High)",
            "value": "570 g/l (ASTA)"
          },
          {
            "item": "Moisture",
            "value": "12.5% Max"
          },
          {
            "item": "Admixture",
            "value": "1.0% Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Vietnam, Brazil, Indonesia"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "25 kg or 50 kg new PP bags"
          },
          {
            "item": "Loadability",
            "value": "Approx. 15 MT per 20' container"
          }
        ]
      }
    ]
  },
  {
    "slug": "cinnamon",
    "name": "Cinnamon (Cassia & Ceylon)",
    "shortDescription": "Offering both main types of cinnamon: pungent, strong Cassia and sweet, delicate Ceylon ('True Cinnamon').",
    "sector": "spices",
    "image": "/aspidus/spices.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type 1: Cassia",
            "value": "Strong flavor, hard bark. Common grades: Split, Broken."
          },
          {
            "item": "Type 2: Ceylon",
            "value": "Subtle flavor, soft bark. Common grades: Alba, C5, C4."
          },
          {
            "item": "Moisture",
            "value": "12% - 14% Max"
          },
          {
            "item": "Oil Content (Cassia)",
            "value": "2.5% - 4.0%"
          },
          {
            "item": "Oil Content (Ceylon)",
            "value": "1.0% - 2.5%"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Cassia Origin",
            "value": "Vietnam, Indonesia, China"
          },
          {
            "item": "Ceylon Origin",
            "value": "Sri Lanka, Madagascar"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "25 kg cartons (sticks) or 50 kg bales (broken)"
          },
          {
            "item": "Transport",
            "value": "20' or 40' Container"
          }
        ]
      }
    ]
  },
  {
    "slug": "cumin",
    "name": "Cumin Seeds (99%)",
    "shortDescription": "Whole dried cumin seeds, machine-cleaned to high purity standards for food processing and export.",
    "sector": "spices",
    "image": "/aspidus/spices.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Grade",
            "value": "99% Purity (Singapore Grade)"
          },
          {
            "item": "Alt. Grade",
            "value": "99.5% (Europe Grade)"
          },
          {
            "item": "Moisture",
            "value": "9% Max"
          },
          {
            "item": "Admixture",
            "value": "1% Max (for 99% Grade)"
          },
          {
            "item": "Flavor",
            "value": "Aromatic, free from musty odors"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "India (Gujarat), Turkey, Syria"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "25 kg or 50 kg PP bags"
          },
          {
            "item": "Loadability",
            "value": "Approx. 14 MT per 20' container"
          }
        ]
      }
    ]
  },
  {
    "slug": "turmeric",
    "name": "Turmeric Fingers (Polished)",
    "shortDescription": "Dried whole turmeric fingers, graded by curcumin content, available in polished or unpolished formats.",
    "sector": "spices",
    "image": "/aspidus/spices.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Fingers (Whole)"
          },
          {
            "item": "Variety",
            "value": "e.g., Rajapuri, Erode"
          },
          {
            "item": "Curcumin Content",
            "value": "2.5% - 5.0% (Varies by grade)"
          },
          {
            "item": "Finish",
            "value": "Machine Polished or Unpolished"
          },
          {
            "item": "Moisture",
            "value": "10% Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "India (Sangli), Vietnam, Nigeria"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "25 kg or 50 kg Jute/PP bags"
          },
          {
            "item": "Loadability",
            "value": "Approx. 18 MT per 20' container"
          }
        ]
      }
    ]
  },
  {
    "slug": "cloves",
    "name": "Cloves (Hand Picked)",
    "shortDescription": "High-quality, hand-picked whole dried cloves, valued for their high oil content and strong aroma.",
    "sector": "spices",
    "image": "/aspidus/spices.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Grade",
            "value": "Hand Picked (Superior)"
          },
          {
            "item": "Alt. Grade",
            "value": "Lal Pari (FAQ Grade)"
          },
          {
            "item": "Moisture",
            "value": "12% Max"
          },
          {
            "item": "Admixture",
            "value": "1% Max"
          },
          {
            "item": "Stems",
            "value": "2% Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Indonesia, Madagascar, Tanzania (Zanzibar), Sri Lanka"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "25 kg or 50 kg Jute/PP bags"
          },
          {
            "item": "Loadability",
            "value": "Approx. 9-10 MT per 20' container"
          }
        ]
      }
    ]
  },
  {
    "slug": "oregano",
    "name": "Dried Oregano (Rubbed)",
    "shortDescription": "Dried, rubbed oregano leaves (Origanum Vulgare), primarily sourced from Turkey, graded by volatile oil content.",
    "sector": "spices",
    "image": "/aspidus/spices.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Rubbed Leaves"
          },
          {
            "item": "Volatile Oil",
            "value": "2.5% - 3.5% Min"
          },
          {
            "item": "Moisture",
            "value": "10% Max"
          },
          {
            "item": "Ash",
            "value": "8% Max"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Major Producers",
            "value": "Turkey (Aegean), Greece, Spain"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "10 kg or 25 kg paper bags or cartons"
          },
          {
            "item": "Loadability",
            "value": "Approx. 7-8 MT per 20' container"
          }
        ]
      }
    ]
  },
  {
    "slug": "vanilla-extract",
    "name": "Vanilla Extract (Bourbon)",
    "shortDescription": "Premium natural Bourbon vanilla extract (single-fold or multi-fold), sourced from Madagascar vanilla beans.",
    "sector": "spices",
    "image": "/aspidus/spices.webp",
    "tabs": [
      {
        "titleKey": "specification",
        "type": "table",
        "content": [
          {
            "item": "Type",
            "value": "Natural Bourbon Vanilla Extract"
          },
          {
            "item": "Strength",
            "value": "Single-Fold (1X) or Multi-Fold (e.g., 10X)"
          },
          {
            "item": "Standard",
            "value": "FDA Standard (35% Alcohol Min, 13.35 oz beans/gal)"
          },
          {
            "item": "Key Component",
            "value": "Vanillin (natural)"
          }
        ]
      },
      {
        "titleKey": "origin",
        "type": "table",
        "content": [
          {
            "item": "Primary Bean Origin",
            "value": "Madagascar (Bourbon), Indonesia"
          },
          {
            "item": "Processing",
            "value": "USA, France"
          }
        ]
      },
      {
        "titleKey": "packaging_logistics",
        "type": "table",
        "content": [
          {
            "item": "Packaging",
            "value": "Food-grade jerry cans, drums, or IBC totes"
          },
          {
            "item": "Transport",
            "value": "Standard or Reefer (for stability)"
          }
        ]
      }
    ]
  }
];
