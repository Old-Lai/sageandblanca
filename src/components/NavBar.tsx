import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="h-full w-16 bg-gray-600/0">
      <button className="h-full w-full flex items-center justify-center" onClick={()=>toggleNavPanel()}>
        <Menu id="navHambergerIcon"/>
        <X id="navHambergerCloseIcon" className="z-10 hidden"/>
      </button>
      <div id="navPanel" className="absolute left-0 top-0 hidden h-screen w-screen flex flex-col items-center justify-center bg-slate-700">
        <button className="w-full h-14" onClick={()=>toggleNavPanel()}>
          <Link to="/" className="text-4xl">Home</Link>
        </button>
        <button className="w-full h-14">
          <Link to="/order" className="text-4xl" onClick={()=>toggleNavPanel()}>Order</Link>
        </button>
      </div>
    </div>
  );
}

function toggleNavPanel(){
  let navPanel = document.getElementById("navPanel")
  let navHambergerIcon = document.getElementById("navHambergerIcon")
  let navHambergerCloseIcon = document.getElementById("navHambergerCloseIcon")

  navPanel && navPanel.classList.toggle("hidden")
  navHambergerIcon && navHambergerIcon.classList.toggle("hidden")
  navHambergerCloseIcon && navHambergerCloseIcon.classList.toggle("hidden")
}
