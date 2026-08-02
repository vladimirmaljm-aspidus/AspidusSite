"use client";

import React from "react";
import Hero from "../hero";
import Marquee from "../marquee";
import About from "../about";
import CommoditiesPreview from "../commodities-preview";
import Stats from "../stats";
import LocationsPreview from "../locations-preview";
import WhyPartner from "../why-partner";
import { useScrollReveals } from "../use-scroll-reveals";

export default function HomePage() {
  useScrollReveals([]);
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <CommoditiesPreview />
      <Stats />
      <LocationsPreview />
      <WhyPartner />
    </>
  );
}
