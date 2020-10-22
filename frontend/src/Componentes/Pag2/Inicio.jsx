import React from 'react';
import Logo1 from '../img/Logosincachito.png';
import FB  from '../img/IconFB.png';
import GM from '../img/IconGM.png';
import './InicioE.css';
import {Link} from 'react-router-dom'; 

function Inicio() {
  return (
    <>
      <h1 class="tituloinicio mt-4">Bienvenido a PetSociety</h1>

<div className="card shadow-lg p-3 mb-4 container">

<center>
      <img className="container" style={{width:"15rem"}} src={Logo1} />
      </center>


      <form className="container" style={{marginTop:"25px"}}>
        <div className="form-group ">
          <label for="exampleInputEmail1">Correo electronico</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <small id="emailHelp" class="form-text text-muted">Nunca compartiremos su correo electrónico con nadie más.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Contraseña</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Recuerdame</label>
        </div>
        <div className="Boton2">
          <Link to="/abrebocas" type="submit" class="btn btn-primary">Ingresar</Link>
        </div>
      </form>
      <br></br>
      <h3 className="O">O</h3>
      <div className="Boton2">
        <Link to="/registrarse" role="button" class="btn btn-primary">Registarse</Link>
      </div>
      <br></br>
     
      <div className="Boton3">
      <center>
        <button type="button" className="btn btn-primary" style={{display:"flex"}}>
          <img src={FB} style={{marginRight:"20px"}}width="25px"></img>
          Ingresar con Facebook</button>
          </center>
      </div>
      
      <br></br>
      <div className="Boton4">
        <button type="button" className="btn btn-danger">
        <img src={GM} style={{marginRight:"20px"}}width="25px"></img>
          Ingresar con Gmail</button>
      </div>
</div>

    </>
  );
}
export default Inicio;