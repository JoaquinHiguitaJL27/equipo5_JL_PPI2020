import React from 'react';
import Foto from '../img/foto_perfil.png';
import Photo from '../img/camara.png';
import User from '../img/user.png';
import Info from '../img/info.png';
import Logo from '../img/Logo1.png';
import {Link} from 'react-router-dom'; 
import './Perfil.css';

    function Perfil () {
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
          <Link to="/Mismascotas" className="dropdown-item">Registra a tus mascotas</Link>
          <Link to="/Calendario" class="dropdown-item" >Calendario</Link>
        </div>
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

          <div className="text-center container-fluid">
          <h1 className="bg-primary text-light mt-5 mb-3">Perfil de Petsociety</h1>
                <br></br>
          <img alt="description" src={Foto} className="rounded-circle perfil mb-4" />
  
<div class="input-group">

  <div class="input-group-prepend">
  <button class="btn btn00" type="button" id="inputGroupFileAddon01">
  <img src={Photo} className="imagen" />
  </button>
  </div>

  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile01"  lang="es" aria-describedby="inputGroupFileAddon01" />
    <label class="custom-file-label text-left" for="inputGroupFile01" data-browse="Elegir">Seleccionar archivo...</label>
  </div>

</div>

          <div className="contenedor text-center mt-3">
            <div className="text-left">

            <img src={User} className="imagen mb-4 mr-2" />
            <label className="text-muted texto">Nombre <label className="d-block texto1">Sebastián Parra Lopera</label></label>
            <br></br>
            <img src={Info} className="imagen mb-2 mr-2" />
            <label className="texto1 mb-3">Información</label>
            <br></br>
            <label className="text-muted texto">Telefono <label className="d-block texto1">+57 3104109270</label></label>
            <br></br>
            <label className="mt-2 texto1">Ubicación</label>

            </div>
            
          </div>  

                 </div> 
      </>
        );
    }

    export default Perfil;