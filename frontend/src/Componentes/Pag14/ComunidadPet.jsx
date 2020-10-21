import React from 'react';
import Logo from '../img/Logo1.png';
import  './ComunidadPet.css';
import perfil from '../img/perfil.png';
import {Link} from 'react-router-dom'; 

function ComunidadPet(){
    return(
< >
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
          <a className="dropdown-item" href="#/">Registra a tus mascotas</a>
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
        <Link to="/ComunidadPet" class="nav-link">Comunidad<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link to="/Calificacion" class="nav-link">Calificación<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link to="/Configuraciones" class="nav-link">Configuración<span class="sr-only">(current)</span></Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-light text-white my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        <div className="container">
<div className="jumbotron p-4 p-md-5 text-white rounded bg-dark mt-5">
    <div className="col-md-6 px-0">
      <h1 className="ki text-left display-4 font-italic"><font className="vertical-align: inherit;"><font className="vertical-align: inherit;">Título de una publicación de blog más extensa</font></font></h1>
      <p className="lead my-3"><font className="vertical-align: inherit;"><font className="vertical-align: inherit;">Varias líneas de texto que forman el lede, informando a los nuevos lectores de forma rápida y eficaz sobre lo más interesante de los contenidos de este post.</font></font></p>
      <p className="lead mb-0"><a href="#" className="text-white font-weight-bold"><font className="vertical-align: inherit;"><font className="vertical-align: inherit;">Sigue leyendo...</font></font></a></p>
    </div>   
  </div>    
</div>
<div class="sugerencias row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 flex-column position-static">
          <img className="rounded-circle d-inline" width="32" height="32" src={perfil} />
          <h5 className="mb-2 text-primary alLado">Perfil</h5> 
          <h6 className="mb-1 text-muted">30 Sept 2020</h6>
          <h3 className="mb-0.5"><font className="vertical-align: inherit;"><font className="vertical-align: inherit;">Publicación destacada</font></font></h3>
    <div className="contenedor2">
          <p class="card-text mb-auto"><font className="vertical-align: inherit;"><font className="vertical-align: inherit;">Esta es una tarjeta más amplia con texto de apoyo a continuación como una introducción natural a contenido adicional; sisi vale, como va todo¡?</font></font></p>
    </div>
        </div>
</div>
     </>
     
    );

    
}
export default ComunidadPet;





        