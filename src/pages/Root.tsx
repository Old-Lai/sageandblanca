import { Outlet } from "react-router-dom";
import { NavBar } from "@/components";
import { ShoppingCart } from "lucide-react";
import { SiInstagram } from "@icons-pack/react-simple-icons";
import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export default function Root() {
  const [scrollDir, setScrollDir] = useState("up");

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
  // useEffect(() => {
  //   console.log(window.location.pathname);
  // }, [window.location.pathname]);

  const navBarVariants: Record<string, string> = {
    up: "h-16 bg-zinc-700/55",
    down: "h-12 bg-zinc-900",
  };

  return (
    <>
      <header
        className={`${navBarVariants[scrollDir]} fixed left-0 top-0 flex w-full items-center justify-between text-white backdrop-blur-sm transition-all duration-300`}
      >
        <NavBar />
        <h1 className="z-10 flex-1 text-center text-2xl font-semibold">
          SAGE & BLANCA
        </h1>
        <ShoppingCart className="z-10 w-16" />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="flex w-full flex-col rounded-b-2xl bg-[#f6a9a0] p-5">
        <div className="mb-5 flex justify-between">
          <h2 className="text-2xl font-semibold">Useful Links</h2>
          <SiInstagram />
        </div>
        <p className="mb-2">FAQs</p>
        <p className="mb-2">Terms of Service</p>
        <p className="mb-2">Privacy Policy</p>
        <p>Flower Care</p>
        <h2 className="my-5 text-2xl font-semibold">Hours</h2>
        <p>Monday - Saturday</p>
        <p>10am - 6pm</p>
        <p className="mt-5 underline">info@sageandblanca.com</p>
        <p className="underline">(555) 555-5555</p>
        <p className="mb-10 mt-5 underline">Santa Monica, Los Angeles</p>
      </footer>
    </>
  );
}
