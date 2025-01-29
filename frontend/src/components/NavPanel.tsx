import { Link } from "react-router-dom";

export default function NavPanel(props:{toggleNavPanel:Function}){
    const {toggleNavPanel} = props
    return(
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
    )
}