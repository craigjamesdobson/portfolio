/// <reference types="vite-plugin-svgr/client" />

import { Fade } from "react-awesome-reveal";
import SvgIcon from "./SvgIcon";

const frontendSkills = [
  "html",
  "css",
  "sass",
  "javascript",
  "typescript",
  "react",
  "vue",
];

const toolingSkills = ["git", "node", "gulp", "webpack", "vite"];

function Hero() {
  return (
    <>
      <div className="inline-flex flex-col mb-10">
        <h2 className="mb-5 text-6xl font-black text-white">Skill sets</h2>
        <div className="h-1 m-0 -full bg-gradient-to-l from-rose-950 via-rose-600 to-rose-950 bg-slate-900 animated-gradient"></div>
      </div>
      <div>
        <h3 className="mb-10 text-4xl font-black text-white">Frontend</h3>
        <div className="flex flex-row flex-wrap gap-10 mb-10">
          <Fade cascade>
            {frontendSkills.map((item, index) => {
              return (
                <SvgIcon
                  key={index}
                  iconName={item}
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
      <div>
        <h3 className="mb-10 text-4xl font-black text-white">Tooling</h3>
        <div className="flex flex-row flex-wrap gap-10 mb-10">
          <Fade cascade>
            {toolingSkills.map((item, index) => {
              return (
                <SvgIcon
                  key={index}
                  iconName={item}
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
    </>
  );
}

export default Hero;
