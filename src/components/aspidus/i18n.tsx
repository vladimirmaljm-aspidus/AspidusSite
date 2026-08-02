"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";

export type Lang = "en" | "tr" | "ru" | "sr";

export const LANGUAGES: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "tr", label: "Türkçe", short: "TR" },
  { code: "ru", label: "Русский", short: "RU" },
  { code: "sr", label: "Srpski", short: "SR" },
];

type Dict = Record<string, string>;

/* ------------------------------------------------------------------ */
/*  Translation dictionaries                                          */
/* ------------------------------------------------------------------ */

const en: Dict = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.commodities": "Commodities",
  "nav.locations": "Locations",
  "nav.contact": "Contact",
  "nav.portal": "Client Portal",
  "nav.menu": "Menu",

  "hero.badge": "Global Commodity Trading",
  "hero.title1": "The global market",
  "hero.title2": "is our domain",
  "hero.desc":
    "Aspidus delivers unique expertise in global commodity markets, connecting resources with opportunities across continents since 2007.",
  "hero.cta1": "Explore Commodities",
  "hero.cta2": "Get in Touch",
  "hero.scroll": "Scroll to explore",
  "hero.est": "Established 2007",

  "marquee.label": "Trading across 11 sectors",

  "about.tag": "About Aspidus",
  "about.title": "Our Journey & Vision",
  "about.desc":
    "Established in 2007, Aspidus began with a vision to streamline global commodity flows. Today, we stand as a diversified trading powerhouse with a presence in key financial and logistical hubs worldwide. Our commitment to ethical practices, market intelligence, and robust risk management sets us apart.",
  "about.v1": "Global Reach: Operating across continents and markets.",
  "about.v2": "Expert Team: Seasoned professionals with deep market insights.",
  "about.v3": "Innovation: Embracing technology for efficient trading solutions.",
  "about.v4": "Sustainability: Committed to responsible and ethical sourcing.",
  "about.since": "In the business since",
  "about.years": "Years of trading excellence",

  "commodities.tag": "Our Portfolio",
  "commodities.title": "Trading",
  "commodities.titleAccent": "Commodities",
  "commodities.desc":
    "Aspidus specializes in a diverse portfolio of commodities, catering to global demand and offering comprehensive trading solutions.",
  "commodities.viewAll": "View All Commodities",
  "commodities.explore": "Explore sector",

  "stats.s1": "Annual Trade Volume (USD)",
  "stats.s2": "Commodity Sectors",
  "stats.s3": "Active Supply Chains",
  "stats.s4": "Hour Market Coverage",

  "locations.tag": "Where We Operate",
  "locations.title": "Our Global",
  "locations.titleAccent": "Locations",
  "locations.desc":
    "Aspidus operates through strategically located offices, each specializing in regional markets and specific commodities.",
  "locations.learnMore": "Learn More",
  "locations.partnership": "Explore Partnership Opportunities",
  "locations.dubai.desc":
    "Our Dubai office serves as the central hub for our Middle Eastern and Asian operations, specializing in energy and precious metals.",
  "locations.capetown.desc":
    "Our gateway to Africa, focusing on agricultural products, coal, and essential minerals from the African continent.",
  "locations.istanbul.desc":
    "Connecting Europe and Asia, our Istanbul office is a hub for industrial metals and natural resources.",

  "why.tag": "Your Advantage",
  "why.title": "Why Partner with",
  "why.titleAccent": "Aspidus",
  "why.c1.t": "Unique Expertise",
  "why.c1.d":
    "Benefit from our deep market knowledge and decades of experience in navigating complex commodity landscapes.",
  "why.c2.t": "Global Network",
  "why.c2.d":
    "Access a vast network of producers, suppliers, and buyers worldwide, ensuring optimal trading opportunities.",
  "why.c3.t": "Strategic Advantage",
  "why.c3.d":
    "Gain a competitive edge with our advanced market analytics and tailored risk management solutions.",

  "contact.tag": "Get in Touch",
  "contact.title": "Let's Build",
  "contact.titleAccent": "Together",
  "contact.desc":
    "Whether you are looking to source commodities or supply to global markets, our team is ready to facilitate your next transaction.",
  "contact.offices": "Global Offices",
  "contact.viewDetails": "View Details",
  "contact.sendTag": "Send a Message",
  "contact.sendTitle": "Contact",
  "contact.sendTitleAccent": "Us",
  "contact.sendDesc":
    "Select the nature of your inquiry to ensure your message reaches the right department.",
  "contact.inquiryType": "Nature of Inquiry *",
  "contact.inquiryPlaceholder": "Select Nature of Inquiry",
  "contact.buying": "I want to BUY Commodities",
  "contact.selling": "I want to SUPPLY/SELL to Aspidus",
  "contact.partnership": "Strategic Partnership / Logistics",
  "contact.career": "Careers & General Inquiries",
  "contact.name": "Full Name *",
  "contact.email": "Email Address *",
  "contact.emailError": "Please use a corporate email address.",
  "contact.company": "Company Name",
  "contact.message": "Message *",
  "contact.office": "Recipient Office *",
  "contact.officePlaceholder": "Select Office",
  "contact.send": "Send Inquiry",
  "contact.sending": "Processing...",
  "contact.successTitle": "Inquiry Received",
  "contact.successDesc": "Your inquiry has been routed to the relevant department.",
  "contact.errorTitle": "Submission Failed",
  "contact.errorDesc": "Please try again or contact us directly at info@aspidus.co",
  "contact.directTitle": "Direct Contact",
  "contact.directDesc": "Prefer email? Reach our team directly.",
  "contact.portalTitle": "Client Portal",
  "contact.portalDesc": "Existing partners can access secure documentation and live orders.",

  "footer.brand":
    "The name for Integrity. Connecting global commodity markets since 2007.",
  "footer.quickLinks": "Quick Links",
  "footer.ourLocations": "Our Locations",
  "footer.contact": "Contact",
  "footer.aboutUs": "About Us",
  "footer.globalPresence": "Global Presence",
  "footer.contactUs": "Contact Us",
  "footer.portal": "Client Portal",
  "footer.sendInquiry": "Send Inquiry",
  "footer.rights": "© 2025 Aspidus. All rights reserved.",
  "footer.privacy": "Privacy Policy",
  "footer.terms": "Terms of Service",
  "footer.cookie": "Cookie Policy",
  "footer.disclaimer": "Disclaimer",
  "footer.compliance": "Compliance",

  // Common
  "common.back": "Back",
  "common.backToHome": "Back to Home",
  "common.viewAll": "View All",
  "common.loading": "Loading",

  // Catalog
  "catalog.tag": "Commodity Catalog",
  "catalog.title": "Trading",
  "catalog.titleAccent": "Portfolio",
  "catalog.desc": "Explore our full range of commodities across 11 specialized sectors. Each product comes with detailed specifications, origin, logistics, and compliance data.",
  "catalog.searchPlaceholder": "Search commodities...",
  "catalog.allSectors": "All Sectors",
  "catalog.results": "products",
  "catalog.noResults": "No commodities match your search.",
  "catalog.viewDetail": "View Details",
  "catalog.showing": "Showing",
  "catalog.of": "of",
  "catalog.filterBy": "Filter by sector",

  // Product detail
  "product.overview": "Overview",
  "product.specification": "Specification",
  "product.origin": "Origin",
  "product.packaging": "Packaging & Logistics",
  "product.certificates": "Certificates & Compliance",
  "product.noData": "Detailed specifications are being updated. Please contact us for more information.",
  "product.inquire": "Inquire About This Product",
  "product.related": "Related Commodities",
  "product.shortDesc": "Description",
  "product.sector": "Sector",
  "product.notFound": "Product not found",
  "product.notFoundDesc": "The commodity you are looking for does not exist or has been moved.",
  "product.browseCatalog": "Browse Catalog",

  // Office detail
  "office.tag": "Office",
  "office.whyTitle": "Why",
  "office.specialties": "Our Specialties",
  "office.details": "Office Details",
  "office.address": "Address",
  "office.hours": "Working Hours",
  "office.contact": "Contact This Office",
  "office.overview": "Overview",
  "office.dubai.why1.t": "Global Connectivity & Infrastructure",
  "office.dubai.why1.d": "World-class logistics with state-of-the-art ports, airports, and free zones enabling efficient global trade flows.",
  "office.dubai.why2.t": "Favorable Business Environment",
  "office.dubai.why2.d": "Pro-business policies, robust regulatory framework, and zero-tax environment make Dubai attractive for international trade.",
  "office.dubai.why3.t": "Strategic DMCC Hub",
  "office.dubai.why3.d": "Operating under a DMCC license, our Dubai headquarters specializes in high-value commodities including Metal Ores, Coal, Sugar, and Raw Materials.",
  "office.capetown.why1.t": "Direct Access to African Resources",
  "office.capetown.why1.d": "Cape Town provides direct access to the vast natural resources and agricultural output of the African continent.",
  "office.capetown.why2.t": "Major Port & Trade Route",
  "office.capetown.why2.d": "South Africa's established infrastructure and major ports facilitate seamless export and import operations across the Atlantic and Indian Oceans.",
  "office.capetown.why3.t": "African Gateway",
  "office.capetown.why3.d": "Agricultural products including Sugar, Grains, Nuts & Dried Fruits, Coal, and essential Minerals sourced from across the African continent.",
  "office.istanbul.why1.t": "Intercontinental Nexus",
  "office.istanbul.why1.d": "Straddling two continents, Istanbul provides unparalleled access to both European and Asian markets with direct trade routes.",
  "office.istanbul.why2.t": "Growing Economic Powerhouse",
  "office.istanbul.why2.d": "Türkiye's dynamic economy and strategic government initiatives create ideal conditions for commodity trading and investment.",
  "office.istanbul.why3.t": "Industrial Base",
  "office.istanbul.why3.d": "Industrial metals, construction materials, agricultural products, and critical raw materials leveraging Türkiye's strong industrial base.",

  // Reporting
  "reporting.tag": "Compliance",
  "reporting.title": "Integrity",
  "reporting.titleAccent": "Reporting",
  "reporting.desc": "Aspidus DMCC is committed to the highest standards of ethical conduct. Use this secure channel to report suspected fraud, impersonation, or violations of our Code of Conduct.",
  "reporting.confidential": "Confidentiality Assurance: You may choose to remain anonymous. All reports are treated with strict confidentiality and are routed directly to our Compliance Department.",
  "reporting.incidentType": "What are you reporting? *",
  "reporting.incidentPlaceholder": "Select Incident Type...",
  "reporting.incident.fraud": "Fraud / Misrepresentation",
  "reporting.incident.impersonation": "Impersonation of Aspidus",
  "reporting.incident.bribery": "Bribery / Corruption",
  "reporting.incident.code": "Code of Conduct Violation",
  "reporting.incident.other": "Other",
  "reporting.anon": "I wish to remain anonymous",
  "reporting.yourName": "Your Name",
  "reporting.yourEmail": "Your Email",
  "reporting.details": "Incident Details *",
  "reporting.detailsPlaceholder": "Please provide dates, names of individuals involved, and a detailed description.",
  "reporting.evidence": "Evidence (Optional)",
  "reporting.submit": "Submit Secure Report",
  "reporting.successTitle": "Report Submitted",
  "reporting.successDesc": "Your report has been securely transmitted to the Aspidus Compliance Team. Thank you for helping us maintain our integrity.",
  "reporting.back": "Return to Main Site",

  // Ticker
  "ticker.label": "Market Snapshot — Indicative",
  "ticker.disclaimer": "Indicative reference values. Not a solicitation or offer.",

  // Operations / Network
  "operations.eyebrow": "Global Network",
  "operations.title": "Operating across",
  "operations.titleAccent": "three continents",
  "operations.desc": "Strategically positioned offices in Dubai, Cape Town and Istanbul connect producers and end-users across energy, metals, agriculture and soft commodities.",
  "operations.routes": "Active trade routes",
  "operations.hubs": "Regional hubs",

  // Leadership
  "leadership.eyebrow": "Leadership",
  "leadership.title": "The people behind",
  "leadership.titleAccent": "the name",
  "leadership.desc": "A multi-disciplinary executive team with decades of combined experience across trading, risk, compliance and operations.",

  // ESG
  "esg.eyebrow": "Responsibility",
  "esg.title": "Operating with",
  "esg.titleAccent": "integrity",
  "esg.desc": "Responsible sourcing, transparent counterparties and robust compliance are non-negotiable foundations of how we do business.",
  "esg.p1.t": "Responsible Sourcing",
  "esg.p1.d": "We trace origin, verify counterparty legitimacy and require internationally recognised certifications before any cargo moves.",
  "esg.p2.t": "Compliance & KYC",
  "esg.p2.d": "Full KYC/AML on every counterparty, sanctions screening, and a confidential integrity reporting channel for staff and partners.",
  "esg.p3.t": "Environmental Stewardship",
  "esg.p3.d": "Prioritising lower-carbon logistics routes, supporting certified sustainable supply chains and reducing operational footprint.",
  "esg.stats.certified": "Certified counterparty rate",
  "esg.stats.audit": "Annual compliance audits",
  "esg.stats.routes": "Verified trade routes",

  // News & Insights
  "news.eyebrow": "Insights",
  "news.title": "Market commentary &",
  "news.titleAccent": "company updates",
  "news.readMore": "Read more",
  "news.all": "All updates",

  // Approach (replaces "Why Partner" heading copy stays)
  "approach.eyebrow": "Our Approach",
  "approach.title": "Disciplined,",
  "approach.titleAccent": "principled trading",

  // Form: conditional sections
  "form.business.eyebrow": "Company Details",
  "form.business.companyName": "Company Name *",
  "form.business.position": "Your Position",
  "form.business.regNo": "Company Reg. No / Tax ID *",
  "form.business.website": "Company Website",
  "form.business.hqAddress": "Headquarters Address *",
  "form.vetting.eyebrow": "Supplier Qualification",
  "form.vetting.role": "I am a... *",
  "form.vetting.rolePlaceholder": "Select Your Role",
  "form.vetting.roleManufacturer": "Direct Manufacturer / Producer",
  "form.vetting.roleDistributor": "Authorized Distributor",
  "form.vetting.roleTrader": "Trading Company",
  "form.vetting.certsLabel": "Select certifications:",
  "form.vetting.otherCerts": "Other Certificates",
  "form.vetting.sourceProof": "Describe Source / Allocation Proof *",
  "form.vetting.resellerWarn": "* We do not work with long reseller chains.",
  "form.trade.eyebrow": "Trade Specifications",
  "form.trade.commodity": "Commodity Name",
  "form.trade.origin": "Origin (Country)",
  "form.trade.quantity": "Quantity (MT)",
  "form.trade.incoterms": "Incoterms",
  "form.trade.targetPrice": "Target Price ($/MT)",
  "form.verify.eyebrow": "Verification & Declaration",
  "form.verify.linkedin": "LinkedIn Profile URL",
  "form.verify.declarationTitle": "MANDATORY LEGAL DECLARATION",
  "form.verify.declarationBody": "I certify that I am an authorized representative of the entity named above. All data is verifiable and accurate.",
  "form.emailCorporateWarn": "Please use a corporate email address.",
};

