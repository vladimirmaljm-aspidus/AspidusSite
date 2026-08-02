"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-[var(--parchment)] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <img
              src="/aspidus/aspidus_logo2.webp"
              alt="Aspidus"
              className="h-12 w-auto"
            />
            <motion.div
              className="absolute -bottom-3 left-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--brass)] to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-[0.65rem] tracking-[0.4em] uppercase text-[var(--muted-foreground)]"
          >
            Global Commodities
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
