import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavPanel from "./NavPanel";
import CartPanel from "./CartPanel";

export default function NavBar() {
  return (
    <div className="h-full w-full bg-gray-600/0">
      <div className="flex h-full items-center justify-between">
        {/* <button className="relative z-10 h-full w-16">
          <X
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
          />
          <Menu
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
          />
        </button> */}
        <NavPanel />
        <button className="z-10 text-center text-2xl font-semibold">
          <Link to="/">SAGE & BLANCA</Link>
        </button>
        <CartPanel />
      </div>
    </div>
  );
}
