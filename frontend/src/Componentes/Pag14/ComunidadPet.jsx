import React from 'react';
import Logo from '../img/Logo.png';
import  './ComunidadPet.css';
import perfil from '../img/foto_perfil.png';


function ComunidadPet(){
    return(
< >
<nav class="navbar navbar-expand-xl navbar-dark bg-primary text-white">
                <a class="navbar-brand" href="#">
                    <img src={Logo} width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
    PetSociety</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Productos
        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Perros</a>
                                <a class="dropdown-item" href="#">Gatos</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Mis Mascotas
        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Registra a tus mascotas</a>
                                <a class="dropdown-item" href="#">Calendario</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Consejos
        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Perros</a>
                                <a class="dropdown-item" href="#">Gatos</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Adopciones
        </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Perros</a>
                                <a class="dropdown-item" href="#">Gatos</a>
                            </div>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Calificacion<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Configuracion<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                    <a class="nav-link" href="#">Comunidad<span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Productos, consejos..." aria-label="Search" />
                        <button class="btn btn-outline-light text-white my-2 my-sm-0" type="submit">Buscar</button>
                    </form>
                </div>
            </nav>
        <div class="container-fluid">
<div class="jumbotron p-4 p-md-5 text-white rounded bg-dark mt-5">
    <div class="contenedor1 card-text">
      <h1 class="ki text-left display-4 font-italic"><font class="vertical-align: inherit;"><font class="vertical-align: inherit;">Título de una publicación de blog más extensa</font></font></h1>
      <p class="lead my-3"><font class="vertical-align: inherit;"><font class="vertical-align: inherit;">Varias líneas de texto que forman el lede, informando a los nuevos lectores de forma rápida y eficaz sobre lo más interesante de los contenidos de este post.</font></font></p>
      <p class="lead mb-0"><a href="#" class="text-white font-weight-bold"><font class="vertical-align: inherit;"><font class="vertical-align: inherit;">Sigue leyendo...</font></font></a></p>
    </div>   
  </div>    

<div class="sugerencias row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 flex-column position-static">
          <img class="rounded-circle d-inline" width="32" height="32" src={perfil} />
          <h5 class="mb-2 text-primary alLado">Perfil</h5> 
          <h6 class="mb-1 text-muted">30 Sept 2020</h6>
          <h3 class="mb-0.5"><font class="vertical-align: inherit;"><font class="vertical-align: inherit;">Publicación destacada</font></font></h3>
    <div class="contenedor2">
          <p class="card-text mb-auto"><font class="vertical-align: inherit;"><font class="vertical-align: inherit;">Esta es una tarjeta más amplia con texto de apoyo a continuación como una introducción natural a contenido adicional; sisi vale, como va todo¡?</font></font></p>
    </div>
        </div>
</div>

</div>

     </>
     
    );

    
}
export default ComunidadPet;





        