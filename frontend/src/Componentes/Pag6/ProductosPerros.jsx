import React from 'react';
import './ProductosPE.css';
import Imagen1 from '../img/Perrossesion.jpg';
import Imagen2 from '../img/Perrossesion2.jpg';
import Imagen3 from '../img/Perrossesion4.jpg';
import Logo from '../img/Logo1.png';
import Producto1 from '../img/Purina1.1.png';
import Producto2 from '../img/Purina1.3.png';
import Producto3 from '../img/Purina2.2.png';
import Producto4 from '../img/Purina2.3.png';
import Producto5 from '../img/Purina2.4.png';
import Producto6 from '../img/Purina2.5.png';
import Producto7 from '../img/Purina2.6.png';
import Producto8 from '../img/med1.0.png';
import Producto9 from '../img/med1.1.png';
import Producto10 from '../img/med1.2.png';
import Producto11 from '../img/med1.3.png';
import Producto12 from '../img/med1.4.png';
import Producto13 from '../img/med1.5.png';
import Producto14 from '../img/Acc.png';
import Producto15 from '../img/Acc1.0.png';
import Producto16 from '../img/Acc1.1.png';
import Producto17 from '../img/Acc1.2.png';
import Producto18 from '../img/Acc1.3.png';
import Producto19 from '../img/Acc1.4.png';
import Producto20 from '../img/Acc1.5.png';
import {Link} from 'react-router-dom'; 

function ProductosPerros() {
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

            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className=""></li>
                    <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                    <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src={Imagen1} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" className="bd-placeholder-img" />
                    </div>
                    <div className="carousel-item active carousel-item-left">
                        <img src={Imagen2} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" className="bd-placeholder-img" />
                    </div>
                    <div className="carousel-item carousel-item-next carousel-item-left">
                        <img src={Imagen3} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" className="bd-placeholder-img" />
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
            <div className="container">
            <h1 className="tituloseccionperros mt-5">Sección perros</h1>
            </div>
            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto1} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Mirringo, para adultos, 8kg.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                    <Link to="/pagar" class="btn btn-success">Comprar</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto2} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Chunky, para adulto (Para todas las razas), sabor pollo, 25kg.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                    <Link to="/pagar" class="btn btn-success">Comprar</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto3} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                         <Link to="/pagar" class="btn btn-success">Comprar</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto4} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                         <Link to="/pagar" class="btn btn-success">Comprar</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto5} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                         <Link to="/pagar" class="btn btn-success">Comprar</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto6} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                         <Link to="/pagar" class="btn btn-success">Comprar</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto7} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                         <Link to="/pagar" class="btn btn-success">Comprar</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto8} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                         <Link to="/pagar" class="btn btn-success">Comprar</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto9} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                         <Link to="/pagar" class="btn btn-success">Comprar</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto10} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                         <Link to="/pagar" class="btn btn-success">Comprar</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto11} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                         <Link to="/pagar" class="btn btn-success">Comprar</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto12} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                         <Link to="/pagar" class="btn btn-success">Comprar</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto13} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                         <Link to="/pagar" class="btn btn-success">Comprar</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto14} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                         <Link to="/pagar" class="btn btn-success">Comprar</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto15} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                         <Link to="/pagar" class="btn btn-success">Comprar</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto16} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                         <Link to="/pagar" class="btn btn-success">Comprar</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto17} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                         <Link to="/pagar" class="btn btn-success">Comprar</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto18} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                         <Link to="/pagar" class="btn btn-success">Comprar</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto19} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                         <Link to="/pagar" class="btn btn-success">Comprar</Link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto20} className="card-img-top cuerpo-top" alt="" />
                                <div className="card-body cuerpo">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
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
export default ProductosPerros;