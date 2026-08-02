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
    <section className="relative py-14 sm:py-16 bg-[var(--ink)] overflow-hidden">
      {/* subtle mesh on dark */}
      <div className="absolute inset-0 opacity-20" style={{
        background: "radial-gradient(at 20% 50%, rgba(154,123,63,0.4), transparent 50%), radial-gradient(at 80% 50%, rgba(45,74,62,0.3), transparent 50%)"
      }} />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.labelKey}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="text-center lg:text-left"
            >
              <span className="mono-label" style={{ color: "rgba(245,242,234,0.4)" }}>{String(i + 1).padStart(2, "0")}</span>
              <div className="font-serif text-4xl sm:text-5xl leading-none mt-2" style={{ color: "var(--brass-soft)" }}>
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="mt-3 h-0.5 w-10 rounded-full" style={{ background: "var(--brass)" }} />
              <p className="mono-label leading-relaxed text-[0.65rem] mt-3" style={{ color: "rgba(245,242,234,0.7)" }}>{t(s.labelKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
