import React from 'react';
import Perro1 from '../img/Beagle.jpg';
import Perro2 from '../img/Persa.png';


    function Mascotas () {
        return(
           <div className="container-fluid">
<h1 className="text-center text-light bg-primary mt-5 mb-4"><b>Mis Mascotas</b></h1>
    <div className="row">
    <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
<img src={Perro1} className="card-img-top" alt="" />
    <div className="card-body hola text-left">
<h3 class="card-title text-white">Copito</h3>
<h5 class="card-title text-white">Sexo: Macho</h5>
<h5 class="card-title text-white">Edad: 2 años</h5>
<h5 class="card-title text-white">Raza: Beagle</h5>
    <div className="d-flex justify-content-center align-items-center">
<a href="#" class="btn btn-success">Ver perfil</a> 
    </div>
    </div>
    </div>
    </div>
    <div className="col-md-4">
    <div className="card mb-4 shadow-sm">
<img src={Perro2} className="card-img-top" alt="" />
    <div className="card-body hola text-left">
<h3 class="card-title text-white">Pelucha</h3>
<h5 class="card-title text-white">Sexo: Hembra</h5>
<h5 class="card-title text-white">Edad: 5 años</h5>
<h5 class="card-title text-white">Raza: Persa</h5>
    <div className="d-flex justify-content-center align-items-center">
<a href="#" class="btn btn-success">Ver perfil</a>  
    </div>
    </div>
    </div>
    </div>
    </div>
            </div>
            );
    }

    export default Mascotas;