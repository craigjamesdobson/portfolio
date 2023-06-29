import portfolioImage from "../assets/me.jpg";
import { Fade } from "react-awesome-reveal";

function Hero() {
  return (
    <>
      <div className="absolute inset-0 opacity-10 bg-hero"></div>
      <div className="container relative z-10 flex items-center flex-1 px-10 mx-auto">
        <div className="grid items-center gap-20 py-10 lg:grid-cols-3">
          <div className=" lg:col-span-2">
            <Fade cascade delay={250} direction="up" triggerOnce>
              <h1 className="mb-20 font-bold text-white text-8xl">
                Hi, i'm
                <span className="px-1 font-bold underline-highlight">
                  Craig
                </span>
              </h1>
              <h4 className="mb-10 text-3xl font-thin leading-snug text-white">
                An experienced
                <span className="underline-highlight">Frontend Developer</span>
                with over a decade of expertise in JavaScript/Typescript,
                SCSS/CSS, Vue/React, and various other libraries and frameworks
                for building <span className="underline-highlight">Web</span>
                and
                <span className="underline-highlight">E-commerce</span>
                applications. 🚀
              </h4>
              <button className="animated-button">
                <div className="inner">My Resume</div>
              </button>
            </Fade>
          </div>
          <Fade delay={250} direction="up" triggerOnce>
            <img
              className="order-2 w-full max-w-full p-10 rounded-full lg:order-last"
              src={portfolioImage}
              alt="Me!"
            />
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Hero;
