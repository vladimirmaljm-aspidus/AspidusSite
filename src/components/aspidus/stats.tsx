"use client";

import React from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useI18n } from "./i18n";
import { stats } from "./data";

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
    <section className="relative py-12 sm:py-16 bg-[var(--background)] border-y border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Compact horizontal strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--rule)]">
          {stats.map((s, i) => (
            <motion.div
              key={s.labelKey}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="relative bg-[var(--background)] px-5 py-6 group"
            >
              <span className="mono-label opacity-40 text-[0.6rem]">{String(i + 1).padStart(2, "0")}</span>
              <div className="font-serif text-3xl sm:text-4xl gold-gradient leading-none mt-2">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="rule-brass mt-3 mb-2 group-hover:w-14 transition-all duration-500" />
              <p className="mono-label leading-relaxed text-[0.65rem]">{t(s.labelKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
