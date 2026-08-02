"use client";

import React from "react";
import Hero from "../hero";
import Ticker from "../ticker";
import Marquee from "../marquee";
import About from "../about";
import Operations from "../operations";
import CommoditiesPreview from "../commodities-preview";
import Stats from "../stats";
import LocationsPreview from "../locations-preview";
import Leadership from "../leadership";
import Esg from "../esg";
import WhyPartner from "../why-partner";
import News from "../news";
import { useScrollReveals } from "../use-scroll-reveals";

export default function HomePage() {
  useScrollReveals([]);
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <Operations />
      <CommoditiesPreview />
      <Stats />
      <LocationsPreview />
      <Leadership />
      <Esg />
      <WhyPartner />
      <News />
      <Marquee />
    </>
  );
}
