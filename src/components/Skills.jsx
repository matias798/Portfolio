import React from "react";
import "./../styles/Skills.css";

import SkillsImage from "./../images/skills.gif";

// Booststrap styles
import "bootstrap/dist/css/bootstrap.min.css";

// React icons
import { IconContext } from "react-icons";
import { SiHeroku } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiNodeDotJs } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";

function Skills() {
  return (
    <div id="Skills" className="d-flex justify-content-around flex-wrap mt-4">
      <div>
        <img src={SkillsImage} className="skillImage rounded" alt="logo" />{" "}
      </div>

      <IconContext.Provider value={{ size: "4em", padding: "2" }}>
        <div className=" rounded h-100">
          <h3 className=" skillsTitle">Conocimientos</h3>

          <div className="d-flex justify-content-center m-3">
            <SiHeroku className="m-3 text-warning" />

            <SiGit id="git" className="m-3" />
            <SiBootstrap id="bootstrap" className="m-3 btn-primary" />
          </div>

          <div className="d-flex justify-content-center m-3">
            <SiNodeDotJs id="node" className="m-3 " />
            <SiMysql className="m-3 " />
            <SiReact id="React" className="m-3 " />
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Skills;
