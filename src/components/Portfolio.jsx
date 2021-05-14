import React from 'react';
import Ramedeco from './../images/ramedeco.png';
import RamedecoReact from './../images/rameDecoReact.png';
import ZaniDashboard from './../images/zannidashboard.png';
import Zanni from './../images/zanni.png';
import Swal from 'sweetalert2'


// Local style
import './../styles/Portfolio.css'
function modal (image,titulo,descripcion){

	Swal.fire({
		imageUrl: `${image}`,
		imageHeight: 250,
		imageAlt: 'A tall image',
		width: 900,
		padding: '3em',
	  title: `${titulo}`,
	  html:`${descripcion}`,
	  showClass: {
		popup: 'animate__animated animate__fadeInDown'
	  },
	  hideClass: {
		popup: 'animate__animated animate__fadeOutUp'
	  }
	})
}	
function Portfolio() {

  const images = [
		{

			id: 'Rame deco dashboard ',
			description:  
		    'Proyecto realizado en Reactjs utilizando metodologias agiles en curso de digital house,'+
		    ' este es un panel de usuario administrador el cual tendra acceso a los datos de'+
			' la pagina de una forma mas organizada.' ,
			title: RamedecoReact,
		},
		{
			id: 'Rame deco',
			description: 
			' Proyecto realizado en NodeJs y express utilizando metodologias agiles en curso de digital house,'+
		    ' esta pagina tiene como propuesta para el usuario el diseño de su hogar y la compra de articulos para este.'+
			' El proyecto cuenta con diferentes tipos usuarios y en caso de ser el administrador, se dispondra de la posibilidad' +
			'de un CRUD para modificar los productos de la pagina' ,
			title: Ramedeco,
		},
		{
			id: 'Zanni inmobiliaria',
			description: 
			' Pagina de inmobiliaria realizada individualmente en Reactjs, '+
		    ' la cual tiene su informacion almacenada en base de datos de mysql y sus imagenes en cloudinary.'+
			' El proyecto consume una api la cual me permitira realizar un CRUD de las propiedades y el consumo para mostrar las mismas.' ,
			title: Zanni,
		},
    {
			id: 'Crud inmobiliaria',
			description: 
			' Proyecto el cual genera un json que sera consumido por '+
			' la pagina de la inmobiliaria, este cuenta con una validacion de usuarios'+ 
			' y la posibilidad de crear, leer, editar y borrar propiedades.',
			title: ZaniDashboard,
		}
]

return (
    <div id="Portfolio" className='background '>
<h3 className=' touppercase  text-info PortfolioTitle'>Portafolio</h3>

<section className='portfolioSection '>

{images.map((image) => (
        <div key={image.id} className='slider__content--item'>

{/* <Link to ={`/detalle/${image.id}`}> */}

          <img onClick={()=>{modal(image.title,image.id,image.description)}} className='image rounded' src={image.title}  alt={image.title} />
        

{/* </Link> */}
        </div>
      ))} 
 
</section>
<div className='bottomTagg'></div> 
 





    </div>

    
  );
}

export default Portfolio;
