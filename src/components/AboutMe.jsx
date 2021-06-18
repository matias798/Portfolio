import React from "react";
import "./../styles/AboutMe.css";

import SkillsImage from "./../images/Nerd.gif";

// Booststrap styles
import "bootstrap/dist/css/bootstrap.min.css";

// Local styles
import "./../styles/Contact.css";
import "./../App.css";

function Skills() {
  return (
      <div id="aboutMeContainer">
{/* Text */}
<div id="aboutMeTextContainer ">
    <div id="aboutMeText">Proactivo, con habilidades interpersonales que me permiten fácilmente adaptarme a grupos de trabajo. Actualmente me encuentro en búsqueda de nuevos desafíos que me permitan potenciar mi desarrollo profesional.

    </div>
    </div>
{/* image */}
<div >
<img src={SkillsImage} className="AboutMeImage rounded mb-3" alt="logo" />{" "}

</div>


      </div>
   
  );
}

export default Skills;
