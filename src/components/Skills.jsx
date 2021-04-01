import React from 'react';
// Booststrap styles
import 'bootstrap/dist/css/bootstrap.min.css'

// React icons
import {IconContext} from "react-icons"
import { SiHtml5 } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiNodeDotJs } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";




function Skills() {
  return (
    <div>
     <h3 className='text-center'>skills</h3> 


    <IconContext.Provider value={{size:"5em" , padding:"2"}} classname="card" >

<div className='card d-flex justify-content-center '>
  
      <div className='d-flex justify-content-center m-3'>
     <SiHtml5 className='m-3 text-warning'/>
     <SiGit  className='m-3 text-danger'/>
     <SiBootstrap className='m-3 btn-primary' />

     </div>

      <div className='d-flex justify-content-center m-3'>

     <SiNodeDotJs className='m-3 text-success' />
     <SiMysql  className='m-3 text-info'/>
     <SiReact  className='m-3 text-primary'/>
     </div>


     </div>

    </IconContext.Provider>
    </div>
  );
}

export default Skills;
