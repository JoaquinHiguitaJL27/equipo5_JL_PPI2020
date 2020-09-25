import React from 'react';
import './ConsejosPE.css';
import Logo from '../img/Logo1.png';
import ReactPlayer from 'react-player';

function ConsejosPerros(){
    return(
< >
<nav className="navbar navbar-expand-xl navbar-dark bg-primary text-white">
  <a className="navbar-brand" href="#">
  <img src={Logo} width="30" height="30" class="d-inline-block align-top mr-2" alt="responsive" loading="lazy" />
    PetSociety</a>
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
          <a className="dropdown-item" href="#">Perros</a>
          <a className="dropdown-item" href="#">Gatos</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Mis Mascotas
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Registra a tus mascotas</a>
        </div>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Calendario<span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Consejos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Perros</a>
          <a className="dropdown-item" href="#">Gatos</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Adopciones
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Perros</a>
          <a className="dropdown-item" href="#">Gatos</a>
        </div>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Calificación<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Configuración<span class="sr-only">(current)</span></a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-light text-white my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<br></br>
<br></br>
<div className="align-items-center text-center justify-content-center vh-100"> 
           <h1 className="text-center text-light bg-primary mt-1 mb-4"><b>Consejos</b></h1>
           <h5 className="text-center">¿Cómo bañar a un perro cachorro por primera vez?</h5>
           <ReactPlayer 
            url="https://www.youtube.com/watch?v=XmaN-m5rm6E"
            className="Video"
            controls
            /> 
            <a class="btn btn-primary mt-2" href="#" role="button">Más información</a>
            </div>
      
        


     </>
     
    );

    
}
export default ConsejosPerros;