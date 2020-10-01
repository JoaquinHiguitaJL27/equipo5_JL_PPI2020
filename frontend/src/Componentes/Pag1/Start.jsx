import React from 'react';
import Logo1 from '../img/Logosincachito.png';
import './StartE.css';


function Start(){
    return(
< >
<div classname="fondo">
       <h1 className="Bienvenido">Bienvenido a PetSociety</h1>

       
      <img className="imagenbienvenido" style={{marginTop:"50px"}} src={Logo1}/>
    

       <div className="Botonbienvenido">
        <button type="button" style={{marginTop:"60px"}} className="btn btn-primary btn-lg">Start</button>
               </div>
        

</div>
     </>
     
    );

    
}
export default Start;