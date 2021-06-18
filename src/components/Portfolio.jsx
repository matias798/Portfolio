import React from "react";
import { connect } from "react-redux";
import Swal from "sweetalert2"; //importing sweet alert



// Local style
import "./../styles/Portfolio.css";

/* Function of sweet alert used for showing more info of the websites */
function modal(Portfolio) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn buttonWebsite", // Button that redirects to website
      cancelButton: "btn btn btn-light buttonGitHub ", // Button redirects to GitHub proyect
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      imageUrl: `${Portfolio.image}`, //Image displayed
      imageHeight: 250,
      imageAlt: `${Portfolio.title}`,
      width: 700,
      padding: "3em",
      title: `${Portfolio.title}`,
      showClass: {
        popup: "animate__animated animate__fadeInDown", // Animate.css when opening effects
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp", // Animate.css  when closing effects
      },
      showCancelButton: true,
      confirmButtonText: "Ver sitio web",
      cancelButtonText:  `Ver proyecto `,
      reverseButtons: true,
    })
    .then((result) => {
      /* when you click confirm button redirects to website */
      if (result.isConfirmed) {
        window.location = `${Portfolio.urlWeb}`;
      } else if (
        /* Clicking cross ( x ) button closes the window */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        /* when you click cancel it redirects to GitHub */

        window.location = `${Portfolio.urlGit}`;
      }
    });
}

const Portfolio = ({ Portfolio }) => (
  <div id="PortfolioBackground ">
    {/*  Title  */}
    <h3 className=" touppercase PortfolioTitle m-5">Portafolio</h3>

    {/* Section of cards displaying websites */}
    <section className="portfolioSection rounded m-3">
      {Portfolio.map((Portfolio, j) => (
        //the duller color is a boolean used for having different colors in the background of the image
        <div
          key={j}
          className={`  imageContainer 
          ${Portfolio.dullerColor ? "NavyBlue" : "StarBlue"}`}
        >
          <a
            className="d-flex justify-content-center"
            href={Portfolio.urlWeb}
            target="a_blank"
          >
            <img
              className={`image rounded slider__content--item `}
              src={`${Portfolio.image}`}
              alt={`${Portfolio.title}`}
            />
          </a>

         
         {/* Know more text, on click shows more info*/}
          <div
            onClick={() => {
              modal(Portfolio);
            }}
            id="moreInfo"
            className="title-text text-center p-2 "
          >
            <h5>+ Saber mas</h5>
          </div>

        </div>
      ))}
    </section>
  </div>
);
// Function that handles the state from the store
const mapStateToProps = (state) => ({
  Portfolio: state.Portfolio,
});

export default connect(mapStateToProps, {})(Portfolio);
