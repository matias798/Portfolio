import React from 'react';
import PogrammingImage from './../images/Programming-rafiki.png';

// Booststrap styles
import 'bootstrap/dist/css/bootstrap.min.css'

// Local style
import './../styles/Header.css';


function Header() {
  return ( 
  <div className='d-flex justify-content-around flex-wrap'>

  <div className='headerText' >
    



  <h1 className="title-text ">Matias Quiroga</h1>
      <h4 className="title-text ">Programador Full stack</h4>
      <div className="site-buttons">
                            <div className="d-flex flex-row flex-wrap mt-2">
                                <button type="button" className="btn  btn-outline-primary ">Contactame!</button>
                                <button type="button" className="btn bg-primary ml-3 ">Descargar cv</button>
                            </div>
                    </div>
    
</div>



<div>
<img src={PogrammingImage} className='PogrammingImage' alt="logo" />



</div>

</div>
  );
  }

export default Header;
