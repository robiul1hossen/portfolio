import { AnimationWrapper } from "react-hover-animation";
import {
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandVisualStudio,
  TbBrandRedux,
} from "react-icons/tb";

import {
  FaBootstrap,
  FaCss3Alt,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div className=" py-12 h-fit w-full bg-black">
      <h3 className="text-white text-xl text-center pb-10">A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST.</h3>

      <AnimationWrapper>
        <h2 className="font-[800] lg:text-6xl text-3xl text-white text-center mt-4">Skills & Experience</h2>
      </AnimationWrapper>
      <div className="text-white text-center lg:w-1/2 px-4 lg:px-0 mx-auto">
        <p className="mt-5">The main area of expertise is front end development (client side of the web).</p>
        <p className="my-5">
          HTML, CSS, JS, building small and medium web applications with Vue or React, custom plugins,
          features, animations, and coding interactive layouts. I have also full-stack developer experience
          with one of the most popular open source Stack on the web - MERN Stack
        </p>
        <p>
          Visit my{" "}
          <a
            className="text-[#ccf381] font-bold"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mohammad-robiul-hossen-6b5774210/"
          >
            Linkedin
          </a>{" "}
          for more details
        </p>
      </div>

      <div className="text-white grid lg:grid-cols-7 grid-cols-3 gap-y-10  lg:mx-40 mx-16 mt-20">
        <div className="flex flex-col items-center">
          <FaHtml5 className="lg:text-7xl text-5xl"></FaHtml5>
          <span> html</span>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt className="lg:text-7xl text-5xl"></FaCss3Alt>
          <span>CSS</span>
        </div>
        <div className="flex flex-col items-center">
          <FaReact className="lg:text-7xl text-5xl"></FaReact>
          <span>React</span>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs className="lg:text-7xl text-5xl"></FaNodeJs>
          <span>Node</span>
        </div>
        <div className="flex flex-col items-center">
          <FaBootstrap className="lg:text-7xl text-5xl"></FaBootstrap>
          <span>Bootstrap</span>
        </div>
        <div className="flex flex-col items-center">
          <FaGitAlt className="lg:text-7xl text-5xl"></FaGitAlt>
          <span className="">Git</span>
        </div>
        <div className="flex flex-col items-center">
          <FaGithub className="lg:text-7xl text-5xl"></FaGithub>
          <span>Github</span>
        </div>
        <div className="flex flex-col items-center">
          <FaFigma className="lg:text-7xl text-5xl"></FaFigma>
          <span>Figma</span>
        </div>
        <div className="flex flex-col items-center">
          <TbBrandJavascript className="lg:text-7xl text-5xl"></TbBrandJavascript>
          <span>Javascript</span>
        </div>
        <div className="flex flex-col items-center">
          <TbBrandNextjs className="lg:text-7xl text-5xl" />

          <span>Next.js</span>
        </div>
        <div className="flex flex-col items-center">
          <TbBrandRedux className="lg:text-7xl text-5xl"></TbBrandRedux>
          <span>Redux</span>
        </div>
        <div className="flex flex-col items-center">
          <TbBrandVisualStudio className="lg:text-7xl text-5xl"></TbBrandVisualStudio>
          <span>Visual Studio</span>
        </div>
        <div className="flex flex-col items-center">
          <FaSass className="lg:text-7xl text-5xl"></FaSass>
          <span>Sass</span>
        </div>
        <div className="flex flex-col items-center">
          <TbBrandTailwind className="lg:text-7xl text-5xl"></TbBrandTailwind>
          <span>Tailwind</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
