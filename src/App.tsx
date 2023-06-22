import "./App.css";
import Router from "./routes";
import meImage from "./assets/me.jpg";
import Nav from "./components/nav";

console.log(meImage);

function App() {
  return (
    <>
      <div className="relative bg-gradient-to-b from-slate-900 to-slate-800">
      <Nav />
      <div className="absolute inset-0 opacity-10 bg-hero"></div>
        <div className="container relative z-10 px-4 mx-auto">
          <div className="grid items-center grid-cols-3 gap-20 py-10">
            <div className="col-span-2">
              <h1 className="mb-20 font-extrabold text-rose-600 text-8xl">
                Hi, i'm Craig.
              </h1>
              <h4 className="mb-4 text-3xl leading-snug text-white">
                An experienced Frontend Software Developer 🚀 with over a decade
                of expertise in JavaScript/Typescript, SCSS/CSS, Vue/React, and
                various other libraries and frameworks for building Web and
                E-commerce applications.
              </h4>
            </div>
            <img
              className="w-full max-w-full p-10 rounded-full"
              src={meImage}
              alt="Me!"
            />
          </div>
          <Router />
        </div>
      </div>
        <div className="h-screen border-t border-rose-600 bg-slate-900"></div>
    </>
  );
}

export default App;
