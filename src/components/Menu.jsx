import React from 'react';
import {Link} from 'react-scroll'

import './../styles/Menu.css';
import { AiOutlineHome } from "react-icons/ai";


function Menu() {
  return (


    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarText">
    <ul className=" navbar-nav mr-auto ">
      <li className="nav-item active">
        <Link className="nav-link mx-2  " to="Home" spy={true} smooth={true}><h6><AiOutlineHome/></h6></Link>

      </li>
      <li className="nav-item">
        <Link className="nav-link mx-2 " to="Portfolio" spy={true} smooth={true}><h6>Portfolio</h6></Link>
     
      </li>
      <li className="nav-item">
      <Link className="nav-link mx-2 " to="Skills" spy={true} smooth={true}><h6>Conocimientos</h6></Link>
 
      </li>
    </ul>
    
  </div>
  
</nav>
  );
}

export default Menu;
