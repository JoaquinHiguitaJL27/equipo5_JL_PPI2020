import React from 'react';
import './Calificacion.css';
import Logo from '../img/Logo.png';
import Logo2 from '../img/Logo_2.png';
import {Link} from 'react-router-dom'; 

    function Pagina2 () {
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
          <Link to="/Calendario" className="dropdown-item" >Calendario</Link>
        </div>
      </li>
      <li class="nav-item active">
        
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

<h1 className="text-center text-light bg-primary mt-5 mb-2"><b>Calificanos</b></h1>
         <div className="card shadow-lg p-3 mb-4 container">
         <center>
         <img alt="description" src={Logo2} />
         </center>
  <div class="rating mb-3 text-center">
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
 </div>
            <div className="input-group mb-4">
  <div className="input-group-prepend">
    <span className="input-group-text bg-primary text-light" id="basic-addon1"><b>Nombre</b></span>
  </div>
  <input type="text" className="form-control" placeholder="Nombre completo" aria-label="Username" aria-describedby="basic-addon1" />
</div>

<div className="input-group mb-4">
<div className="input-group-append">
    <span className="input-group-text bg-primary text-light" id="basic-addon2"><b>Correo</b></span>
  </div>
  <input type="text" className="form-control" placeholder="Petsociety@gmail.com" aria-label="Recipient's username" aria-describedby="basic-addon2" />
</div>

    <h4 for="exampleFormControlTextarea1" className="text-light bg-primary p-2"><b>Tu comentario</b></h4>
    <textarea className="form-control tamaño" id="exampleFormControlTextarea1" rows="2"></textarea>

<Link to="/abrebocas"role="button" className="btn btn-primary btn-lg mt-4 mb-3"><b>Enviar</b></Link>

    </div> 

</>
        );
    }
    export default Pagina2;