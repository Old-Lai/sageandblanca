import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavPanel from "./NavPanel";
import CartPanel from "./CartPanel";

export default function NavBar() {
  const [panelStatus, setPanelStatus] = useState({
    cart: false,
    menu: false,
  });

  function toggleCartPanel() {
    console.log("cart pressed", !panelStatus.cart);
    setPanelStatus((prev) => ({ ...prev, cart: !prev.cart }));
  }

  function toggleNavPanel() {
    console.log("nav pressed", !panelStatus.menu);
    setPanelStatus((prev) => ({ ...prev, menu: !prev.menu }));
  }

  return (
    <div className="h-full w-full bg-gray-600/0">
      <div className="flex h-full items-center justify-between">
        <button
          className="relative z-10 h-full w-16"
          onClick={() => toggleNavPanel()}
        >
          <X
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity ${panelStatus.menu ? "opacity-100" : "opacity-0"}`}
            aria-hidden={panelStatus.menu}
          />
          <Menu
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity ${panelStatus.menu ? "opacity-0" : "opacity-100"}`}
            aria-hidden={!panelStatus.menu}
          />
        </button>
        <button className="z-10 text-center text-2xl font-semibold">
          <Link to="/">SAGE & BLANCA</Link>
        </button>
        <button
          onClick={() => {
            toggleCartPanel();
          }}
        >
          <ShoppingCart className="w-16" />
        </button>
      </div>
      <NavPanel toggleNavPanel={toggleNavPanel} isShow={panelStatus.menu} />
      <CartPanel />
    </div>
  );
}
