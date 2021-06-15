import React from 'react';
import Ramedeco from './../images/ramedeco.png';
import RamedecoReact from './../images/rameDecoReact.png';
import ZaniDashboard from './../images/zannidashboard.png';
import Zanni from './../images/zanni.png';
import Swal from 'sweetalert2'

// Local style
import './../styles/Portfolio.css'

function modal (image){
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-info m-2',
    cancelButton: 'btn btn btn-success'
  },
  buttonsStyling: false
})

swalWithBootstrapButtons.fire({

		imageUrl: `${image.image}`,
		imageHeight: 250,
		imageAlt: 'A tall image',
		width: 900,
		padding: '3em', 
	  title: `${image.titulo}`,
	  html:`${image.description}`,
	  showClass: {
		popup: 'animate__animated animate__fadeInDown'
	  },
	  hideClass: {
		popup: 'animate__animated animate__fadeOutUp'
},
  showCancelButton: true,
  confirmButtonText: 'Ver sitio web',
  cancelButtonText: 'ver proyecto <i class="fa fa-github" aria-hidden="true"></i>',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
		
		window.location = `${image.urlWeb}`;

	} else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    
	window.location = `${image.urlGit}`;

  }
})

}	
function Portfolio() {

  const images = [
		{

			titulo: 'Rame deco dashboard ',
			description:  
		    'Proyecto realizado en Reactjs utilizando metodologias agiles en curso de digital house,'+
		    ' este es un panel de usuario administrador el cual tendra acceso a los datos de'+
			' la pagina de una forma mas organizada.' ,
			image: RamedecoReact,
			urlWeb:'https://rame-deco-react-portfolio.herokuapp.com',
			urlGit:'https://github.com/matias798/rame-deco-react-portfolio'


			
		},
		{
			titulo: 'Rame deco',
			description: 
			' Proyecto realizado en NodeJs y express utilizando metodologias agiles en curso de digital house,'+
		    ' esta pagina tiene como propuesta para el usuario el diseño de su hogar y la compra de articulos para este.'+
			' Esta pagina cuenta con diferentes tipos usuarios y en caso de ser el administrador, se dispondra de la posibilidad' +
			' de un CRUD para modificar los productos de la pagina' ,
			image: Ramedeco,
			urlWeb:'https://ramedeco.herokuapp.com',
			urlGit:'https://github.com/matias798/rame-deco-deploy'


		},
		{
			titulo: 'Zanni inmobiliaria',
			description: 
			' Pagina de inmobiliaria realizada individualmente en Reactjs, '+
		    ' la cual tiene su informacion almacenada en base de datos de mysql y sus imagenes en cloudinary.'+
			' El proyecto consume una api la cual me permitira realizar un CRUD de las propiedades y el consumo para mostrar las mismas.' ,
			image: Zanni,
			urlWeb:'https://zanni-f8324.web.app/',
			urlGit:'https://github.com/matias798/zani-react'


		},
    {
			titulo: 'Crud inmobiliaria',
			description: 
			' Proyecto el cual genera un json que sera consumido por '+
			' la pagina de la inmobiliaria, este cuenta con una validacion de usuarios'+ 
			' y la posibilidad de crear, leer, editar y borrar propiedades.'+
			'<button className="btn-primary">f </button',
			image: ZaniDashboard,
			urlWeb:'https://api-zanni.herokuapp.com/admin/incia-sesion',
			urlGit:'https://github.com/matias798/zanni-inmobiliaria'

		}
]

return (
    <div id="Portfolio " className='background '>
<h3 className=' touppercase  text-info PortfolioTitle '>Portafolio</h3>

<section className='portfolioSection '>

{images.map((image) => (
<div key={image.titulo} className='slider__content--item'>

<img onClick={()=>{modal(image)}} className='image rounded' src={image.image}  alt={image.image} />

</div>
      ))} 
 
</section>
<div className='bottomTagg'></div> 

    </div>

    
  );
}

export default Portfolio;
