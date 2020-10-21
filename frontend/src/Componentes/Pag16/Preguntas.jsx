import React from 'react';
import Logo from '../img/Logo.png';
import './Preguntas.css';
import {Link} from 'react-router-dom'; 

function Preguntas () {
    return(
          <>
     <nav className="navbar navbar-expand-xl navbar-dark bg-primary text-white">
  <Link to="/abrebocas" className="navbar-brand">
  <img alt="responsive" src={Logo} width="30" height="30" class="d-inline-block align-top mr-2" loading="lazy" />
    PetSociety</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Productos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/ProductosP" className="dropdown-item">Perros</Link>
          <Link to="/ProductosG" className="dropdown-item">Gatos</Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="#/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Mis Mascotas
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/Mismascotas" className="dropdown-item" href="#/">Registra a tus mascotas</Link>
        </div>
      </li>
      <li class="nav-item active">
        <Link to="/Calendario" class="nav-link" >Calendario<span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="#/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Consejos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/ConsejosP" className="dropdown-item">Perros</Link>
          <Link to="/ConsejosG" className="dropdown-item">Gatos</Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="#/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Adopciones
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/AdopcionP" className="dropdown-item">Perros</Link>
          <Link to="/AdopcionG" className="dropdown-item">Gatos</Link>
        </div>
      </li>
      <li class="nav-item active">
        <Link to="/Calificacion" class="nav-link">Calificación<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link to="/Configuraciones" class="nav-link">Configuración<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
                    <Link to="/ComunidadPet" class="nav-link" >Comunidad<span class="sr-only">(current)</span></Link>
                        </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-light text-white my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

        <div className="container-fluid text-center">
        <h5 className="mt-4 mb-3">Antes de continuar, necesitamos la siguiente información</h5>
        <h2 className="text-primary">¿Cuántas mascotas tienes?</h2>
        <div class="custom-control custom-switch d-inline-block mt-4 mb-3 mr-3">
  <input type="checkbox" class="custom-control-input hola" id="customSwitch1" />
  <label class="custom-control-label" for="customSwitch1">1</label>
        </div>
        <div class="custom-control custom-switch d-inline-block mt-4 mb-3 mr-3">
  <input type="checkbox" class="custom-control-input hola" id="customSwitch2" />
  <label class="custom-control-label" for="customSwitch2">2</label>
        </div>
        <div class="custom-control custom-switch d-inline-block mt-4 mb-3 mr-3">
  <input type="checkbox" class="custom-control-input hola" id="customSwitch3" />
  <label class="custom-control-label" for="customSwitch3">3</label>
        </div>
        <div class="custom-control custom-switch d-inline-block mt-4 mb-3 mr-3">
  <input type="checkbox" class="custom-control-input hola" id="customSwitch4" />
  <label class="custom-control-label" for="customSwitch4">4</label>
        </div>
        <div class="custom-control custom-switch d-inline-block mt-4 mb-3 mr-3">
  <input type="checkbox" class="custom-control-input hola" id="customSwitch5" />
  <label class="custom-control-label" for="customSwitch5">5</label>
        </div>
        <div class="custom-control custom-switch d-block mr-3 mt-2 mb-3">
  <input type="checkbox" class="custom-control-input hola" id="customSwitch6" />
  <label class="custom-control-label" for="customSwitch6">Tengo más</label>
        </div>
        </div>

        </>
    );
}

export default Preguntas;

