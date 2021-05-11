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
        <Link className="nav-link m-1  " to="Home" spy={true} smooth={true}><p><AiOutlineHome/></p></Link>

      </li>
      <li className="nav-item">
        <Link className="nav-link m-1 " to="Portfolio" spy={true} smooth={true}><p>Portfolio</p></Link>
     
      </li>
      <li className="nav-item">
      <Link className="nav-link m-1 " to="Skills" spy={true} smooth={true}><p>Conocimientos</p></Link>
 
      </li>
    </ul>
    
  </div>
  
</nav>
  );
}

export default Menu;
