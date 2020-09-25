import React from 'react';
import Privacidad from '../img/Privacidad.png';
import Seguridad from '../img/Seguridad.png';
import Notificaciones from '../img/Notificaciones.png';
import InvitarAmigos from '../img/Invitaramigos.png';
import Informacion from '../img/Información.png';
import Cuenta from '../img/Cuenta.png';
import Ayuda from '../img/Ayuda.png';
import Usuario from '../img/Usuario.jpeg';
import Logo from '../img/Logo1.png';


function Configuraciones () {
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
    <h1>Configuraciones</h1>

<div className="album py-5 bg-light">
<div className="container">

    <div className="row">
    <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img src={Usuario} className="card-img-top" alt="" />
                <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center">
                        <a href="#" class="btn btn-primary">Ver perfil</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img src={Notificaciones} className="card-img-top" alt="" />
                <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center">
                        <a href="#" class="btn btn-primary">Notificaciones</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img src={Privacidad} className="card-img-top" alt="" />
                <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center">
                        <a href="#" class="btn btn-primary">Privacidad</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img src={Seguridad} className="card-img-top" alt="" />
                <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center">
                        <a href="#" class="btn btn-primary">Seguridad</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img src={Cuenta} className="card-img-top" alt="" />
                <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center">
                        <a href="#" class="btn btn-primary">Cuenta</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img src={Ayuda} className="card-img-top" alt="" />
                <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center">
                        <a href="#" class="btn btn-primary">Ayuda</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img src={Informacion} className="card-img-top" alt="" />
                <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center">
                        <a href="#" class="btn btn-primary">Informacion</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img src={InvitarAmigos} className="card-img-top" alt="" />
                <div className="card-body">
                    <div className="d-flex justify-content-center align-items-center">
                        <a href="#" class="btn btn-primary">Invitar amigos</a>
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

export default Configuraciones;