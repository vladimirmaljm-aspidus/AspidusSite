"use client";

import React from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useI18n } from "./i18n";
import { stats } from "./data";

function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => `${prefix}${Math.round(v)}${suffix}`);

  React.useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [inView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Stats() {
  const { t } = useI18n();

  return (
    <section className="relative py-20 sm:py-24 bg-[#08111d] border-y border-[rgba(201,169,97,0.14)] overflow-hidden">
      {/* decorative gold line top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-40 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.labelKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.12 }}
              className="relative text-center lg:text-left group"
            >
              {/* index number watermark */}
              <span className="absolute -top-6 right-0 lg:right-auto lg:-top-8 lg:left-0 font-serif text-6xl text-[var(--primary)]/8 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative">
                <div className="font-serif text-4xl sm:text-5xl lg:text-6xl gold-gradient leading-none">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="mt-3 h-px w-10 bg-[var(--primary)]/50 mx-auto lg:mx-0 group-hover:w-16 transition-all duration-500" />
                <p className="mt-3 text-xs sm:text-sm tracking-[0.12em] uppercase text-slate-400 leading-relaxed">
                  {t(s.labelKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-40 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent" />
    </section>
  );
}
