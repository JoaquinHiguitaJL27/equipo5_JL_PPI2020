import React from 'react';
import Logo1 from '../img/Logosincachito.png';
import './InicioE.css';


function Inicio() {
  return (
    <>
      <h1 class="tituloinicio">Bienvenido a PetSociety</h1>

      <img className="container" style={{marginTop:"25px"}} src={Logo1} />

      <form className="container" style={{marginTop:"25px"}}>
        <div className="form-group ">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <div className="Boton2">
          <button type="submit" class="btn btn-primary">Ingresar</button>
        </div>
      </form>
      <br></br>
      <h3 className="O">O</h3>
      <div className="Boton2">
        <button type="button" class="btn btn-primary">Registarse</button>
      </div>
      <br></br>
      <div className="Boton3">
        <button type="button" class="btn btn-primary">Ingresar con Facebook</button>
      </div>
      <br></br>
      <div className="Boton4">
        <button type="button" class="btn btn-danger ">Ingresar con Gmail</button>
      </div>


    </>
  );
}
export default Inicio;