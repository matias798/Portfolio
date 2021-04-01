import React from 'react';
import PogrammingImage from './../images/Programming-rafiki.png';

// Booststrap styles
import 'bootstrap/dist/css/bootstrap.min.css'
// Local style
import './../styles/Header.css';


function Header() {
  return (

    <div className='Background'>
        <img src={PogrammingImage} className='PogrammingImage' alt="logo" />
    </div>
  );
}

export default Header;
