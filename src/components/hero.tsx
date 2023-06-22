import meImage from "../assets/me.jpg";

console.log(meImage);

function Hero() {
  return (
    <>
      <div className="absolute inset-0 opacity-10 bg-hero"></div>
      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid items-center grid-cols-3 gap-20 py-10">
          <div className="col-span-2">
            <h1 className="mb-20 font-bold text-white text-8xl">
              Hi, i'm
              <span className="px-1 font-bold underline-highlight">Craig</span>
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
          </div>
          <img
            className="w-full max-w-full p-10 rounded-full"
            src={meImage}
            alt="Me!"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
