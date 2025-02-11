import { Link } from "react-router-dom";

interface Props {
  readonly toggleNavPanel: Function;
}

export default function NavPanel(props:Props){
    const {toggleNavPanel} = props
    return(
        <div
        id="navPanel"
        className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center bg-slate-500"
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