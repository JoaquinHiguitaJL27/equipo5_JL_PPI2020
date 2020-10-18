import React from 'react';
import Logo from '../img/Logo.png';
import Purina1 from '../img/Purina1.1.png';
import Purina2 from '../img/Purina.png';
import Purina3 from '../img/AccCat1.1.png';
import Imagen1 from '../img/Carrusel1.jpg';
import Imagen2 from '../img/Carrusel2.jpg';
import Imagen3 from '../img/Perros y gatos.jpeg';
import {Link} from 'react-router-dom'; 
import './Abrebocas.css';

    function Compa () {
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

            <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active " data-ride="carousel" data-interval="4000">
          <img alt="responsive" src={Imagen1} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" className="bd-placeholder-img" />
      </div>
      <div className="carousel-item" data-ride="carousel" data-interval="4000">
          <img alt="responsive" src={Imagen2} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" className="bd-placeholder-img" />
      </div>
      <div className="carousel-item carousel-item-next" data-ride="carousel" data-interval="4000">
      <img alt="responsive" src={Imagen3} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" className="bd-placeholder-img" />
      </div>
    </div>
    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>

          <div className="album py-5 bg-light">
    <div className="container-fluid">

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img alt="description" src={Purina1} className="card-img-top" />
            <div className="card-body chocolatina">
            <h5 class="card-title text-dark">Comida para perro</h5>
              <p className="card-text text-dark">Mirringo, para adultos, 8kg.</p>
              <div className="d-flex justify-content-center align-items-center">
              <Link to="/pagar" class="btn btn-success">Comprar</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img alt="description" src={Purina2} className="card-img-top" />
            <div className="card-body chocolatina">
              <h5 class="card-title text-dark">Comida para perro</h5>
              <p className="card-text text-dark">Chunky, para adulto (Para todas las razas), sabor pollo, 25kg.</p>
              <div className="d-flex justify-content-center align-items-center">
              <Link to="/pagar" class="btn btn-success">Comprar</Link>  
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
          <img alt="description" src={Purina3} className="card-img-top" />
            <div className="card-body chocolatina">
            <h5 class="card-title text-dark">Comida para perro</h5>
              <p className="card-text text-dark">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
              <div className="d-flex justify-content-center align-items-center">
              <Link to="/pagar" class="btn btn-success">Comprar</Link>
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
    export default Compa;  
