import { Outlet, useLocation } from "react-router-dom";
import { FooterNav, NavBar } from "@/components";
import { Toaster } from "@/components/ui/sonner";

import { useEffect, useState } from "react";

const navBarVariants: Record<string, Record<string, string>> = {
  "/": {
    up: "fixed left-0 top-0 h-16 bg-zinc-700/55 backdrop-blur-sm text-white",
    down: "fixed left-0 top-0 h-12 bg-zinc-900 backdrop-blur-sm text-white",
  },
  "/checkout": {
    up: "hidden",
    down: "hidden",
  },
  default: {
    up: "fixed left-0 top-0 h-16 bg-white text-zinc-900 shadow-lg mb-4",
    down: "fixed left-0 top-0 h-12 bg-zinc-900 text-white",
  },
};

const footerVariants: Record<string, string> = {
  "/checkout": "hidden",
  default: "",
};

export default function Root() {
  const [scrollDir, setScrollDir] = useState("up");
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname in navBarVariants
      ? window.location.pathname
      : "default",
  );

  const location = useLocation(); //to rerender on route change

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  //reset scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentPath(
      window.location.pathname in navBarVariants
        ? window.location.pathname
        : "default",
    );
  }, [location]);

  return (
    <div>
      <header
        className={`${navBarVariants[currentPath][scrollDir]} fixed z-10 flex w-full items-center justify-between transition-all duration-300`}
      >
        <NavBar />
      </header>
      <main>
        <Outlet />
        <Toaster />
      </main>
      <footer className={`${footerVariants[currentPath]}`}>
        <FooterNav />
      </footer>
    </div>
  );
}
