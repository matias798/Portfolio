import React from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2'

function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_7gn2tfj', 'template_q2bjryy', e.target, 'user_3YMrfoLjO2lTYtxPe25n9')
      .then((result) => {

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El mensaje fue enviado!',
          showConfirmButton: false,
          timer: 1500
        })
      
      
      
        }, (error) => {
          console.log(error.text);
      });
  }



  return (
    <div id='Contact' >
        
        
    

<form onSubmit={sendEmail}>
  {/* inputs formularios */}
    <div className="form-group m-5">

      {/* Title */}
    <h3 className='PortfolioTitle'>Contactame!!</h3>
      {/* /Title */}


{/* Email */}
      <div className='m-3'>
      <input type="email" className="form-control" name='user_email' aria-describedby="emailHelp" placeholder="Ingresa tu email"/>
      </div>
{/* /Email */}



{/* Telefono */}
    <div className='m-3'>
    <input type="text" className="form-control" name='user_phone'  placeholder="Ingresa tu telefono"/>
    </div>
{/* Telefono */}



{/* Nombre completo */}
<div className='m-3'>
    <input type="text" className="form-control" name='name'  placeholder="Ingresa tu nombre completo"/>
    </div>
{/* Nombre completo */}



{/* Nombre completo */}
<div className='m-3'>
    <textarea cols='25'  className="form-control" name='message'  placeholder="Escribe un mensaje"/>
    </div>
{/* Nombre completo */}



{/* Button */}
<div className="d-flex justify-content-end">

    <button className="btn btn-secondary m-3" >Success</button>  
    </div>
{/* Button */}


      </div>
  {/* inputs formularios */}





</form>



<script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>

    </div>
  );
}

export default Contact;
