import React from 'react';
import Logo1 from '../img/Logosincachito.png';
import './StartE.css';


function Start(){
    return(
< >

       <h1 className="titulo">Bienvenido a PetSociety</h1>

       
      <img className="imagen" style={{marginTop:"50px"}} src={Logo1}/>
    

       <div className="Boton">
        <button type="button" style={{marginTop:"60px"}} className="btn btn-primary btn-lg">Start</button>
               </div>
        


     </>
     
    );

    
}
export default Start;