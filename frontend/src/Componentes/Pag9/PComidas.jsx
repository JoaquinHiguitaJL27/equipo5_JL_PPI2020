import React from 'react';
import Logo1 from '../img/Logosincachito.png';
import Logo from '../img/Logo1.png';
import Comidas from '../img/IconComida.png';

function PComidas() {
    return (
        <>
            <nav className="navbar navbar-expand-xl navbar-dark bg-primary text-white">
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

            <h1 className="tituloregistro mt-4">Programación de comidas</h1>
            <center>
                <img className="logo" src={Comidas} width="200px"></img>
            </center>
            <br></br>

            <br></br>

            <form className="container">

                <div className="form-group">
                    <label for="inputName">Nombre del alimento</label>
                    <input type="name" className="form-control" id="inputName"></input>
                </div>
                <div className="form-group">
                    <label for="inputTime">Primera comida</label>
                    <input type="text" className="form-control" id="inputTime"></input>
                    <small>
                        hora/am o pm
        </small>
                </div>
                <div className="form-group">
                    <label for="inputTime">Segunda comida</label>
                    <input type="text" className="form-control" id="inputTime"></input>
                    <small>
                        hora/am o pm
        </small>
                </div>
                <div className="form-group">
                    <label for="inputTime">Tercera comida</label>
                    <input type="text" className="form-control" id="inputTime"></input>
                    <small>
                        hora/am o pm
        </small>
                </div>
                <div classNameName="Boton2">
                    <button type="button" className="btn btn-primary">Guardar</button>
                </div>
            </form>
        </>
    )

}
export default PComidas;