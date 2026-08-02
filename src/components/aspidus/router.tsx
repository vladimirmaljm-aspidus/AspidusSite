"use client";

import React, { createContext, useContext, useSyncExternalStore, useCallback, useEffect } from "react";

/**
 * Hash-based SPA router.
 * Keeps everything on the single `/` route (so the sandbox preview works)
 * while giving a true multi-page experience with shareable URLs and
 * back/forward support.
 *
 * Routes:
 *   #/                          -> home
 *   #/commodities               -> catalog (all sectors)
 *   #/commodities/:sector       -> catalog filtered by sector
 *   #/product/:slug             -> product detail
 *   #/office/:id                -> office detail (dubai | capetown | istanbul)
 *   #/contact                   -> contact
 *   #/reporting                 -> compliance & integrity reporting
 */

export type Route =
  | { name: "home" }
  | { name: "commodities"; sector?: string }
  | { name: "product"; slug: string }
  | { name: "office"; id: string }
  | { name: "contact" }
  | { name: "reporting" }
  | { name: "notfound" };

function parseHash(hash: string): Route {
  const clean = hash.replace(/^#\/?/, "").replace(/\/$/, "");
  if (clean === "" ) return { name: "home" };
  const parts = clean.split("/");

  if (parts[0] === "commodities") {
    return { name: "commodities", sector: parts[1] };
  }
  if (parts[0] === "product" && parts[1]) {
    return { name: "product", slug: decodeURIComponent(parts[1]) };
  }
  if (parts[0] === "office" && parts[1]) {
    return { name: "office", id: parts[1] };
  }
  if (parts[0] === "contact") return { name: "contact" };
  if (parts[0] === "reporting") return { name: "reporting" };
  return { name: "notfound" };
}

function getHash(): string {
  if (typeof window === "undefined") return "";
  return window.location.hash;
}

type RouterContextValue = {
  route: Route;
  navigate: (path: string) => void;
};

const RouterContext = createContext<RouterContextValue>({
  route: { name: "home" },
  navigate: () => {},
});

const HOME_ROUTE: Route = { name: "home" };

function subscribeHash(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}

// Cache the parsed route by hash string so useSyncExternalStore
// gets a stable reference when the hash hasn't changed.
let _cachedHash: string | null = null;
let _cachedRoute: Route = HOME_ROUTE;

function getRouteSnapshot(): Route {
  if (typeof window === "undefined") return HOME_ROUTE;
  const currentHash = window.location.hash;
  if (currentHash !== _cachedHash) {
    _cachedHash = currentHash;
    _cachedRoute = parseHash(currentHash);
  }
  return _cachedRoute;
}

function getRouteServerSnapshot(): Route {
  return HOME_ROUTE;
}

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const route = useSyncExternalStore(subscribeHash, getRouteSnapshot, getRouteServerSnapshot);

  const navigate = useCallback((path: string) => {
    if (typeof window === "undefined") return;
    const normalized = path.startsWith("#") ? path : `#${path}`;
    if (window.location.hash === normalized) {
      // same route — just scroll top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.hash = normalized;
    }
  }, []);

  // Scroll to top on route change (side-effect only, no setState)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [route]);

  return (
    <RouterContext.Provider value={{ route, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

/** Link component that uses the hash router */
export function RLink({
  to,
  children,
  className,
  onClick,
  ...rest
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">) {
  const { navigate } = useRouter();
  const href = to.startsWith("#") ? to : `#${to}`;
  return (
    <a
      href={href}
      onClick={(e) => {
        // allow modifier-clicks to open new tab naturally
        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
        e.preventDefault();
        onClick?.();
        navigate(to);
      }}
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}