const tr: Dict = {
  "nav.home": "Ana Sayfa",
  "nav.about": "Hakkımızda",
  "nav.commodities": "Emtialar",
  "nav.locations": "Konumlar",
  "nav.contact": "İletişim",
  "nav.portal": "Müşteri Portalı",
  "nav.menu": "Menü",

  "hero.badge": "Küresel Emtia Ticareti",
  "hero.title1": "Küresel piyasa",
  "hero.title2": "bizim alanımızdır",
  "hero.desc":
    "Aspidus, 2007'den beri küresel emtia piyasalarında eşsiz uzmanlık sunarak kaynakları kıtalararası fırsatlarla birleştiriyor.",
  "hero.cta1": "Emtiaları Keşfet",
  "hero.cta2": "Bize Ulaşın",
  "hero.scroll": "Keşfetmek için kaydır",
  "hero.est": "2007'den beri",

  "marquee.label": "11 sektörde ticaret",

  "about.tag": "Aspidus Hakkında",
  "about.title": "Yolculuğumuz ve Vizyonumuz",
  "about.desc":
    "2007 yılında kurulan Aspidus, küresel emtia akışlarını düzenleme vizyonuyla yola çıktı. Bugün, dünya çapında önemli finansal ve lojistik merkezlerde varlık gösteren çeşitlendirilmiş bir ticaret gücü olarak duruyoruz. Etik uygulamalara, piyasa zekasına ve sağlam risk yönetimine bağlılığımız bizi farklı kılar.",
  "about.v1": "Küresel Erişim: Kıtalarda ve pazarlarda faaliyet gösteriyoruz.",
  "about.v2": "Uzman Ekip: Derin pazar bilgisine sahip deneyimli profesyoneller.",
  "about.v3": "İnovasyon: Verimli ticaret çözümleri için teknolojiyi benimsiyoruz.",
  "about.v4": "Sürdürülebilirlik: Sorumlu ve etik kaynak kullanımına bağlıyız.",
  "about.since": "İş hayatında",
  "about.years": "Yıllık ticaret mükemmelliği",

  "commodities.tag": "Portföyümüz",
  "commodities.title": "Emtia",
  "commodities.titleAccent": "Ticareti",
  "commodities.desc":
    "Aspidus, küresel talebi karşılayan çeşitli emtia portföyünde uzmanlaşmıştır ve kapsamlı ticaret çözümleri sunar.",
  "commodities.viewAll": "Tüm Emtiaları Gör",
  "commodities.explore": "Sektörü keşfet",

  "stats.s1": "Yıllık Ticaret Hacmi (USD)",
  "stats.s2": "Emtia Sektörü",
  "stats.s3": "Aktif Tedarik Zinciri",
  "stats.s4": "Saat Pazar Takibi",

  "locations.tag": "Nerede Faaliyet Gösteriyoruz",
  "locations.title": "Küresel",
  "locations.titleAccent": "Konumlarımız",
  "locations.desc":
    "Aspidus, stratejik konumlarda faaliyet gösteren ofislerle çalışır; her biri bölgesel pazarlarda ve belirli emtialarda uzmanlaşmıştır.",
  "locations.learnMore": "Daha Fazla",
  "locations.partnership": "Ortaklık Fırsatlarını Keşfedin",
  "locations.dubai.desc":
    "Dubai ofisimiz, Orta Doğu ve Asya operasyonlarımızın merkezi olarak hizmet vermektedir; enerji ve kıymetli metallerde uzmanlaşmıştır.",
  "locations.capetown.desc":
    "Afrika'ya açılan kapımız; tarım ürünleri, kömür ve Afrika kıtasından gelen temel minerallere odaklanıyor.",
  "locations.istanbul.desc":
    "Avrupa ve Asya'yı birleştiren İstanbul ofisimiz, endüstriyel metaller ve doğal kaynaklar için bir merkezdir.",

  "why.tag": "Avantajınız",
  "why.title": "Neden",
  "why.titleAccent": "Aspidus",
  "why.c1.t": "Benzersiz Uzmanlık",
  "why.c1.d":
    "Karmaşık emtia manzaralarında gezinme konusundaki derin pazar bilgimizden ve on yılların deneyiminden yararlanın.",
  "why.c2.t": "Küresel Ağ",
  "why.c2.d":
    "Dünya çapında geniş bir üretici, tedarikçi ve alıcı ağına erişin ve en iyi ticaret fırsatlarını yakalayın.",
  "why.c3.t": "Stratejik Avantaj",
  "why.c3.d":
    "Gelişmiş pazar analitiğimiz ve özel risk yönetimi çözümlerimizle rekabet avantajı elde edin.",

  "contact.tag": "İletişim",
  "contact.title": "Birlikte",
  "contact.titleAccent": "İnşa Edelim",
  "contact.desc":
    "İster emtia tedarik etmek ister küresel pazarlara arz etmek isteyin, ekibimiz bir sonraki işleminizi gerçekleştirmeye hazır.",
  "contact.offices": "Küresel Ofisler",
  "contact.viewDetails": "Detaylar",
  "contact.sendTag": "Mesaj Gönder",
  "contact.sendTitle": "Bize",
  "contact.sendTitleAccent": "Ulaşın",
  "contact.sendDesc":
    "Mesajınızın doğru departmana ulaşması için sorgulama niteliğinizi seçin.",
  "contact.inquiryType": "Sorgulama Niteliği *",
  "contact.inquiryPlaceholder": "Sorgulama Türünü Seçin",
  "contact.buying": "Emtia SATIN ALMAK istiyorum",
  "contact.selling": "Aspidus'a TEDARİK ETMEK istiyorum",
  "contact.partnership": "Stratejik Ortaklık / Lojistik",
  "contact.career": "Kariyer ve Genel Sorular",
  "contact.name": "Tam Adınız *",
  "contact.email": "E-posta Adresi *",
  "contact.emailError": "Lütfen kurumsal bir e-posta adresi kullanın.",
  "contact.company": "Şirket Adı",
  "contact.message": "Mesaj *",
  "contact.office": "Alıcı Ofis *",
  "contact.officePlaceholder": "Ofis Seçin",
  "contact.send": "Sorgu Gönder",
  "contact.sending": "Gönderiliyor...",
  "contact.successTitle": "Sorgu Alındı",
  "contact.successDesc": "Sorgunuz ilgili departmana yönlendirildi.",
  "contact.errorTitle": "Gönderim Başarısız",
  "contact.errorDesc": "Lütfen tekrar deneyin veya info@aspidus.co ile iletişime geçin.",
  "contact.directTitle": "Doğrudan İletişim",
  "contact.directDesc": "E-postayı mı tercih ediyorsunuz? Ekibimize doğrudan ulaşın.",
  "contact.portalTitle": "Müşteri Portalı",
  "contact.portalDesc": "Mevcut ortaklar güvenli belgelere ve canlı siparişlere erişebilir.",

  "footer.brand": "Dürüstlüğün adı. 2007'den beri küresel emtia piyasalarını birleştiriyoruz.",
  "footer.quickLinks": "Hızlı Bağlantılar",
  "footer.ourLocations": "Konumlarımız",
  "footer.contact": "İletişim",
  "footer.aboutUs": "Hakkımızda",
  "footer.globalPresence": "Küresel Varlık",
  "footer.contactUs": "Bize Ulaşın",
  "footer.portal": "Müşteri Portalı",
  "footer.sendInquiry": "Sorgu Gönder",
  "footer.rights": "© 2025 Aspidus. Tüm hakları saklıdır.",
  "footer.privacy": "Gizlilik Politikası",
  "footer.terms": "Hizmet Şartları",
  "footer.cookie": "Çerez Politikası",
  "footer.disclaimer": "Yasal Uyarı",
  "footer.compliance": "Uyum",

  "common.back": "Geri",
  "common.backToHome": "Ana Sayfaya Dön",
  "common.viewAll": "Tümünü Gör",
  "common.loading": "Yükleniyor",

  "catalog.tag": "Emtia Kataloğu",
  "catalog.title": "Ticaret",
  "catalog.titleAccent": "Portföyü",
  "catalog.desc": "11 uzmanlaşmış sektörde tüm emtia yelpazemizi keşfedin. Her ürün detaylı spesifikasyonlar, menşei, lojistik ve uyum verileriyle gelir.",
  "catalog.searchPlaceholder": "Emtia ara...",
  "catalog.allSectors": "Tüm Sektörler",
  "catalog.results": "ürün",
  "catalog.noResults": "Aramanızla eşleşen emtia bulunamadı.",
  "catalog.viewDetail": "Detayları Gör",
  "catalog.showing": "Gösterilen",
  "catalog.of": "/",
  "catalog.filterBy": "Sektöre göre filtrele",

  "product.overview": "Genel Bakış",
  "product.specification": "Spesifikasyon",
  "product.origin": "Menşei",
  "product.packaging": "Paketleme ve Lojistik",
  "product.certificates": "Sertifikalar ve Uyum",
  "product.noData": "Detaylı spesifikasyonlar güncellenmektedir. Daha fazla bilgi için lütfen bizimle iletişime geçin.",
  "product.inquire": "Bu Ürün Hakkında Sorgu",
  "product.related": "İlgili Emtialar",
  "product.shortDesc": "Açıklama",
  "product.sector": "Sektör",
  "product.notFound": "Ürün bulunamadı",
  "product.notFoundDesc": "Aradığınız emtia mevcut değil veya taşınmış.",
  "product.browseCatalog": "Kataloğu Gez",

  "office.tag": "Ofis",
  "office.whyTitle": "Neden",
  "office.specialties": "Uzmanlıklarımız",
  "office.details": "Ofis Detayları",
  "office.address": "Adres",
  "office.hours": "Çalışma Saatleri",
  "office.contact": "Bu Ofise Ulaşın",
  "office.overview": "Genel Bakış",
  "office.dubai.why1.t": "Küresel Bağlantı ve Altyapı",
  "office.dubai.why1.d": "Dünya standartlarında lojistik; modern limanlar, havalimanları ve serbest bölgelerle verimli küresel ticaret akışları.",
  "office.dubai.why2.t": "Elverişli İş Ortamı",
  "office.dubai.why2.d": "İş dostu politikalar, güçlü düzenleyici çerçeve ve sıfır vergi ortamı Dubai'yi uluslararası ticaret için çekici kılar.",
  "office.dubai.why3.t": "Stratejik DMCC Merkezi",
  "office.dubai.why3.d": "DMCC lisansı altında faaliyet gösteren Dubai merkez ofisimiz Metal Cevherleri, Kömür, Şeker ve Hammaddeler konusunda uzmandır.",
  "office.capetown.why1.t": "Afrika Kaynaklarına Doğrudan Erişim",
  "office.capetown.why1.d": "Cape Town, Afrika kıtasının geniş doğal kaynaklarına ve tarım ürünlerine doğrudan erişim sağlar.",
  "office.capetown.why2.t": "Büyük Liman ve Ticaret Rotası",
  "office.capetown.why2.d": "Güney Afrika'nın altyapısı ve büyük limanları Atlas ve Hint Okyanusu boyunca sorunsuz ihracat-işlemler sağlar.",
  "office.capetown.why3.t": "Afrika Kapısı",
  "office.capetown.why3.d": "Afrika kıtasından Şeker, Tahıllar, Kuruyemişler, Kömür ve temel Mineraller.",
  "office.istanbul.why1.t": "Kıtalararası Bağlantı",
  "office.istanbul.why1.d": "İki kıtayı birleştiren İstanbul, doğrudan ticaret rotalarıyla hem Avrupa hem de Asya pazarlarına erişim sağlar.",
  "office.istanbul.why2.t": "Büyüyen Ekonomik Güç",
  "office.istanbul.why2.d": "Türkiye'nin dinamik ekonomisi ve stratejik devlet girişimleri emtia ticareti için ideal koşullar yaratır.",
  "office.istanbul.why3.t": "Endüstriyel Temel",
  "office.istanbul.why3.d": "Türkiye'nin güçlü endüstriyel temelinden endüstriyel metaller, inşaat malzemeleri ve kritik hammaddeler.",

  "reporting.tag": "Uyum",
  "reporting.title": "Bütünlük",
  "reporting.titleAccent": "Raporlama",
  "reporting.desc": "Aspidus DMCC en yüksek etik standartlara bağlıdır. Şüpheli dolandırıcılık, kimlik hırsızlığı veya Davranış Kuralları ihlallerini bildirmek için bu güvenli kanalı kullanın.",
  "reporting.confidential": "Gizlilik Güvencesi: Anonim kalmayı seçebilirsiniz. Tüm raporlar katı gizlilikle ele alınır ve doğrudan Uyum Departmanımıza iletilir.",
  "reporting.incidentType": "Ne bildiriyorsunuz? *",
  "reporting.incidentPlaceholder": "Olay Türünü Seçin...",
  "reporting.incident.fraud": "Dolandırıcılık / Yanıltma",
  "reporting.incident.impersonation": "Aspidus Adına Sahtecilik",
  "reporting.incident.bribery": "Rüşvet / Yolsuzluk",
  "reporting.incident.code": "Davranış Kuralları İhlali",
  "reporting.incident.other": "Diğer",
  "reporting.anon": "Anonim kalmak istiyorum",
  "reporting.yourName": "Adınız",
  "reporting.yourEmail": "E-postanız",
  "reporting.details": "Olay Detayları *",
  "reporting.detailsPlaceholder": "Lütfen tarihleri, ilgili kişilerin adlarını ve detaylı bir açıklama sağlayın.",
  "reporting.evidence": "Kanıt (İsteğe Bağlı)",
  "reporting.submit": "Güvenli Rapor Gönder",
  "reporting.successTitle": "Rapor Gönderildi",
  "reporting.successDesc": "Raporunuz Aspidus Uyum Ekibine güvenle iletildi. Bütünlüğümüzü korumamıza yardımcı olduğunuz için teşekkür ederiz.",
  "reporting.back": "Ana Siteye Dön",
};

