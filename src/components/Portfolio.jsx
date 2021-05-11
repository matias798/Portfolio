import React from 'react';
import PogrammingImage from './../images/Portfolio.png';


// Local style
import './../styles/Portfolio.css'

function Portfolio() {

  const images = [
		{
			id: 'd',
			title: PogrammingImage,
		},
		{
			id: 'ddd',
			title: PogrammingImage,
		},
		{
			id: 'ddd',
			title: PogrammingImage,
		},
    {
			id: 'ddd',
			title: PogrammingImage,
		}
]

return (
    <div id="Portfolio" className='background '>




<h3 className=' touppercase  text-info PortfolioTitle'>Portafolio</h3>



<section className='portfolioSection '>

{images.map((image) => (
        <div key={image.id} className='slider__content--item'>

{/* <Link to ={`/detalle/${image.id}`}> */}

          <img className='image rounded' src={image.title}  alt={image.title} />
        
          <p id='text' className='slider-description aligin-self-center'>{image.title}</p>

{/* </Link> */}
        </div>
      ))} 
 
</section>
<div className='bottomTagg'></div> 
 
    </div>

    
  );
}

export default Portfolio;
