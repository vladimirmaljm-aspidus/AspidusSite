"use client";

import { I18nProvider } from "@/components/aspidus/i18n";
import Preloader from "@/components/aspidus/preloader";
import SiteHeader from "@/components/aspidus/site-header";
import Hero from "@/components/aspidus/hero";
import Marquee from "@/components/aspidus/marquee";
import About from "@/components/aspidus/about";
import Commodities from "@/components/aspidus/commodities";
import Stats from "@/components/aspidus/stats";
import Locations from "@/components/aspidus/locations";
import WhyPartner from "@/components/aspidus/why-partner";
import Contact from "@/components/aspidus/contact";
import SiteFooter from "@/components/aspidus/site-footer";

export default function Home() {
  return (
    <I18nProvider>
      <Preloader />
      <div className="relative min-h-screen flex flex-col bg-[#08111d]">
        <SiteHeader />
        <main className="flex-1">
          <Hero />
          <Marquee />
          <About />
          <Commodities />
          <Stats />
          <Locations />
          <WhyPartner />
          <Contact />
        </main>
        <SiteFooter />
      </div>
    </I18nProvider>
  );
}
