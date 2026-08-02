"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, ChevronDown, Lock, Globe } from "lucide-react";
import { useI18n, LANGUAGES, type Lang } from "./i18n";
import { RLink, useRouter } from "./router";
import { CLIENT_PORTAL_URL } from "./data";

const NAV_LINKS = [
  { key: "nav.home", to: "/" },
  { key: "nav.about", to: "/#about" },
  { key: "nav.commodities", to: "/commodities" },
  { key: "nav.locations", to: "/#locations" },
  { key: "nav.contact", to: "/contact" },
];

export default function SiteHeader() {
  const { t, lang, setLang } = useI18n();
  const { route, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    // Close mobile menu on hashchange (back/forward nav)
    const onHashChange = () => setMobileOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const handleNav = (to: string) => {
    setMobileOpen(false);
    // if it's an anchor on home
    if (to.startsWith("/#")) {
      const anchor = to.slice(2);
      if (route.name !== "home") {
        navigate("/");
        setTimeout(() => {
          document.querySelector(`#${anchor}`)?.scrollIntoView({ behavior: "smooth" });
        }, 350);
      } else {
        document.querySelector(`#${anchor}`)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(to);
    }
  };

  const currentLang = LANGUAGES.find((l) => l.code === lang);

  return (
    <>
      <ScrollProgress />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || route.name !== "home"
            ? "bg-[rgba(245,242,234,0.92)] backdrop-blur-xl border-b border-[var(--rule)] py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => handleNav("/")}
            className="flex items-center gap-3 group"
            aria-label="Aspidus home"
          >
            <img
              src="/aspidus/aspidus_logo2.webp"
              alt="Aspidus"
              className="h-9 w-auto transition-transform duration-500 group-hover:scale-105"
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.key}
                onClick={() => handleNav(link.to)}
                className="relative px-4 py-2 text-sm font-medium text-[var(--ink-soft)] hover:text-[var(--brass)] transition-colors duration-300 group"
              >
                {t(link.key)}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-[var(--primary)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out" />
              </button>
            ))}
            <button
              onClick={() => handleNav("/reporting")}
              className="relative px-4 py-2 text-sm font-medium text-[var(--ink-soft)] hover:text-[var(--brass)] transition-colors duration-300 group"
            >
              {t("reporting.tag")}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-[var(--primary)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 ease-out" />
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative hidden sm:block">
              <button
                onClick={() => setLangOpen((v) => !v)}
                onBlur={() => setTimeout(() => setLangOpen(false), 150)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[var(--ink-soft)] hover:text-[var(--brass)] border border-transparent hover:border-[rgba(201,165,92,0.3)] rounded-md transition-all duration-300"
              >
                <Globe className="h-4 w-4" />
                <span>{currentLang?.short}</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 rounded-md border border-[rgba(201,165,92,0.18)] bg-white/95 backdrop-blur-xl py-1 shadow-2xl"
                  >
                    {LANGUAGES.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code as Lang);
                          setLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                          lang === l.code
                            ? "text-[var(--primary)] bg-[rgba(201,165,92,0.08)]"
                            : "text-[var(--ink-soft)] hover:text-[var(--brass)] hover:bg-[var(--parchment-warm)]"
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href={CLIENT_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#0a1420] bg-gradient-to-r from-[#c4a368] to-[var(--brass)] rounded-md hover:shadow-[0_8px_30px_-12px_rgba(201,165,92,0.7)] transition-all duration-400"
            >
              <Lock className="h-4 w-4" />
              {t("nav.portal")}
            </a>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-[var(--ink)]"
              aria-label={t("nav.menu")}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-[var(--parchment)] backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 bottom-0 w-[82%] max-w-sm bg-white border-l border-[rgba(201,165,92,0.18)] flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-[rgba(201,165,92,0.14)]">
                <img src="/aspidus/aspidus_logo2.webp" alt="Aspidus" className="h-8" />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-[var(--ink-soft)] hover:text-[var(--brass)]"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex-1 flex flex-col p-5 gap-1 overflow-y-auto">
                {[...NAV_LINKS, { key: "reporting.tag", to: "/reporting" }].map((link, i) => (
                  <motion.button
                    key={link.key}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => handleNav(link.to)}
                    className="text-left py-3.5 px-4 text-lg font-serif text-[var(--ink)] hover:text-[var(--primary)] hover:bg-[var(--parchment-warm)] rounded-md transition-colors"
                  >
                    {t(link.key)}
                  </motion.button>
                ))}
              </nav>

              <div className="p-5 border-t border-[rgba(201,165,92,0.14)] space-y-4">
                <div className="flex gap-2">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.code as Lang)}
                      className={`flex-1 py-2 text-sm rounded border transition-colors ${
                        lang === l.code
                          ? "border-[var(--primary)] text-[var(--primary)] bg-[rgba(201,165,92,0.08)]"
                          : "border-[rgba(201,165,92,0.2)] text-[var(--ink-soft)]"
                      }`}
                    >
                      {l.short}
                    </button>
                  ))}
                </div>
                <a
                  href={CLIENT_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-[#0a1420] bg-gradient-to-r from-[#c4a368] to-[var(--brass)] rounded-md"
                >
                  <Lock className="h-4 w-4" />
                  {t("nav.portal")}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--brass)] to-[#c4a368] z-[70] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