const ru: Dict = {
  "nav.home": "Главная",
  "nav.about": "О нас",
  "nav.commodities": "Товары",
  "nav.locations": "Офисы",
  "nav.contact": "Контакты",
  "nav.portal": "Портал",
  "nav.menu": "Меню",

  "hero.badge": "Мировая торговля товарами",
  "hero.title1": "Мировой рынок",
  "hero.title2": "наша сфера",
  "hero.desc":
    "С 2007 года Aspidus предлагает непревзойдённый опыт на мировых сырьевых рынках, соединяя ресурсы с возможностями на всех континентах.",
  "hero.cta1": "Изучить товары",
  "hero.cta2": "Связаться с нами",
  "hero.scroll": "Прокрутите для изучения",
  "hero.est": "С 2007 года",

  "marquee.label": "Торговля в 11 секторах",

  "about.tag": "О компании",
  "about.title": "Наш путь и видение",
  "about.desc":
    "Основанная в 2007 году, Aspidus начала с цели оптимизации мировых потоков сырья. Сегодня мы — диверсифицированная торговая компания с присутствием в ключевых центрах мира. Наша приверженность этике, рыночному интеллекту и надёжному управлению рисками выделяет нас.",
  "about.v1": "Глобальный охват: Работаем на всех континентах.",
  "about.v2": "Команда экспертов: Опытные профессионалы с глубоким знанием рынка.",
  "about.v3": "Инновации: Технологии для эффективных торговых решений.",
  "about.v4": "Устойчивость: Ответственный и этичный подход к поставкам.",
  "about.since": "В бизнесе с",
  "about.years": "Лет торгового совершенства",

  "commodities.tag": "Наш портфель",
  "commodities.title": "Торговля",
  "commodities.titleAccent": "товарами",
  "commodities.desc":
    "Aspidus специализируется на диверсифицированном портфеле сырьевых товаров, удовлетворяя глобальный спрос и предлагая комплексные торговые решения.",
  "commodities.viewAll": "Все товары",
  "commodities.explore": "Изучить сектор",

  "stats.s1": "Годовой объём торговли (USD)",
  "stats.s2": "Товарных секторов",
  "stats.s3": "Активных цепочек поставок",
  "stats.s4": "Часовое покрытие рынка",

  "locations.tag": "Где мы работаем",
  "locations.title": "Наши",
  "locations.titleAccent": "представительства",
  "locations.desc":
    "Aspidus работает через стратегически расположенные офисы, каждый из которых специализируется на региональных рынках и конкретных товарах.",
  "locations.learnMore": "Подробнее",
  "locations.partnership": "Возможности партнерства",
  "locations.dubai.desc":
    "Наш офис в Дубае — центр операций на Ближнем Востоке и в Азии, специализирующийся на энергии и драгоценных металлах.",
  "locations.capetown.desc":
    "Наш путь в Африку: сельскохозяйственные продукты, уголь и основные минералы африканского континента.",
  "locations.istanbul.desc":
    "Соединяя Европу и Азию, наш стамбульский офис — центр торговли промышленными металлами и природными ресурсами.",

  "why.tag": "Ваше преимущество",
  "why.title": "Почему",
  "why.titleAccent": "Aspidus",
  "why.c1.t": "Уникальный опыт",
  "why.c1.d":
    "Воспользуйтесь нашими глубокими знаниями рынка и многолетним опытом навигации в сложных сырьевых ландшафтах.",
  "why.c2.t": "Глобальная сеть",
  "why.c2.d":
    "Доступ к обширной сети производителей, поставщиков и покупателей по всему миру для лучших торговых возможностей.",
  "why.c3.t": "Стратегическое преимущество",
  "why.c3.d":
    "Конкурентное преимущество благодаря передовой аналитике рынка и индивидуальным решениям по управлению рисками.",

  "contact.tag": "Связаться с нами",
  "contact.title": "Создадим",
  "contact.titleAccent": "вместе",
  "contact.desc":
    "Если вы хотите закупать товары или поставлять их на мировые рынки, наша команда готова помочь со следующей сделкой.",
  "contact.offices": "Глобальные офисы",
  "contact.viewDetails": "Подробнее",
  "contact.sendTag": "Написать",
  "contact.sendTitle": "Напишите",
  "contact.sendTitleAccent": "нам",
  "contact.sendDesc":
    "Выберите тип запроса, чтобы ваше сообщение попало в нужный отдел.",
  "contact.inquiryType": "Тип запроса *",
  "contact.inquiryPlaceholder": "Выберите тип запроса",
  "contact.buying": "Я хочу КУПИТЬ товары",
  "contact.selling": "Я хочу ПОСТАВЛЯТЬ Aspidus",
  "contact.partnership": "Партнёрство / Логистика",
  "contact.career": "Карьера и общие вопросы",
  "contact.name": "Полное имя *",
  "contact.email": "Email *",
  "contact.emailError": "Используйте корпоративный email.",
  "contact.company": "Компания",
  "contact.message": "Сообщение *",
  "contact.office": "Офис *",
  "contact.officePlaceholder": "Выберите офис",
  "contact.send": "Отправить",
  "contact.sending": "Отправка...",
  "contact.successTitle": "Запрос получен",
  "contact.successDesc": "Ваш запрос направлен в отдел.",
  "contact.errorTitle": "Ошибка",
  "contact.errorDesc": "Попробуйте снова или напишите на info@aspidus.co",
  "contact.directTitle": "Прямой контакт",
  "contact.directDesc": "Предпочитаете email? Свяжитесь с нашей командой напрямую.",
  "contact.portalTitle": "Портал",
  "contact.portalDesc": "Действующие партнёры могут получить доступ к документации и заказам.",

  "footer.brand": "Имя для честности. Соединяем мировые сырьевые рынки с 2007 года.",
  "footer.quickLinks": "Ссылки",
  "footer.ourLocations": "Офисы",
  "footer.contact": "Контакты",
  "footer.aboutUs": "О нас",
  "footer.globalPresence": "Присутствие",
  "footer.contactUs": "Контакты",
  "footer.portal": "Портал",
  "footer.sendInquiry": "Отправить запрос",
  "footer.rights": "© 2025 Aspidus. Все права защищены.",
  "footer.privacy": "Конфиденциальность",
  "footer.terms": "Условия",
  "footer.cookie": "Cookies",
  "footer.disclaimer": "Отказ",
  "footer.compliance": "Комплаенс",

  "common.back": "Назад",
  "common.backToHome": "На главную",
  "common.viewAll": "Все",
  "common.loading": "Загрузка",

  "catalog.tag": "Каталог товаров",
  "catalog.title": "Торговый",
  "catalog.titleAccent": "портфель",
  "catalog.desc": "Изучите полный ассортимент товаров в 11 специализированных секторах. Каждый продукт содержит подробные спецификации, происхождение, логистику и данные о соответствии.",
  "catalog.searchPlaceholder": "Поиск товаров...",
  "catalog.allSectors": "Все сектора",
  "catalog.results": "товаров",
  "catalog.noResults": "Товары, соответствующие вашему запросу, не найдены.",
  "catalog.viewDetail": "Подробнее",
  "catalog.showing": "Показано",
  "catalog.of": "из",
  "catalog.filterBy": "Фильтр по сектору",

  "product.overview": "Обзор",
  "product.specification": "Спецификация",
  "product.origin": "Происхождение",
  "product.packaging": "Упаковка и логистика",
  "product.certificates": "Сертификаты и соответствие",
  "product.noData": "Подробные спецификации обновляются. Свяжитесь с нами для получения дополнительной информации.",
  "product.inquire": "Запросить этот товар",
  "product.related": "Связанные товары",
  "product.shortDesc": "Описание",
  "product.sector": "Сектор",
  "product.notFound": "Товар не найден",
  "product.notFoundDesc": "Товар, который вы ищете, не существует или был перемещён.",
  "product.browseCatalog": "Открыть каталог",

  "office.tag": "Офис",
  "office.whyTitle": "Почему",
  "office.specialties": "Наши специализации",
  "office.details": "Детали офиса",
  "office.address": "Адрес",
  "office.hours": "Часы работы",
  "office.contact": "Связаться с офисом",
  "office.overview": "Обзор",
  "office.dubai.why1.t": "Глобальная инфраструктура",
  "office.dubai.why1.d": "Логистика мирового класса с современными портами, аэропортами и свободными зонами для эффективных торговых потоков.",
  "office.dubai.why2.t": "Благоприятная среда",
  "office.dubai.why2.d": "Про-бизнес политика, надёжная нормативная база и нулевое налогообложение делают Дубай привлекательным для торговли.",
  "office.dubai.why3.t": "Стратегический центр DMCC",
  "office.dubai.why3.d": "Действуя по лицензии DMCC, наш дубайский офис специализируется на металлических рудах, угле, сахаре и сырье.",
  "office.capetown.why1.t": "Доступ к ресурсам Африки",
  "office.capetown.why1.d": "Кейптаун обеспечивает прямой доступ к природным ресурсам и сельхозпродукции африканского континента.",
  "office.capetown.why2.t": "Крупный порт и торговый путь",
  "office.capetown.why2.d": "Инфраструктура ЮАР и крупные порты обеспечивают бесперебойный экспорт и импорт через Атлантический и Индийский океаны.",
  "office.capetown.why3.t": "Ворота в Африку",
  "office.capetown.why3.d": "Сахар, зерно, орехи, уголь и минералы с африканского континента.",
  "office.istanbul.why1.t": "Межконтинентальный узел",
  "office.istanbul.why1.d": "Стамбул, объединяющий два континента, обеспечивает прямой доступ к европейским и азиатским рынкам.",
  "office.istanbul.why2.t": "Растущая экономика",
  "office.istanbul.why2.d": "Динамичная экономика Турции и стратегические инициативы создают идеальные условия для торговли товарами.",
  "office.istanbul.why3.t": "Промышленная база",
  "office.istanbul.why3.d": "Промышленные металлы, строительные материалы и критическое сырьё на базе турецкой промышленности.",

  "reporting.tag": "Комплаенс",
  "reporting.title": "Отчётность о",
  "reporting.titleAccent": "целостности",
  "reporting.desc": "Aspidus DMCC привержена высочайшим стандартам этики. Используйте этот защищённый канал для сообщений о мошенничестве, подмене или нарушениях Кодекса поведения.",
  "reporting.confidential": "Гарантия конфиденциальности: Вы можете остаться анонимным. Все сообщения обрабатываются строго конфиденциально и направляются в отдел комплаенса.",
  "reporting.incidentType": "Что вы сообщаете? *",
  "reporting.incidentPlaceholder": "Выберите тип инцидента...",
  "reporting.incident.fraud": "Мошенничество / Искажение",
  "reporting.incident.impersonation": "Подмена Aspidus",
  "reporting.incident.bribery": "Взяточничество / Коррупция",
  "reporting.incident.code": "Нарушение Кодекса поведения",
  "reporting.incident.other": "Другое",
  "reporting.anon": "Хочу остаться анонимным",
  "reporting.yourName": "Ваше имя",
  "reporting.yourEmail": "Ваш email",
  "reporting.details": "Детали инцидента *",
  "reporting.detailsPlaceholder": "Укажите даты, имена вовлечённых лиц и подробное описание.",
  "reporting.evidence": "Доказательства (необязательно)",
  "reporting.submit": "Отправить отчёт",
  "reporting.successTitle": "Отчёт отправлен",
  "reporting.successDesc": "Ваш отчёт был безопасно передан команде комплаенса Aspidus. Спасибо за помощь в поддержании нашей целостности.",
  "reporting.back": "Вернуться на сайт",
};

