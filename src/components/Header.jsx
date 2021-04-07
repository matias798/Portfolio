import React from 'react';
import {Link} from 'react-scroll'


// Booststrap styles
import 'bootstrap/dist/css/bootstrap.min.css'

// Local style
import './../styles/Header.css';


function Header() {
  return ( 


  <div id='Home' className='Background '>

  <div className='headerText' >
    
 <h1 className="title-text ">Matias Quiroga</h1>
      <h4 className="title-text ">Programador Full stack</h4>
      <div className="site-buttons">
      <div className="d-flex flex-row flex-wrap mt-2">
                             
  <Link className="nav-link" to="Contact" spy={true} smooth={true}>
  <button type="button" className="btn white p-2" >Contactame!</button>
  </Link>
                                
                                <button type="button" className="btn ml-3 white p-2">Descarga cv</button>
                            </div>
                    </div>
    
</div>







</div>
  );
  }

export default Header;
