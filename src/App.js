import React from "react";
import { MdEmail } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { projects } from "./components/data";
import { Project } from "./components/Project/index";
import "./style.css";

export const Home = () => {
  return (
    <main className="home">
      <div className="text">
        <h1>
          Hello There,<br></br> I'm <span>Imade Osaretin Frank</span>
        </h1>

        <p>
          A passionate web developer, interested in creating meaning and
          solutions through my code to help people and organizations around the
          world.
        </p>
      </div>
    </main>
  );
};

export const ProjectList = () => {
  return (
    <div id="project" className="projects">
      {projects.map((obj, idx) => {
        return <Project key={idx} props={obj} />;
      })}
    </div>
  );
};

export const Footer = () => {
  return (
    <footer>
      <h1>Like what you see? Let's have a chat..</h1>
      <div className="icon">
        <a href="https://twitter.com/imadeosaretin_">
          <AiOutlineTwitter />
        </a>
        <a href="mailto:imadeosaretin@gmail.com">
          <MdEmail />
        </a>
        <a href="https://github.com/sumdude65">
          <AiFillGithub />
        </a>
      </div>
    </footer>
  );
};
