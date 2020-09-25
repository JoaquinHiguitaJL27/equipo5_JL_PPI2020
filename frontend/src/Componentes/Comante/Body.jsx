import React from 'react';
import Logo1 from '../Paginas/img/Logosincachito.png';
import '../Paginas/App.css';


function Body(){
    return(
< >

       <h1 className="titulo">Bienvenido a PetSociety</h1>

       
      <img className="container" style={{marginTop:"50px"}} src={Logo1}/>
    

       <div className="Boton">
        <button type="button" style={{marginTop:"60px"}} className="btn btn-primary btn-lg">Start</button>
               </div>
        


     </>
     
    );

    
}
export default Body;