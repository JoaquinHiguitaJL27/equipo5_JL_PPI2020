import React from 'react';
import Privacidad from '../img/Privacidad.png';
import Seguridad from '../img/Seguridad.png';
import Notificaciones from '../img/Notificaciones.png';
import InvitarAmigos from '../img/Invitaramigos.png';
import Informacion from '../img/Información.png';
import Cuenta from '../img/Cuenta.png';
import Ayuda from '../img/Ayuda.png';
import Usuario from '../img/Usuario.jpeg';
import Logo from '../img/Logo1.png';
import {Link} from 'react-router-dom'; 
import './Configuraciones.css';

function Configuraciones () {
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
    

    <div className="container text-center">
  
    <img className="mb-2 mt-2 logoconfig" src={Logo} />
    <h1 className="tituloconfig mt-5 mb-5">Configuraciones</h1>

<button type="button" class="btn btn-primary btn-lg btn-block">Usuario</button>
<button type="button" class="btn btn-secondary btn-lg btn-block">Notificaciones</button>
<button type="button" class="btn btn-primary btn-lg btn-block">Privacidad</button>
<button type="button" class="btn btn-secondary btn-lg btn-block">Seguridad</button>
<button type="button" class="btn btn-primary btn-lg btn-block">Cuenta</button>
<button type="button" class="btn btn-secondary btn-lg btn-block">Ayuda</button>
<button type="button" class="btn btn-primary btn-lg btn-block">Información</button>
<button type="button" class="btn btn-secondary btn-lg btn-block">Invitar amigos</button>

</div>
  
      
        </>
        );
}

export default Configuraciones;