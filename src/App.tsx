import "./styles/App.css";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <div className="relative flex flex-col lg:h-screen bg-gradient-to-b from-slate-900 to-slate-800">
        <Nav />
        <Hero />
        <div className="w-full h-1 m-0 bg-gradient-to-l from-rose-950 via-rose-600 to-rose-950 bg-slate-900 animated-gradient"></div>
      </div>
      <div className="bg-slate-900">
        <div className="container p-10 mx-auto text-white">
          <Skills />
        </div>
      </div>
    </>
  );
}

export default App;
