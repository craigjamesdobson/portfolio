import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Projects",
    link: "/projects",
  },
];

export function Nav() {
  return (
    <div className="z-10 py-10 text-white">
      <div className="container flex items-center justify-between px-10 mx-auto">
        <div className="text-xl font-black">LOGO</div>
        <nav className="flex justify-center gap-10 text-2xl font-thin tracking-widest uppercase place-items-center">
          {navLinks.map((item, index) => {
            return (
              <Link
                key={index}
                className="b-5 group hover:text-white"
                to={item.link}
              >
                <span className="flex mb-2">{item.title}</span>
                <div className="w-0 h-px m-0 transition-[width] duration-500 ease-in-out group-hover:w-full bg-gradient-to-l from-rose-950 via-rose-600 to-rose-950 bg-slate-900 animated-gradient"></div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export default Nav;
