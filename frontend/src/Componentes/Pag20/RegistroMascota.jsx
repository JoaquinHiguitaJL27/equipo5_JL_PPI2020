import React from 'react';
import './RegistroMascota.css';
import Perfil from '../img/foto_perfil.png';

    function Pagina8 () {
        
        return(
    <>
   <div className="text-center container-fluid">
<h1 className="bg-primary text-light mt-5 mb-3">Registro de Petsociety</h1>
      
      <br></br>

      <br></br>
<img alt="description" src={Perfil} className="rounded-circle perfil mb-4" />
      <form>
          <div className="ola2 col-md-6">

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroupFileAddon01">Subir fotografia</span>
          </div>
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"></input>
            <label className="custom-file-label text-left" for="inputGroupFile01">Su foto de perfil</label>
          </div>
        </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3 ola2">
            <label for="validationCustom01">Nombre</label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="Firulais Andrés Ríos Lopera" value="" required></input>
            <div className="valid-feedback">
              ¡Sigue así!
      </div>
          </div>
          </div>
          <div className="form-row">
          <div className="form-group mb-3 col-md-1 ola">
          <label for="inputAge">Edad</label>
          <input type="text" className="form-control  text-center" id="inputAge" placeholder="2 años"></input>
        </div>
        <div className="form-group mb-3 col-md-2 ola1">
          <label for="inputRaza">Raza</label>
          <input type="text" className="form-control  text-center" id="inputRaza" placeholder="Pitbull"></input>
        </div>
        </div>
        <div className="form-group mb-5 col-md-2 ola2">
          <label for="inputRaza">Sexo</label>
          <input type="text" className="form-control  text-center" id="inputRaza" placeholder="Macho"></input>
        </div>
      </form>
</div>
            <div className="text-right container-fluid">
            <button type="submit" className="bg-primary text-light btn btn-lg mb-4">Continuar</button>
            </div>
    </>
        );
    }
    export default Pagina8;