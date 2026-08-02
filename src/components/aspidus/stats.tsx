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
      const controls = animate(count, value, { duration: 2, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [inView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  const { t } = useI18n();

  return (
    <section className="relative py-16 sm:py-20 bg-[var(--muted)] border-y border-[var(--rule)]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--rule)]">
          {stats.map((s, i) => (
            <motion.div
              key={s.labelKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="relative bg-[var(--background)] p-6 sm:p-8 group"
            >
              <div className="flex items-baseline justify-between mb-3">
                <span className="mono-label opacity-50">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="font-serif text-4xl sm:text-5xl gold-gradient leading-none">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="rule-brass mt-4 mb-3 group-hover:w-16 transition-all duration-500" />
              <p className="mono-label leading-relaxed">{t(s.labelKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
