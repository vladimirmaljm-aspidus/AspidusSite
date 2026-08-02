"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * Animated SVG icon system — Lottie-style animations using Framer Motion.
 * Each icon triggers a path-draw / pulse / rotate animation when scrolled into view.
 * No external dependencies, always works, lightweight.
 */

const EASE = [0.16, 1, 0.3, 1] as const;

type IconProps = {
  className?: string;
  size?: number;
  stroke?: string;
  delay?: number;
};

/* ---------- Flame (Energy) — animated flicker ---------- */
export function AnimatedFlame({ className, size = 40, stroke = "currentColor", delay = 0 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      stroke={stroke}
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d="M20 5 C 24 12, 30 16, 28 24 C 27 31, 24 35, 20 35 C 16 35, 13 31, 12 24 C 10 16, 16 12, 20 5 Z"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE, delay }}
      />
      <motion.path
        d="M20 16 C 22 20, 24 22, 23 27 C 22 31, 21 33, 20 33 C 19 33, 18 31, 17 27 C 16 22, 18 20, 20 16 Z"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.6, ease: EASE }}
      />
      <motion.circle
        cx="20"
        cy="27"
        r="2"
        fill={stroke}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1, 0.7, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: delay + 1, repeat: Infinity, repeatType: "reverse" }}
      />
    </motion.svg>
  );
}

/* ---------- Diamond (Metals) — rotating facets ---------- */
export function AnimatedDiamond({ className, size = 40, stroke = "currentColor", delay = 0 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      stroke={stroke}
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d="M20 6 L32 18 L20 34 L8 18 Z"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE, delay }}
      />
      <motion.path
        d="M8 18 L32 18 M20 6 L14 18 L20 34 M20 6 L26 18 L20 34"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: delay + 0.5, ease: EASE }}
      />
    </motion.svg>
  );
}

/* ---------- Sprout (Agriculture) — growing leaves ---------- */
export function AnimatedSprout({ className, size = 40, stroke = "currentColor", delay = 0 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      stroke={stroke}
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d="M20 34 L20 18"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE, delay }}
      />
      <motion.path
        d="M20 22 C 14 20, 10 16, 10 11 C 16 11, 20 15, 20 22 Z"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.4, ease: EASE }}
      />
      <motion.path
        d="M20 18 C 26 16, 30 12, 30 7 C 24 7, 20 11, 20 18 Z"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.7, ease: EASE }}
      />
      <motion.path
        d="M14 34 L26 34"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 1, ease: EASE }}
      />
    </motion.svg>
  );
}

/* ---------- Globe (Network) — orbiting rings ---------- */
export function AnimatedGlobe({ className, size = 40, stroke = "currentColor", delay = 0 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      stroke={stroke}
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.circle
        cx="20"
        cy="20"
        r="14"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE, delay }}
      />
      <motion.ellipse
        cx="20"
        cy="20"
        rx="6"
        ry="14"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: delay + 0.4, ease: EASE }}
      />
      <motion.path
        d="M6 20 L34 20"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: delay + 0.7, ease: EASE }}
      />
    </motion.svg>
  );
}

/* ---------- Shield (Compliance) — drawing ---------- */
export function AnimatedShield({ className, size = 40, stroke = "currentColor", delay = 0 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      stroke={stroke}
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d="M20 5 L32 10 L32 20 C 32 28, 26 33, 20 35 C 14 33, 8 28, 8 20 L8 10 Z"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: EASE, delay }}
      />
      <motion.path
        d="M15 20 L19 24 L26 16"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: delay + 1, ease: EASE }}
      />
    </motion.svg>
  );
}

/* ---------- Trending up (Markets) — animated line ---------- */
export function AnimatedTrend({ className, size = 40, stroke = "currentColor", delay = 0 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      stroke={stroke}
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d="M6 30 L14 22 L20 26 L32 12"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE, delay }}
      />
      <motion.path
        d="M26 12 L32 12 L32 18"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 1, ease: EASE }}
      />
    </motion.svg>
  );
}

/* ---------- Leaf (ESG) — breathing ---------- */
export function AnimatedLeaf({ className, size = 40, stroke = "currentColor", delay = 0 }: IconProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      stroke={stroke}
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        d="M32 8 C 32 24, 22 32, 8 32 C 8 18, 18 8, 32 8 Z"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: EASE, delay }}
      />
      <motion.path
        d="M12 28 L26 14"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: delay + 0.7, ease: EASE }}
      />
    </motion.svg>
  );
}

/* ---------- Pulse dot (live indicator) ---------- */
export function PulseDot({ className, size = 8, color = "#6dbd8e" }: { className?: string; size?: number; color?: string }) {
  return (
    <span className={`relative inline-flex ${className}`} style={{ width: size, height: size }}>
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: color }}
        animate={{ scale: [1, 2.2, 1], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <span
        className="relative rounded-full"
        style={{ width: size, height: size, backgroundColor: color }}
      />
    </span>
  );
}

/* ---------- Animated divider (gold line that draws) ---------- */
export function AnimatedDivider({ className, width = 64 }: { className?: string; width?: number }) {
  return (
    <motion.div
      className={className}
      style={{ width, height: 2, background: "var(--brass)", borderRadius: 2 }}
      initial={{ scaleX: 0, originX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: EASE }}
    />
  );
}
