"use client";

import { I18nProvider } from "@/components/aspidus/i18n";
import { RouterProvider, useRouter } from "@/components/aspidus/router";
import { SmoothScroll } from "@/components/aspidus/smooth-scroll";
import Preloader from "@/components/aspidus/preloader";
import SiteHeader from "@/components/aspidus/site-header";
import SiteFooter from "@/components/aspidus/site-footer";
import HomePage from "@/components/aspidus/pages/home-page";
import CommoditiesPage from "@/components/aspidus/pages/commodities-page";
import ProductDetailPage from "@/components/aspidus/pages/product-detail-page";
import OfficePage from "@/components/aspidus/pages/office-page";
import ContactPage from "@/components/aspidus/pages/contact-page";
import ReportingPage from "@/components/aspidus/pages/reporting-page";
import { RLink } from "@/components/aspidus/router";

function CurrentPage() {
  const { route } = useRouter();

  switch (route.name) {
    case "home":
      return <HomePage />;
    case "commodities":
      return <CommoditiesPage initialSector={route.sector} />;
    case "product":
      return <ProductDetailPage slug={route.slug} />;
    case "office":
      return <OfficePage id={route.id} />;
    case "contact":
      return <ContactPage />;
    case "reporting":
      return <ReportingPage />;
    default:
      return <NotFound />;
  }
}

function NotFound() {
  return (
    <div className="pt-40 pb-32 page-enter">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <div className="font-serif text-[8rem] sm:text-[12rem] leading-none italic" style={{ color: "var(--brass)" }}>404</div>
        <h1 className="font-serif text-3xl text-[var(--ink)] mt-4 mb-4">Page not found</h1>
        <p className="text-[var(--muted-foreground)] mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <RLink to="/" className="btn-brass">Back to Home</RLink>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <I18nProvider>
      <RouterProvider>
        <SmoothScroll>
          <Preloader />
          <div className="relative min-h-screen flex flex-col bg-[var(--parchment)]">
            <SiteHeader />
            <main className="flex-1">
              <CurrentPage />
            </main>
            <SiteFooter />
          </div>
        </SmoothScroll>
      </RouterProvider>
    </I18nProvider>
  );
}
