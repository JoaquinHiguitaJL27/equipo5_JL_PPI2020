import React from 'react';
import '../Paginas/App.css';
import Imagen1 from '../Paginas/img/Gatossession1.jpg';
import Imagen2 from '../Paginas/img/Gatossession2.jpg';
import Imagen3 from '../Paginas/img/Gatossession5.jpg';
import Logo from '../Paginas/img/Logo1.png';
import Producto1 from '../Paginas/img/PurinaCat.png';
import Producto2 from '../Paginas/img/PurinaCat1.1.png';
import Producto3 from '../Paginas/img/PurinaCat1.2.png';
import Producto4 from '../Paginas/img/PurinaCat1.3.png';
import Producto5 from '../Paginas/img/PurinaCat1.4.png';
import Producto6 from '../Paginas/img/PurinaCat1.5.png';
import Producto7 from '../Paginas/img/PurinaCat1.6.png';
import Producto8 from '../Paginas/img/MedCat.png';
import Producto9 from '../Paginas/img/MedCat1.0.png';
import Producto10 from '../Paginas/img/MedCat1.1.png';
import Producto11 from '../Paginas/img/MedCat1.2.png';
import Producto12 from '../Paginas/img/AccCat.png';
import Producto13 from '../Paginas/img/AccCat1.0.png';
import Producto14 from '../Paginas/img/AccCat1.1.png';
import Producto15 from '../Paginas/img/AccCat1.2.png';
import Producto16 from '../Paginas/img/AccCat1.3.png';




function ProductosGatos() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary text-white">
                <a className="navbar-brand" href="#">
                    <img src={Logo} width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
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

            <h1>Sección gatos</h1>

            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto1} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Mirringo, para adultos, 8kg.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href="#" class="btn btn-success">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto2} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Chunky, para adulto (Para todas las razas), sabor pollo, 25kg.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href="#" class="btn btn-success">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto3} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn btn-success">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto4} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn btn-success">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto5} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn btn-success">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto6} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn btn-success">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto7} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn btn-success">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto8} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn btn-success">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto9} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn btn-success">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto10} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn btn-success">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto11} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn btn-success">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto12} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn btn-success">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto13} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn btn-success">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto14} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn btn-success">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto15} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn btn-success">Comprar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 shadow-sm">
                                <img src={Producto16} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 class="card-title">Comida para perro</h5>
                                    <p className="card-text">Pedigree, para cachorro, sabor pollo en salsa, 100gr.</p>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href="#" className="btn btn-success">Comprar</a>
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
export default ProductosGatos;