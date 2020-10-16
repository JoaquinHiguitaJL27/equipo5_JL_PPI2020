import React from 'react';
import Foto from '../img/foto_perfil.png';
import Photo from '../img/camara.png';
import User from '../img/user.png';
import Info from '../img/info.png';
import './Perfil.css';

    function Perfil () {
        return(
      <>
          <div className="text-center container-fluid">
          <h1 className="bg-primary text-light mt-5 mb-3">Perfil de Petsociety</h1>
                <br></br>
          <img alt="description" src={Foto} className="rounded-circle perfil mb-4" />
  
<div class="input-group">

  <div class="input-group-prepend">
  <button class="btn btn00" type="button" id="inputGroupFileAddon01">
  <img src={Photo} className="imagen" />
  </button>
  </div>

  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile01"  lang="es" aria-describedby="inputGroupFileAddon01" />
    <label class="custom-file-label text-left" for="inputGroupFile01" data-browse="Elegir">Seleccionar archivo...</label>
  </div>

</div>

          <div className="contenedor text-center mt-3">
            <div className="text-left">

            <img src={User} className="imagen mb-4 mr-2" />
            <label className="text-muted texto">Nombre <label className="d-block texto1">Sebastián Parra Lopera</label></label>
            <br></br>
            <img src={Info} className="imagen mb-2 mr-2" />
            <label className="texto1 mb-3">Información</label>
            <br></br>
            <label className="text-muted texto">Telefono <label className="d-block texto1">+57 3104109270</label></label>
            <br></br>
            <label className="mt-2 texto1">Ubicación</label>

            </div>
            
          </div>  

                 </div> 
      </>
        );
    }

    export default Perfil;