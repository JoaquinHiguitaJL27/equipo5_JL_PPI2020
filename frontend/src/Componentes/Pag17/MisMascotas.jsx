import React from 'react';
import Perro1 from '../img/Beagle.jpg';
import Perro2 from '../img/Persa.png';
import Logo from '../img/Logo.png';
import agregarmascota from '../img/agregarmascota.png';
import './MisMascotas.css';
import {Link} from 'react-router-dom'; 

    function Mascotas () {
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

           <div className="container-fluid">
<h1 className="text-center text-light bg-primary mt-5 mb-4"><b>Mis Mascotas</b></h1>
    <div className="row">
    <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
<img alt="description" src={Perro1} className="card-img-top" />
    <div className="card-body hola text-left">
<h3 class="card-title text-white">Copito</h3>
<h5 class="card-title text-white">Sexo: Macho</h5>
<h5 class="card-title text-white">Edad: 2 años</h5>
<h5 class="card-title text-white">Raza: Beagle</h5>
    <div className="d-flex justify-content-center align-items-center">
<Link to="/perfilmascota" className="btn btn-success">Ver perfil</Link> 
    </div>
    </div>
    </div>
    </div>
    <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
<img alt="description" src={Perro2} className="card-img-top" />
    <div className="card-body hola text-left">
<h3 class="card-title text-white">Pelucha</h3>
<h5 class="card-title text-white">Sexo: Hembra</h5>
<h5 class="card-title text-white">Edad: 5 años</h5>
<h5 class="card-title text-white">Raza: Persa</h5>
    <div className="d-flex justify-content-center align-items-center">
    <Link to="/perfilmascota" className="btn btn-success">Ver perfil</Link> 
    </div>
    </div>
    </div>
    </div>
    <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
<img alt="description" src={agregarmascota} className="card-img-top" />
    <div className="card-body hola text-left">
<h3 class="card-title text-white">Agregar nueva mascota</h3>
<h5 class="card-title text-white">Sexo: </h5>
<h5 class="card-title text-white">Edad: </h5>
<h5 class="card-title text-white">Raza: </h5>
    <div className="d-flex justify-content-center align-items-center">
<Link to="/registromascota" className="btn btn-success">Crear nuevo perfil</Link> 
    </div>
    </div>
    </div>
    </div>
    </div>
            </div>

            </>
            );
    }

    export default Mascotas;