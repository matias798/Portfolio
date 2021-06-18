import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";


// Local styles
import "./../styles/Contact.css";
import "./../App.css";

function Contact() {
  function sendEmail(e) {
    e.preventDefault(); //prevent default action from sending the form

    /* Using emailjs api for sending data to personal e-mail*/
    emailjs
      /* Data required by email js for detecting my account*/
      .sendForm(
        "service_7gn2tfj",
        "template_q2bjryy",
        e.target,
        "user_3YMrfoLjO2lTYtxPe25n9"
      )
      .then(
        (result) => {
          /* Sweet alert triggered when the message has been sent */
          Swal.fire({
            position: "center",
            icon: "success",
            title: "El mensaje fue enviado!", //message displayed
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="ContactBackgroundColor ">
<div className="d-flex justify-content-center">

<div className="arrow-down"></div>
</div>
 <form onSubmit={sendEmail}>
        {/* Form inputs */}
        <div className="form-group m-5">
          {/* Title of component */}
          <h3 id="contactTitle">¡Contactame!</h3>
          {/* Title of component */}

          {/* Email */}
          <div className="m-3">
            <input
              type="email"
              className="form-control"
              name="user_email"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          {/* /Email */}

          {/* Phone */}
          <div className="m-3">
            <input
              type="text"
              className="form-control"
              name="user_phone"
              placeholder="Telefono"
            />
          </div>
          {/* /Phone */}

          {/* Full name input */}
          <div className="m-3">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Nombre "
            />
          </div>
          {/* /Full name input */}


          {/* Custom message */}
          <div className="m-3">
            <textarea
              cols="25"
              className="form-control"
              name="message"
              placeholder="Escribe un mensaje"
            />
          </div>
          {/* Custom message */}


          {/* Submit button */}
          <div className="d-flex justify-content-end">
            <button className="btn btn-light m-3">Enviar</button>
          </div>
          {/* Submit button */}
        </div>
        {/* inputs formularios */}
      </form>

      <script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    </div>
  );
}

export default Contact;
