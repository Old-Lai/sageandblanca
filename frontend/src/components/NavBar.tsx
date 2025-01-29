import { Menu, X, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavPanel from "./NavPanel";
import CartPanel from "./CartPanel";

function toggleNavPanel() {
  let navPanel = document.getElementById("navPanel");
  let navHambergerIcon = document.getElementById("navHambergerIcon");
  let navHambergerCloseIcon = document.getElementById("navHambergerCloseIcon");

  navPanel?.classList.toggle("hidden");
  navHambergerIcon?.classList.toggle("hidden");
  navHambergerCloseIcon?.classList.toggle("hidden");
}


export default function NavBar() {
  const [cartStatus, setCartStatus] = useState({
    showPanel: false,
    cartItemsCount: 0,
  });

  useEffect(()=>{
    const cartItems = localStorage.getItem("shoppingCart")
    if(cartItems?.length)
      setCartStatus(prev=>({...prev, cartItems}))
    else
      setCartStatus(prev=>({...prev, cartItems:[]}))
  }, [])

  function updateCart(){
    console.log("update cart")
  }

  function toggleCartPanel() {
    console.log("cart pressed", cartStatus)
    setCartStatus((prev) => ({ ...prev, showPanel: !prev.showPanel }));
  }
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
        <button className="z-10 text-center text-2xl font-semibold">
          <Link to="/">SAGE & BLANCA</Link>
        </button>
        <button
          onClick={() => {
            toggleCartPanel();
          }}
        >
          <ShoppingCart className="z-10 w-16" />
        </button>
      </div>
      <NavPanel toggleNavPanel={toggleCartPanel}/>
      <CartPanel />
    </div>
  );
}