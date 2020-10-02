import React from 'react';
import Logo1 from '../img/Logosincachito.png';
import './StartE.css';


function Start(){
    return(
        <>

<div className="container text-center">
       <h1 className="Bienvenido mt-5 mb-5">Bienvenido a PetSociety</h1>

       
      <img alt="responsive" className="imagenbienvenido mt-3 mb-4" src={Logo1}/>
    

       <div className="Botonbienvenido mt-5 mb-5">
        <button type="button"  className="btn btn-primary btn-lg">Start</button>
               </div>
               </div>



</>
    );

    
}
export default Start;