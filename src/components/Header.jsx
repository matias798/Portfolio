import React from 'react';
import {Link} from 'react-scroll'

/* Icons*/
 import { SiWhatsapp } from "react-icons/si";
 import { SiGithub } from "react-icons/si";
 import { SiGmail } from "react-icons/si";
 import { TiSocialLinkedin } from "react-icons/ti";

/* /Icons*/



// Booststrap styles
import 'bootstrap/dist/css/bootstrap.min.css'

// Local style
import './../styles/Header.css';


function Header() {
  return ( 

  <div id='Home' className=' Background HeaderImage'>


  <div className='headerText' >
    
 <h1 className="title-text text-center">Matias Quiroga</h1>
<h4 className="title-text text-center">Programador web</h4>
      
{/* Icons */}
<div className='d-flex justify-content-center'>
<div className='p-3 headerIcons '><SiWhatsapp/></div>
<div className='p-3 headerIcons '><SiGithub/></div>
<div className='p-3 headerIcons  '><SiGmail/></div>
<div className='p-3 headerIcons  '><TiSocialLinkedin/></div> 
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

</div>






</div>);
  }

export default Header;
