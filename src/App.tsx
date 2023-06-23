import "./styles/App.css";
import Nav from "./components/nav";
import Hero from "./components/hero";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <>
      <div className="relative flex flex-col lg:h-screen bg-gradient-to-b from-slate-900 to-slate-800">
        <Nav />
        <Hero />
        <div className="w-full h-1 m-0 bg-gradient-to-l from-rose-950 via-rose-600 to-rose-950 bg-slate-900 animated-gradient"></div>
      </div>
      <div className="h-screen bg-slate-900">
        <div className="container p-10 mx-auto text-white">
          <h2 className="mb-5 text-8xl">Skill set</h2>
          <Fade cascade>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              maiores corrupti voluptates magni dolor dolores repudiandae eum,
              praesentium odio obcaecati, dolorum ipsa magnam numquam quod
              incidunt ea quia! Qui, accusamus. Facere ducimus distinctio
              incidunt iure ratione modi illo sed, aperiam vero vitae, magni
              odio. Iusto reprehenderit rem minima voluptas, commodi explicabo
              fuga eos porro sint, unde ducimus dolores? Nostrum, repellat.
              Magni, dolorum. Expedita fugit ut inventore, molestias nostrum
              dicta at quas beatae blanditiis vitae nobis eius nemo consectetur
              sed aut adipisci, assumenda eum repellat. In natus iure fuga
              dignissimos quidem. At iusto quasi a, itaque reiciendis blanditiis
              amet, dolore alias doloribus iste veniam dolores consectetur
              pariatur. Harum earum non maxime laboriosam maiores quibusdam vel,
              aliquid dolorem commodi cupiditate laborum saepe. Ullam, itaque
              velit voluptatem labore doloribus mollitia consequatur quam modi
              suscipit minima saepe, architecto id earum voluptas quo. Officiis
              voluptatem reprehenderit inventore repellat necessitatibus quod
              illo voluptate perspiciatis, magni eveniet.
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              maiores corrupti voluptates magni dolor dolores repudiandae eum,
              praesentium odio obcaecati, dolorum ipsa magnam numquam quod
              incidunt ea quia! Qui, accusamus. Facere ducimus distinctio
              incidunt iure ratione modi illo sed, aperiam vero vitae, magni
              odio. Iusto reprehenderit rem minima voluptas, commodi explicabo
              fuga eos porro sint, unde ducimus dolores? Nostrum, repellat.
              Magni, dolorum. Expedita fugit ut inventore, molestias nostrum
              dicta at quas beatae blanditiis vitae nobis eius nemo consectetur
              sed aut adipisci, assumenda eum repellat. In natus iure fuga
              dignissimos quidem. At iusto quasi a, itaque reiciendis blanditiis
              amet, dolore alias doloribus iste veniam dolores consectetur
              pariatur. Harum earum non maxime laboriosam maiores quibusdam vel,
              aliquid dolorem commodi cupiditate laborum saepe. Ullam, itaque
              velit voluptatem labore doloribus mollitia consequatur quam modi
              suscipit minima saepe, architecto id earum voluptas quo. Officiis
              voluptatem reprehenderit inventore repellat necessitatibus quod
              illo voluptate perspiciatis, magni eveniet.
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              maiores corrupti voluptates magni dolor dolores repudiandae eum,
              praesentium odio obcaecati, dolorum ipsa magnam numquam quod
              incidunt ea quia! Qui, accusamus. Facere ducimus distinctio
              incidunt iure ratione modi illo sed, aperiam vero vitae, magni
              odio. Iusto reprehenderit rem minima voluptas, commodi explicabo
              fuga eos porro sint, unde ducimus dolores? Nostrum, repellat.
              Magni, dolorum. Expedita fugit ut inventore, molestias nostrum
              dicta at quas beatae blanditiis vitae nobis eius nemo consectetur
              sed aut adipisci, assumenda eum repellat. In natus iure fuga
              dignissimos quidem. At iusto quasi a, itaque reiciendis blanditiis
              amet, dolore alias doloribus iste veniam dolores consectetur
              pariatur. Harum earum non maxime laboriosam maiores quibusdam vel,
              aliquid dolorem commodi cupiditate laborum saepe. Ullam, itaque
              velit voluptatem labore doloribus mollitia consequatur quam modi
              suscipit minima saepe, architecto id earum voluptas quo. Officiis
              voluptatem reprehenderit inventore repellat necessitatibus quod
              illo voluptate perspiciatis, magni eveniet.
            </p>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default App;