const sr: Dict = {
  "nav.home": "Početna",
  "nav.about": "O nama",
  "nav.commodities": "Proizvodi",
  "nav.locations": "Lokacije",
  "nav.contact": "Kontakt",
  "nav.portal": "Portal",
  "nav.menu": "Meni",

  "hero.badge": "Globalna Trgovina Robom",
  "hero.title1": "Globalno tržište",
  "hero.title2": "je naš domen",
  "hero.desc":
    "Aspidus pruža jedinstvenu stručnost na globalnim tržištima roba, povezujući resurse sa prilikama širom kontinenata od 2007. godine.",
  "hero.cta1": "Istraži Robu",
  "hero.cta2": "Stupite u Kontakt",
  "hero.scroll": "Kliznite za istraživanje",
  "hero.est": "Osnovano 2007.",

  "marquee.label": "Trgovina u 11 sektora",

  "about.tag": "O Aspidusu",
  "about.title": "Naš Put i Vizija",
  "about.desc":
    "Osnovan 2007. godine, Aspidus je započeo sa vizijom da pojednostavi globalne tokove roba. Danas stojimo kao diverzifikovana trgovačka sila sa prisustvom u ključnim finansijskim i logističkim čvorištima širom sveta. Naša posvećenost etičkoj praksi, tržišnoj inteligenciji i snažnom upravljanju rizicima nas izdvaja.",
  "about.v1": "Globalni Doseg: Poslovanje na svim kontinentima i tržištima.",
  "about.v2": "Stručni Tim: Iskusni profesionalci sa dubokim uvidom u tržište.",
  "about.v3": "Inovacije: Prihvatanje tehnologije za efikasna rešenja.",
  "about.v4": "Održivost: Posvećeni odgovornom i etičkom snabdevanju.",
  "about.since": "U poslu od",
  "about.years": "Godina trgovačke izvrsnosti",

  "commodities.tag": "Naš Portfolio",
  "commodities.title": "Trgovina",
  "commodities.titleAccent": "Robom",
  "commodities.desc":
    "Aspidus je specijalizovan za raznovrstan portfolio roba, zadovoljavajući globalnu potražnju i nudeći sveobuhvatna trgovačka rešenja.",
  "commodities.viewAll": "Svi Proizvodi",
  "commodities.explore": "Istraži sektor",

  "stats.s1": "Godišnji obim trgovine (USD)",
  "stats.s2": "Sektora Proizvoda",
  "stats.s3": "Aktivnih Lanaca Snabdevanja",
  "stats.s4": "Satno Praćenje Tržišta",

  "locations.tag": "Gde Poslujemo",
  "locations.title": "Naše Globalne",
  "locations.titleAccent": "Lokacije",
  "locations.desc":
    "Aspidus posluje preko strateški lociranih kancelarija, od kojih se svaka specijalizuje za regionalna tržišta i određenu robu.",
  "locations.learnMore": "Saznajte Više",
  "locations.partnership": "Istražite Mogućnosti Partnerstva",
  "locations.dubai.desc":
    "Naša kancelarija u Dubaiju služi kao centralno čvorište za operacije na Bliskom istoku i u Aziji, specijalizovana za energiju i plemenite metale.",
  "locations.capetown.desc":
    "Naš ulaz u Afriku, sa fokusom na poljoprivredne proizvode, ugalj i ključne minerale sa afričkog kontinenta.",
  "locations.istanbul.desc":
    "Povezujući Evropu i Aziju, naša kancelarija u Istanbulu je čvorište za industrijske metale i prirodne resurse.",

  "why.tag": "Vaša Prednost",
  "why.title": "Zašto",
  "why.titleAccent": "Aspidus",
  "why.c1.t": "Neprevaziđena Stručnost",
  "why.c1.d":
    "Iskoristite naše duboko poznavanje tržišta i decenije iskustva u navigaciji kroz složene komoditetne pejzaže.",
  "why.c2.t": "Globalna Mreža",
  "why.c2.d":
    "Pristupite ogromnoj mreži proizvođača, dobavljača i kupaca širom sveta, obezbeđujući optimalne trgovačke prilike.",
  "why.c3.t": "Strateška Prednost",
  "why.c3.d":
    "Steknite konkurentsku prednost uz našu naprednu analitiku tržišta i prilagođena rešenja za upravljanje rizicima.",

  "contact.tag": "Kontakt",
  "contact.title": "Gradimo",
  "contact.titleAccent": "Zajedno",
  "contact.desc":
    "Bilo da želite da nabavljate robu ili snabdevate globalna tržišta, naš tim je spreman da olakša vašu sledeću transakciju.",
  "contact.offices": "Globalne Kancelarije",
  "contact.viewDetails": "Detalji",
  "contact.sendTag": "Pošaljite Poruku",
  "contact.sendTitle": "Kontaktirajte",
  "contact.sendTitleAccent": "Nas",
  "contact.sendDesc":
    "Odaberite vrstu upita kako bi vaša poruka stigla do pravog odeljenja.",
  "contact.inquiryType": "Vrsta Upita *",
  "contact.inquiryPlaceholder": "Izaberite Vrstu Upita",
  "contact.buying": "Želim da KUPIM robu",
  "contact.selling": "Želim da PONUDIM robu Aspidusu",
  "contact.partnership": "Strateško Partnerstvo / Logistika",
  "contact.career": "Karijera i Opšta Pitanja",
  "contact.name": "Puno Ime *",
  "contact.email": "Email Adresa *",
  "contact.emailError": "Molimo koristite korporativni email.",
  "contact.company": "Ime Firme",
  "contact.message": "Poruka *",
  "contact.office": "Primalac *",
  "contact.officePlaceholder": "Izaberite Kancelariju",
  "contact.send": "Pošalji Upit",
  "contact.sending": "Slanje...",
  "contact.successTitle": "Upit Primljen",
  "contact.successDesc": "Vaš upit je prosleđen nadležnom odeljenju.",
  "contact.errorTitle": "Neuspešno",
  "contact.errorDesc": "Pokušajte ponovo ili nas kontaktirajte na info@aspidus.co",
  "contact.directTitle": "Direktni Kontakt",
  "contact.directDesc": "Preferirate email? Obratite se našem timu direktno.",
  "contact.portalTitle": "Portal Klijenata",
  "contact.portalDesc": "Postojeći partneri mogu pristupiti sigurnoj dokumentaciji i narudžbinama.",

  "footer.brand": "Ime za integritet. Povezujemo globalna tržišta roba od 2007. godine.",
  "footer.quickLinks": "Brzi Linkovi",
  "footer.ourLocations": "Naše Lokacije",
  "footer.contact": "Kontakt",
  "footer.aboutUs": "O nama",
  "footer.globalPresence": "Globalno Prisustvo",
  "footer.contactUs": "Kontakt",
  "footer.portal": "Portal Klijenata",
  "footer.sendInquiry": "Pošalji Upit",
  "footer.rights": "© 2025 Aspidus. Sva prava zadržana.",
  "footer.privacy": "Privatnost",
  "footer.terms": "Uslovi",
  "footer.cookie": "Kolačići",
  "footer.disclaimer": "Odricanje",
  "footer.compliance": "Prijava",

  "common.back": "Nazad",
  "common.backToHome": "Nazad na Početnu",
  "common.viewAll": "Pogledaj Sve",
  "common.loading": "Učitavanje",

  "catalog.tag": "Katalog Robe",
  "catalog.title": "Trgovinski",
  "catalog.titleAccent": "Portfolio",
  "catalog.desc": "Istražite ceo asortiman robe u 11 specijalizovanih sektora. Svaki proizvod dolazi sa detaljnim specifikacijama, poreklom, logistikom i podacima o usklađenosti.",
  "catalog.searchPlaceholder": "Pretraži robu...",
  "catalog.allSectors": "Svi Sektora",
  "catalog.results": "proizvoda",
  "catalog.noResults": "Nema robe koja odgovara pretrazi.",
  "catalog.viewDetail": "Detalji",
  "catalog.showing": "Prikazano",
  "catalog.of": "od",
  "catalog.filterBy": "Filtriraj po sektoru",

  "product.overview": "Pregled",
  "product.specification": "Specifikacija",
  "product.origin": "Poreklo",
  "product.packaging": "Pakovanje i Logistika",
  "product.certificates": "Sertifikati i Usklađenost",
  "product.noData": "Detaljne specifikacije se ažuriraju. Kontaktirajte nas za više informacija.",
  "product.inquire": "Upit za Ovaj Proizvod",
  "product.related": "Srodna Roba",
  "product.shortDesc": "Opis",
  "product.sector": "Sektor",
  "product.notFound": "Proizvod nije pronađen",
  "product.notFoundDesc": "Roba koju tražite ne postoji ili je premeštena.",
  "product.browseCatalog": "Otvori Katalog",

  "office.tag": "Kancelarija",
  "office.whyTitle": "Zašto",
  "office.specialties": "Naše Specijalizacije",
  "office.details": "Detalji Kancelarije",
  "office.address": "Adresa",
  "office.hours": "Radno Vreme",
  "office.contact": "Kontaktirajte Kancelariju",
  "office.overview": "Pregled",
  "office.dubai.why1.t": "Globalna Povezanost i Infrastruktura",
  "office.dubai.why1.d": "Logistika svetske klase sa modernim lukama, aerodromima i slobodnim zonama za efikasne globalne tokove trgovine.",
  "office.dubai.why2.t": "Povoljno Poslovno Okruženje",
  "office.dubai.why2.d": "Pro-poslovne politike, snažan regulatorni okvir i okruženje bez poreza čine Dubai atraktivnim za međunarodnu trgovinu.",
  "office.dubai.why3.t": "Strateški DMCC Centar",
  "office.dubai.why3.d": "Poslujući pod DMCC licencom, naš Dubai HQ se specijalizuje za metalne rude, ugalj, šećer i sirovine.",
  "office.capetown.why1.t": "Direktan Pristup Afričkim Resursima",
  "office.capetown.why1.d": "Kejptaun pruža direktan pristup ogromnim prirodnim resursima i poljoprivrednoj proizvodnji afričkog kontinenta.",
  "office.capetown.why2.t": "Velika Luka i Trgovački Put",
  "office.capetown.why2.d": "Infrastruktura Južne Afrike i velike luke omogućavaju nesmetan izvoz i uvoz preko Atlantika i Indijskog okeana.",
  "office.capetown.why3.t": "Kapija Afrike",
  "office.capetown.why3.d": "Šećer, žitarice, orašaste plodove, ugalj i minerale sa afričkog kontinenta.",
  "office.istanbul.why1.t": "Međukontinentalna Veza",
  "office.istanbul.why1.d": "Istanbul, spajajući dva kontinenta, pruža direktan pristup evropskim i azijskim tržištima.",
  "office.istanbul.why2.t": "Rastuća Ekonomska Sila",
  "office.istanbul.why2.d": "Dinamična ekonomija Turske i strateške vladine inicijative stvaraju idealne uslove za trgovinu robom.",
  "office.istanbul.why3.t": "Industrijska Baza",
  "office.istanbul.why3.d": "Industrijski metali, građevinski materijali i kritične sirovine na bazi turske industrije.",

  "reporting.tag": "Usklađenost",
  "reporting.title": "Izveštavanje o",
  "reporting.titleAccent": "integritetu",
  "reporting.desc": "Aspidus DMCC je posvećen najvišim standardima etičkog ponašanja. Koristite ovaj siguran kanal za prijavu sumnje na prevaru, lažno predstavljanje ili kršenje Kodeksa ponašanja.",
  "reporting.confidential": "Osiguranje poverljivosti: Možete ostati anonimni. Sve prijave se tretiraju uz strogu poverljivost i prosleđuju direktno našem Odeljenju za usklađenost.",
  "reporting.incidentType": "Šta prijavljujete? *",
  "reporting.incidentPlaceholder": "Izaberite Vrstu Incidenta...",
  "reporting.incident.fraud": "Prevara / Lažno Predstavljanje",
  "reporting.incident.impersonation": "Lažno Predstavljanje Aspidusa",
  "reporting.incident.bribery": "Mitnica / Korupcija",
  "reporting.incident.code": "Kršenje Kodeksa Ponašanja",
  "reporting.incident.other": "Drugo",
  "reporting.anon": "Želim da ostanem anoniman",
  "reporting.yourName": "Vaše Ime",
  "reporting.yourEmail": "Vaš Email",
  "reporting.details": "Detalji Incidenta *",
  "reporting.detailsPlaceholder": "Navedite datume, imena uključenih lica i detaljan opis.",
  "reporting.evidence": "Dokazi (Opciono)",
  "reporting.submit": "Pošalji Sigurnu Prijavu",
  "reporting.successTitle": "Prijava Poslata",
  "reporting.successDesc": "Vaša prijava je sigurno prosleđena Aspidus timu za usklađenost. Hvala što nam pomažete da održimo naš integritet.",
  "reporting.back": "Povratak na Sajt",
};

const dictionaries: Record<Lang, Dict> = { en, tr, ru, sr };

/* ------------------------------------------------------------------ */
/*  Context                                                           */
/* ------------------------------------------------------------------ */

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

const LANG_EVENT = "aspidus-lang-change";
const VALID_LANGS: Lang[] = ["en", "tr", "ru", "sr"];

function subscribeLang(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(LANG_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(LANG_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getLangSnapshot(): Lang {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("aspidus-lang") as Lang | null;
  return saved && VALID_LANGS.includes(saved) ? saved : "en";
}

function getLangServerSnapshot(): Lang {
  return "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(
    subscribeLang,
    getLangSnapshot,
    getLangServerSnapshot
  );

  const setLang = (l: Lang) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("aspidus-lang", l);
      window.dispatchEvent(new Event(LANG_EVENT));
    }
  };

  const t = (key: string) => dictionaries[lang][key] ?? dictionaries.en[key] ?? key;

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
