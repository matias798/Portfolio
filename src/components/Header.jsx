import React from "react";

/* icons component */
import Icons from "./Icons";

// Curriculum file route
import curriculum from "./../files/cv-MatiasQuiroga.pdf";

/* /Icons*/
import { BsCloudDownload } from "react-icons/bs"; //download icon
import { RiArrowDropDownLine } from "react-icons/ri"; //arrow icon

/* Booststrap styles */
import "bootstrap/dist/css/bootstrap.min.css";

/* Animate.css */
import "animate.css";

// Local styles
import "./../App.css";
import "./../styles/Header.css";

function Header() {
  return (
    <div>
      <div id="Home" className="  Background HeaderImage">
        <div className="headerText animate__animated animate__backInUp">
          {/* Name */}
          <div>
            <h1 className="title-text TextColorInHeader  text-center ">
            Matías Quiroga
            </h1>
          </div>
          {/* Name */}

          {/* Job position */}
          <div>
            <h5 className="title-text TextColorInHeader text-center">
              Desarrollador web Full Stack
            </h5>
          </div>
          {/* Job position */}

          {/* Icons component */}
          <Icons />
          {/* /Icons component */}

          {/* Buttons */}
          <div className="d-flex justify-content-center  pt-3">
            {/* Download cv button  */}
            <a href={curriculum} download="cv-MatiasQuiroga">
              <button
                id="DownloadButton"
                type="button"
                className="btn btn-light "
              >
                <BsCloudDownload /> Curriculum vitae
              </button>
            </a>
            {/* /Download cv button  */}
          </div>
          {/* /Buttons */}

          {/* Down arrow */}
          <div className=" arrow bounce">
            <RiArrowDropDownLine />
          </div>
          {/* Down arrow */}
        </div>
      </div>
    </div>
  );
}

export default Header;
