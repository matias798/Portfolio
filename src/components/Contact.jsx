import React from 'react';

function Contact() {




  return (
    <div id='Contact' >
        
        
    

<form>
  {/* inputs formularios */}
    <div class="form-group m-5">

      {/* Title */}
    <h3 className='PortfolioTitle'>Contactame!!</h3>
      {/* /Title */}


{/* Email */}
      <div className='m-3'>
      <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Ingresa tu email"/>
      </div>
{/* /Email */}



{/* Telefono */}
    <div className='m-3'>
    <input type="text" class="form-control" id="Telefono"  placeholder="Ingresa tu telefono"/>
    </div>
{/* Telefono */}



{/* Nombre completo */}
<div className='m-3'>
    <input type="text" class="form-control" id="Nombre completo"  placeholder="Ingresa tu nombre completo"/>
    </div>
{/* Nombre completo */}



{/* Nombre completo */}
<div className='m-3'>
    <textarea cols='25'  class="form-control" id="Nombre completo"  placeholder="Escribe un mensaje"/>
    </div>
{/* Nombre completo */}



{/* Button */}
<div class="d-flex justify-content-end">

    <button class="btn btn-secondary m-3" >Success</button>  
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
