import "./styles/App.css";
import Nav from "./components/nav";
import Hero from "./components/hero";

function App() {
  return (
    <>
      <div className="relative bg-gradient-to-b from-slate-900 to-slate-800">
        <Nav />
        <Hero/>
      </div>
      <div className="w-full h-1 m-0 bg-gradient-to-l from-rose-950 via-rose-600 to-rose-950 bg-slate-900 animated-gradient"></div>
      <div className="h-screen bg-slate-900"></div>
    </>
  );
}

export default App;
