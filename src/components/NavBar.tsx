import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function NavBar() {
  return (
    <div className="h-full w-full bg-gray-600/0">
      <div className="flex h-full items-center justify-between">
        <button
          className="flex h-full w-16 items-center justify-center"
          onClick={() => toggleNavPanel()}
        >
          <Menu id="navHambergerIcon" />
          <X id="navHambergerCloseIcon" className="z-10 hidden" />
        </button>
        <h1 className="z-10 text-center text-2xl font-semibold">
          SAGE & BLANCA
        </h1>
        <ShoppingCart className="z-10 w-16" />
      </div>
      <div
        id="navPanel"
        className="absolute left-0 top-0 flex hidden h-screen w-screen flex-col items-center justify-center bg-slate-700"
      >
        <button className="h-14 w-full" onClick={() => toggleNavPanel()}>
          <Link to="/" className="text-4xl">
            Home
          </Link>
        </button>
        <button className="h-14 w-full">
          <Link
            to="/order"
            className="text-4xl"
            onClick={() => toggleNavPanel()}
          >
            Order
          </Link>
        </button>
      </div>
    </div>
  );
}

function toggleNavPanel() {
  let navPanel = document.getElementById("navPanel");
  let navHambergerIcon = document.getElementById("navHambergerIcon");
  let navHambergerCloseIcon = document.getElementById("navHambergerCloseIcon");

  navPanel && navPanel.classList.toggle("hidden");
  navHambergerIcon && navHambergerIcon.classList.toggle("hidden");
  navHambergerCloseIcon && navHambergerCloseIcon.classList.toggle("hidden");
}
