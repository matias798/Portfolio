import React from "react";

//Local image
import SkillsImage from "./../images/Nerd.gif";

// Booststrap styles
import "bootstrap/dist/css/bootstrap.min.css";

// Local styles
import "./../styles/AboutMe.css";

import "./../App.css";

function AboutMe() {
  return (
    <div id="aboutMeContainer">

      <div id="aboutMeTextContainer ">
        {/* Text */}
        <div id="aboutMeText">
          <h2 id="aboutMeTitle"> Sobre mi</h2>

          <h5>
            Proactivo, con habilidades interpersonales que me permiten
            fácilmente adaptarme a grupos de trabajo. Actualmente me encuentro
            en búsqueda de nuevos desafíos que me permitan potenciar mi
            desarrollo profesional.
          </h5>
      </div>
        </div>
        {/* Text */}


        {/* image */}
        <div>
          <img
            src={SkillsImage}
            className="AboutMeImage rounded mb-3"
            alt="logo"
          />
        </div>
        {/* /image */}
    </div>
  );
}

export default  AboutMe;