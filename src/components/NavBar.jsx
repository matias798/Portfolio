import Swal from "sweetalert2";
import React, { useRef } from "react";

/* Local styles */
import "./../styles/Menu.css";

/* Icons*/
import { SiWhatsapp } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { TiSocialLinkedin } from "react-icons/ti";



function Menu() {

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
    <section className=" navbar navbar-expand-lg NavbarBackgroundColor animate__animated animate__backInLeft   ">
     {/* Icons Container */}
     <div id="containerOfAllIcons" className="ml-auto">
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
            <div className="Icons p-3 m-1 headerIcons  ">
              <TiSocialLinkedin />
            </div>
            {/* /linked In Icon*/}
          </a>
          {/* Redirects to linked in */}
        </div>
        {/* /Icons Container */}

          {/* text to copy when you click the email button */}
          <form>
          <textarea
            className="textareaHeader"
            readOnly
            ref={textAreaRef}
            value="matiasquiroga584@gmail.com"
          />
        </form>

    </section>
  );
}

export default Menu;
