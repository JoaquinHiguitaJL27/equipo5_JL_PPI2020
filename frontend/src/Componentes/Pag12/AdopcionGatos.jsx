import React from 'react';
import Gato1 from '../img/Persa.png';
import Gato2 from '../img/angora.jpg';
import Gato3 from '../img/Criolla.PNG'
import Logo from '../img/Logo1.png';
import './AdopcionGatos.css'
import {Link} from 'react-router-dom'; 

    function AdopcionGatos () {
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
        <h1 className="adopgatos mt-4">Sección adopción de gatos</h1>

<div className="album py-5 bg-light">
    <div className="container">

        <div className="row">
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <img src={Gato1} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 class="card-title">Pelucha</h5>
                        <p className="card-text">Raza: Angora</p>
                        <p className="card-text">Edad: 4 años</p>
                        <p className="card-text">Sexo: Hembra</p>
                        <p className="card-text">Vacunas: Al día</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="#" class="btn btn-success">Comunicarme</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card mb-4 shadow-sm">
                    <img src={Gato2} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 class="card-title">Copita</h5>
                        <p className="card-text">Raza: Angora</p>
                        <p className="card-text">Edad: 6 meses</p>
                        <p className="card-text">Sexo: Hembra</p>
                        <p className="card-text">Vacunas: Sin información</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="#" class="btn btn-success">Comunicarme</a>
                        </div>
                    </div>
                </div>
                <div className="card mb-4 shadow-sm">
                    <img src={Gato3} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 class="card-title">Muñeca</h5>
                        <p className="card-text">Raza: criolla</p>
                        <p className="card-text">Edad: 6 años</p>
                        <p className="card-text">Sexo: Hembra</p>
                        <p className="card-text">Vacunas: Al día</p>
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="#" class="btn btn-success">Comunicarme</a>
                        </div>
                    </div>
                </div>
            </div>
           </div>
           </div>
           </div>
            </>
            );
    }

    export default AdopcionGatos;