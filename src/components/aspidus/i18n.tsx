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
