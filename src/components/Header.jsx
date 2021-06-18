import React from "react";


// Curriculum file route
import curriculum from "./../files/cv-MatiasQuiroga.pdf";



import { BsCloudDownload } from "react-icons/bs";
/* /Icons*/

/* Imported for animating the header on load */
import "animate.css";

// Booststrap styles
import "bootstrap/dist/css/bootstrap.min.css";



// Local styles
import "./../App.css";
import "./../styles/Header.css";

function Header() {


 
  return (
    <div>

    <div
      id="Home"
      className="  Background HeaderImage"
    >
      <div className="headerText animate__animated animate__backInUp">
        <div className="d-flex align-items-start" >
        <h1 className="title-text TextColorInHeader  text-center ">Matias Quiroga</h1>
        </div >
        
        <div >
        <h4 className="title-text TextColorInHeader text-center">Desarrollador web Full Stack</h4>
        </div >

       
        {/* Buttons */}
        <div className="d-flex justify-content-center  pt-3">

          {/* Download cv button  */}
          <a href={curriculum} download="cv-MatiasQuiroga">


            <button id="DownloadButton" type="button" className="btn  btn-light ">
              < BsCloudDownload /> Curriculum vitae
            </button>
          </a>
          {/* /Download cv button  */}
        </div>
        {/* /Buttons */}

       
      </div> 
      <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
    </div>
    </div>
  );
}

export default Header;
