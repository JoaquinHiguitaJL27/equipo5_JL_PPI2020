import React from 'react';
import Perro1 from '../img/Beagle.jpg';
import Circle from '../img/verde.png';
import './PerfilMascota.css';
import {Link} from 'react-router-dom'; 

    function Mascotas () {
        return(
            <>

            <div className="container-fluid">

            <div className="contenedor text-left">
                <div className="cuadro text-right">
                <img src={Perro1} className="imag mb-3 mr-3 mt-3" />
                <h3 className="mr-3 mb-3 textoprro"><b>Copito</b></h3>
                </div>
            <h5 className="textoprro1 text-left mb-3"><b>Información</b></h5>
            <div className="d-flex mb-3">
            <div className="text-left junto">
            <h6 className="mb-3">Sexo: Macho</h6>
            <h6 className="">Edad: 2 años</h6>
            <h6 className="mt-3">Raza: Beagle</h6>
            </div>
            <div className="text-right junto1">
                <h6 className="mb-3">Barrio: Manrique Oriental</h6>
                <h6 className="">Dirección: Cra 31a #71-46</h6>
                <h6 className="mt-3">Contacto: 3206270582</h6>
            </div>
            </div>
            <h5 className="textoprro1 text-left d-inline mr-4"><b>Distintivo de ubicación</b></h5>
            <img src={Circle} className="imag1 d-inline" />
            <button className="btn btn-primary mt-3 d-block">Editar perfil</button>

            </div>
            </div>

            </>
        );
    }
    export default Mascotas;