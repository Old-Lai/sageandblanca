import { Outlet } from "react-router-dom";
import { NavBar } from "@/components";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

export default function Root() {
  const [atTop, setAtTop] = useState(true);
  const shrinkNavbar = () =>
    window.scrollY >= 80 ? setAtTop(false) : setAtTop(true);
  window.addEventListener("scroll", shrinkNavbar);
  useEffect(() => {
    console.log(window.location.pathname);
  }, [window.location.pathname]);
  return (
    <>
      <header className="fixed left-0 top-0 flex h-16 w-full items-center justify-between bg-zinc-700/55 text-white">
        <NavBar />
        <h1 className="z-10 flex-1 text-center text-2xl font-semibold">
          SAGE & BLANCA
        </h1>
        <ShoppingCart className="z-10 w-16" />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
