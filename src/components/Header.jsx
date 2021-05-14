import {Link} from 'react-scroll'
import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2'

/* Icons*/
 import { SiWhatsapp } from "react-icons/si";
 import { SiGithub } from "react-icons/si";
 import { SiGmail } from "react-icons/si";
 import { TiSocialLinkedin } from "react-icons/ti";

/* /Icons*/
import 'animate.css'



// Booststrap styles
import 'bootstrap/dist/css/bootstrap.min.css'

// Local style
import './../styles/Header.css';


function Header() {


  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Copiaste el email!',
      showConfirmButton: false,
      timer: 1500
    })

  };


  return ( 

  <div id='Home' className='animate__animated animate__backInUp  Background HeaderImage'>


  <div className='headerText' >
    
 <h1 className="title-text text-center">Matias Quiroga</h1>
<h4 className="title-text text-center">Programador web</h4>
      
{/* Icons */}
<div className='d-flex justify-content-center'>

<a href='https://wa.me/5493415638192?text=Estoy%20interesado%20en%20comunicarme%20con%20vos'rel="noopener noreferrer" target="_blank">
<div className='p-3 headerIcons '><SiWhatsapp/></div>
</a>

<a href='https://github.com/matias798' rel="noopener noreferrer" target="_blank">
<div className='p-3 headerIcons '><SiGithub/></div>
</a>
         

<div className='p-3 headerIcons' onClick={copyToClipboard} ><SiGmail/></div>


<a href='https://www.linkedin.com/feed/' rel="noopener noreferrer" target="_blank">

<div className='p-3 headerIcons  '><TiSocialLinkedin/></div> 
</a>

</div>
{/* /Icons */}

{/* Buttons */}
 <div className="d-flex flex-row flex-wrap pt-3">
                             
  {/* Contact me button  */}
  <Link className="nav-link" to="Contact" spy={true} smooth={true}>
  <button type="button" className="btn btn-info " >Contactame!</button>
  </Link>
  {/* /Contact me button  */}

  {/* Download cv button  */}
  <Link className="nav-link " to="Contact" spy={true} smooth={true}>
   <button type="button" className="btn  btn-info ">Descarga cv</button>
    </Link>

  {/* /Download cv button  */}

</div>
{/* /Buttons */}

{/* text to copy when you click the email button */}
<form>
        <textarea className='textareaHeader'
        readOnly
          ref={textAreaRef}
          value='matiasquiroga584@gmail.com'
        />
      </form>

</div>





</div>);
  }

export default Header;
