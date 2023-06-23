import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div className="py-10 text-white ">
      <div className="container flex items-center justify-between px-10 mx-auto">
        <div className="text-xl font-black">LOGO</div>
        <nav className="flex justify-center gap-10 text-2xl place-items-center">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/projects"> Projects </Link>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
