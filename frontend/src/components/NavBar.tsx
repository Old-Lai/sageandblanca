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
          className="flex h-full w-16 items-center justify-center"
          onClick={() => toggleNavPanel()}
        >
          {panelStatus.menu ? (
            <X className="z-10" />
          ) : (
            <Menu id="navHambergerIcon" className="z-10" />
          )}
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
