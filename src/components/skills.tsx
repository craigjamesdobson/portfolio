/// <reference types="vite-plugin-svgr/client" />

import { Fade } from "react-awesome-reveal";
import SvgIcon from "./SvgIcon";
import skillsSvg from "../assets/skills.svg";

const portfolioSkills = [
  {
    title: "Frontend",
    skills: ["html", "css", "sass", "javascript", "typescript", "react", "vue"],
  },
  {
    title: "Tooling",
    skills: ["git", "node", "vite", "webpack", "gulp"],
  },
  {
    title: "Backend",
    skills: ["node", "dotnet"],
  },
];

function Hero() {
  return (
    <>
      <div className="inline-flex flex-col mb-10">
        <h2 className="mb-5 text-6xl font-black text-white">Skill sets</h2>
        <div className="h-1 m-0 -full bg-gradient-to-l from-rose-950 via-rose-600 to-rose-950 bg-slate-900 animated-gradient"></div>
      </div>

      <div className="grid items-center justify-center grid-cols-3">
        <div className="flex flex-col flex-wrap col-span-2 gap-10 mb-10">
          {portfolioSkills.map((item, index) => {
            return (
              <div key={index}>
                <Fade
                  className="opacity-0"
                  key={index}
                  delay={1000 * index}
                  direction="down"
                  triggerOnce
                >
                  <div className="inline-flex flex-col mb-10">
                    <h3 className="mb-5 text-3xl font-light tracking-widest text-white uppercase">
                      {item.title}
                    </h3>
                    <div className="h-px m-0 -full bg-gradient-to-l from-rose-950 via-rose-600 to-rose-950 bg-slate-900 animated-gradient"></div>
                  </div>
                </Fade>
                <div className="flex flex-row flex-wrap gap-10 mb-10">
                  <Fade
                    className="opacity-0"
                    triggerOnce
                    delay={1000 * index}
                    cascade
                  >
                    {item.skills.map((skill, index) => {
                      return (
                        <SvgIcon
                          key={index}
                          iconName={skill}
                          svgProp={{
                            fill: "currentcolor",
                            height: "5rem",
                            width: "5rem",
                          }}
                        />
                      );
                    })}
                  </Fade>
                </div>
              </div>
            );
          })}
        </div>
        <Fade triggerOnce direction="down" duration={2500}>
          <img
            className="w-full max-w-full p-10"
            src={skillsSvg}
            alt="Skills Illustration"
          />
        </Fade>
      </div>
    </>
  );
}

export default Hero;
