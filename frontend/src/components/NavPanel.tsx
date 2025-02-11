import { Link } from "react-router-dom";

interface Props {
  readonly toggleNavPanel: Function;
  readonly isShow: boolean;
}

export default function NavPanel(props: Props) {
  const { toggleNavPanel, isShow } = props;
  return (
    <div
      id="navPanel"
      className={`absolute left-0 top-0 flex h-[50vh] w-screen flex-col items-center justify-center bg-slate-500 transition-all duration-500 ${isShow ? "opacity-100" : "translate-y-[-50vh] opacity-0"}`}
    >
      <button className="h-14 w-full" onClick={() => toggleNavPanel()}>
        <Link to="/" className="text-4xl">
          Home
        </Link>
      </button>
      <button className="h-14 w-full">
        <Link to="/order" className="text-4xl" onClick={() => toggleNavPanel()}>
          Order
        </Link>
      </button>
    </div>
  );
}
