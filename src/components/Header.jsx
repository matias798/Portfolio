import { Link } from "react-scroll";
import React, { useRef, useState } from "react";
import Swal from "sweetalert2";

/* Icons*/
import { SiWhatsapp } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { TiSocialLinkedin } from "react-icons/ti";
/* /Icons*/

/* Imported for animating the header on load */
import "animate.css";

// Booststrap styles
import "bootstrap/dist/css/bootstrap.min.css";

// Local styles
import "./../styles/Header.css";

function Header() {
  /* States */
  const [copySuccess, setCopySuccess] = useState(""); // state changes when we click the email
  const textAreaRef = useRef(null);

  /* Function used to copy the email from the gmail icon */
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");

    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();

    /* sweet alert used when the user copied the email*/
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Copiaste el email!", //custom text
      showConfirmButton: false,
      timer: 1500,
    });
  }
  /* Function used to copy the email from the gmail icon */

  return (
    <div
      id="Home"
      className="animate__animated animate__backInUp  Background HeaderImage"
    >
      <div className="headerText">
        <h1 className="title-text text-center">Matias Quiroga</h1>
        <h4 className="title-text text-center">Desarrollador web Full Stack</h4>

        {/* Icons Container */}
        <div className="d-flex justify-content-center">
          {/* /Redirects to personal Whatsapp */}

          <a
            className="IconsContainer"
            id="whatsapp"
            href="https://wa.me/5493415638192?text=Estoy%20interesado%20en%20comunicarme%20con%20vos"
            rel="noopener noreferrer"
            target="_blank"
          >
            {/* Whatsapp Icon*/}

            <div className="p-3 m-1 headerIcons ">
              <SiWhatsapp />
            </div>
            {/* /Whatsapp Icon*/}
          </a>

          {/* /Redirects to personal Whatsapp */}

          {/* Redirects to personal GitHub */}
          <a
            className="IconsContainer"
            id="Github"
            href="https://github.com/matias798"
            rel="noopener noreferrer"
            target="_blank"
          >
            {/* GitHub Icon*/}
            <div className="p-3 m-1 headerIcons ">
              <SiGithub />
            </div>
            {/* /GitHub Icon*/}
          </a>
          {/* /Redirects to personal GitHub */}

          {/* Copies the email */}
          <div id="Gmail" className="IconsContainer " onClick={copyToClipboard}>
            {/* Gmail Icon*/}

            <div className="p-3 m-1 headerIcons ">
              {" "}
              <SiGmail />
            </div>
            {/* /Gmail Icon*/}
          </div>
          {/* /Copies the email */}

          {/* Redirects to personal linked in */}
          <a
            className="IconsContainer"
            id="linkedIn"
            href="https://www.linkedin.com/in/matias-quiroga-"
            rel="noopener noreferrer"
            target="_blank"
          >
            {/* linked In Icon*/}
            <div className="Icons" className="p-3 m-1 headerIcons  ">
              <TiSocialLinkedin />
            </div>
            {/* /linked In Icon*/}
          </a>
          {/* Redirects to linked in */}
        </div>
        {/* /Icons Container */}

        {/* Buttons */}
        <div className="d-flex flex-row flex-wrap pt-3">
          {/* Contact me button redirects to contact me component */}
          <Link className="nav-link" to="Contact" spy={true} smooth={true}>
            <button type="button" className="btn btn-info ">
              Contactame!
            </button>
          </Link>
          {/* Contact me button redirects to contact me component */}

          {/* Download cv button  */}
          <Link className="nav-link " to="Contact" spy={true} smooth={true}>
            <button type="button" className="btn  btn-info ">
              Descarga cv
            </button>
          </Link>
          {/* /Download cv button  */}
        </div>
        {/* /Buttons */}

        {/* text to copy when you click the email button */}
        <form>
          <textarea
            className="textareaHeader"
            readOnly
            ref={textAreaRef}
            value="matiasquiroga584@gmail.com"
          />
        </form>
      </div>
    </div>
  );
}

export default Header;
