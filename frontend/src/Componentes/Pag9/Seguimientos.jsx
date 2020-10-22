import React from 'react';
import Logo from '../img/Logo1.png';
import Baños from '../img/IconBaños.png';
import Necesidades from '../img/IconNecesidades.png';
import Comidas from '../img/IconComida.png';
import Control from '../img/IconControl.png';
import Medicamentos from '../img/IconMedicamentos.png';
import Vitaminas from '../img/IconVitaminas.png';
import agregar from '../img/agregarmascota.png';
import { Link } from 'react-router-dom';

function Necesidadestab1() {
  return (
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

      <div className="container text-center">

        <img className="mb-2 mt-2 logoconfig" src={Logo} />
        <h1 className="tituloconfig mt-5 mb-5">Necesidades programadas</h1>

            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Comidas} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Comida</h5>
                                    <p className="card-text">Proxima comida a las 8:00pm</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Baños} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Baños</h5>
                                    <p className="card-text">Proximo baño mañana</p>
                                    <div className="d-flex justify-content-center align-items-center">
                  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Control} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Control</h5>
                                    <p className="card-text">Proximo control el 12 de octubre a las 12:00pm, copito tiene ulceras debiles </p>
                                    <div className="d-flex justify-content-center align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Medicamentos} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">medicamentos</h5>
                                    <p className="card-text">Proxima dosis de Aciflux hoy a las 9:00pm</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Vitaminas} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Vitaminas</h5>
                                    <p className="card-text">Proxima vitamina el 23 de octubre a las 12:00pm</p>
                                    <div className="d-flex justify-content-center align-items-center">
                  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Necesidades} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Necesidades</h5>
                                    <p className="card-text">Proxima salida a las 5pm</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={agregar} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Agregar programacion</h5>
                                    <p className="card-text">sin datos aún</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                    <Link to="/Tableronece" className="btn btn-success">Agregar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

      </div>
    </>
  )

}
export default Necesidadestab1;