"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Activates GSAP ScrollTrigger reveals for elements with [data-reveal]
 * attribute. Runs on mount and whenever `deps` change (e.g. route change).
 *
 * data-reveal="up"        fade + translate Y (default)
 * data-reveal="left"      fade + translate X from left
 * data-reveal="right"     fade + translate X from right
 * data-reveal="scale"     fade + scale
 * data-reveal-delay="0.2" delay in seconds
 */
export function useScrollReveals(deps: unknown[] = []) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      els.forEach((el) => {
        const type = el.dataset.reveal || "up";
        const delay = parseFloat(el.dataset.revealDelay || "0");

        const from: gsap.TweenVars = { opacity: 0 };
        if (type === "up") from.y = 40;
        if (type === "left") from.x = -50;
        if (type === "right") from.x = 50;
        if (type === "scale") from.scale = 0.94;

        gsap.fromTo(el, from, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 1,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        });
      });

      // Parallax elements: [data-parallax="0.2"] moves at 0.2x scroll speed
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.15");
        gsap.to(el, {
          y: () => -window.innerHeight * speed,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Refresh after layout settles
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, deps);
}
