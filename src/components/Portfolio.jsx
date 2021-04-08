import React from 'react';
import PogrammingImage from './../images/Portfolio.png';


// Local style
import './../styles/Portfolio.css'

function Portfolio() {
  return (
    <div id="Portfolio" className='background '>




<div className='text-center touppercase bolder'>Portafolio</div>

    <section className='portfolioSection '>


 
<div><img src={PogrammingImage} className='image' alt="logo" /></div>
<div><img src={PogrammingImage} className='image' alt="logo" /></div> 
<div><img src={PogrammingImage} className='image' alt="logo" /></div>
<div><img src={PogrammingImage} className='image' alt="logo" /></div>
 
 
 </section>

<div className='bottomTagg'></div> 
 
    </div>

    
  );
}

export default Portfolio;
