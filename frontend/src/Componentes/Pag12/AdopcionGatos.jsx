import React from 'react';
import Gato1 from '../img/Persa.png';
import Gato2 from '../img/angora.jpg';
import Gato3 from '../img/Criolla.PNG'
import Logo from '../img/Logo1.png';


    function AdopcionGatos () {
        return(
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

           <div className="container-fluid">
<h1 className="text-center text-light bg-primary mt-5 mb-4"><b>Adopciones de gatos</b></h1>
    <div className="row">
    <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
<img src={Gato1} className="card-img-top" alt="" />
    <div className="card-body hola text-left">
<h3 class="card-title text-white">Copito</h3>
<h5 class="card-title text-white">Sexo: Macho</h5>
<h5 class="card-title text-white">Edad: 2 años</h5>
<h5 class="card-title text-white">Raza: Persa</h5>
    <div className="d-flex justify-content-center align-items-center">
<a href="#" class="btn btn-success">Adoptame</a> 
    </div>
    </div>
    </div>
    </div>
    <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
<img src={Gato3} className="card-img-top" alt="" />
    <div className="card-body hola text-left">
<h3 class="card-title text-white">Muñeca</h3>
<h5 class="card-title text-white">Sexo: Hembra</h5>
<h5 class="card-title text-white">Edad: 6 años</h5>
<h5 class="card-title text-white">Raza: Criolla</h5>
    <div className="d-flex justify-content-center align-items-center">
<a href="#" class="btn btn-success">Adoptame</a>  
    </div>
    </div>
    </div>
    </div>
    <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
<img src={Gato2} className="card-img-top" alt="" />
    <div className="card-body hola text-left">
<h3 class="card-title text-white">Pelucha</h3>
<h5 class="card-title text-white">Sexo: Hembra</h5>
<h5 class="card-title text-white">Edad: 5 años</h5>
<h5 class="card-title text-white">Raza: Persa</h5>
    <div className="d-flex justify-content-center align-items-center">
<a href="#" class="btn btn-success">Adoptame</a>  
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