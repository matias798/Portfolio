import React from "react";
import "./../styles/Skills.css";

import SkillsImage from "./../images/skills.gif";

// Booststrap styles
import "bootstrap/dist/css/bootstrap.min.css";

// Local styles
import "./../styles/Contact.css";
import "./../App.css";

// React icons
import { IconContext } from "react-icons";
import { SiHeroku } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiNodeDotJs } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { SiFirebase } from "react-icons/si";

function Skills() {
  return (
    <div
      id="SkillsBackgroundColor"
      className="d-flex justify-content-around flex-wrap mt-4"
    >
      <div>
        
        <img src={SkillsImage} className="skillImage rounded" alt="logo" />{" "}
      </div>

      <IconContext.Provider value={{ size: "4em", padding: "2" }}>
        <div className=" rounded h-100">
          <h3 className=" PortfolioTitle ">Conocimientos</h3>

          <div className="d-flex justify-content-center m-3">
            <SiNodeDotJs id="node" className="m-3 " />
            <SiMysql id ="MySql" className="m-3 " />
            <SiReact id="React" className="m-3 " />
          </div>

          <div className="d-flex justify-content-center m-3">
            <AiFillHtml5 id="git" className="m-3" />
            <BsBootstrapFill id="bootstrap" className="m-3" />
            <SiCss3 id ="CSS"className="m-3 " />
          </div>
          <div className="d-flex justify-content-center m-3">
            <SiHeroku id="heroku" className="m-3 " />
            <SiGit id="git" className="m-3 " />
            <SiFirebase id="firebase" className="m-3 " />
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Skills;
