import React from 'react';
import Perro1 from '../img/Pitbull.jpg';
import Perro2 from '../img/Beagle.jpg';
import Perro3 from '../img/Pastor.jpg'
import Logo from '../img/Logo1.png';
import './AdopcionPerros.css';


function AdopcionPerros () {
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
                <li class="nav-item active">
                    <a class="nav-link" href="#">Comunidad PetSociety<span class="sr-only">(current)</span></a>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light text-white my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    <h1 className="adopperros mt-4">Sección adopción de perros</h1>

<div className="album py-5 bg-light">
<div className="container">

    <div className="row">
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img src={Perro1} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 class="card-title">Tom</h5>
                    <p className="card-text">Raza: Pitbull</p>
                    <p className="card-text">Edad: 8 meses</p>
                    <p className="card-text">Sexo: Macho</p>
                    <p className="card-text">Vacunas: Sin información</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <a href="#" class="btn btn-success">Comunicarme</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img src={Perro2} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 class="card-title">Juancho</h5>
                    <p className="card-text">Raza: Beagle</p>
                    <p className="card-text">Edad: 2 años</p>
                    <p className="card-text">Sexo: Macho</p>
                    <p className="card-text">Vacunas: Al día</p>
                    <div className="d-flex justify-content-center align-items-center">
                        <a href="#" class="btn btn-success">Comunicarme</a>
                    </div>
                </div>
            </div>
            <div className="card mb-4 shadow-sm">
                <img src={Perro3} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 class="card-title">Muñeca</h5>
                    <p className="card-text">Raza: Pastor Alemán</p>
                    <p className="card-text">Edad: 4 años</p>
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

export default AdopcionPerros;