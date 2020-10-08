import React from 'react';
import Logo1 from '../img/Logosincachito.png';
import fondo from '../img/fondo.png';
import './StartE.css';
import {Link} from 'react-router-dom'; 

function Start(){
    return(
        <>

<div className="container text-center">
       <h1 className="Bienvenido mt-5 mb-5">Bienvenido a PetSociety</h1>

       
      <img className="imagenbienvenido mt-3 mb-4" src={Logo1}/>
    

       <div className="Botonbienvenido mt-5 mb-5">
           
        <Link to="/inicio" role="button" className="btn btn-primary btn-lg">Start</Link>

               </div>
               </div>

</>
    );

    
}
export default Start;