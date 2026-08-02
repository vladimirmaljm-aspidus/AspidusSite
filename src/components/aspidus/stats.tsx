"use client";

import React from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useI18n } from "./i18n";
import { stats } from "./data";
import { AnimatedDivider } from "./animated-icons";

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`);
  React.useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [inView, value, count]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  const { t } = useI18n();
  return (
    <section className="relative py-20 sm:py-24 mesh-soft overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Editorial horizontal band — no card boxes, large flowing numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.labelKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="relative"
            >
              {/* Large numeral marker */}
              <span
                className="absolute -top-3 -left-1 font-serif italic text-5xl sm:text-6xl leading-none select-none pointer-events-none"
                style={{ color: "rgba(154,123,63,0.12)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative pl-1">
                <div className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-none" style={{ color: "var(--brass-deep)" }}>
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="block h-px w-8" style={{ background: "var(--brass)" }} />
                  <p className="mono-label leading-relaxed text-[0.65rem]">{t(s.labelKey)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
