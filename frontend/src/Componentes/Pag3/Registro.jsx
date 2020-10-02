import React from 'react';
import Logo1 from '../img/Logosincachito.png'
import './RegistroE.css';


function Registro() {
  return (
    <>

      <h1 className="tituloregistro mt-4">Registro de Petsociety</h1>
      <center>
      <img className="logo" src={Logo1}></img>
      </center>
      <br></br>

      <br></br>

      <form className="container">

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroupFileAddon01">Subir fotografia</span>
          </div>
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"></input>
            <label className="custom-file-label" for="inputGroupFile01">Elija su foto de perfil</label>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationCustom01">Nombres</label>
            <input type="text" className="form-control" id="validationCustom01" value="" required></input>
            <div className="valid-feedback">
              Looks good!
      </div>
          </div>
          <div className="col-md-6 mb-3">
            <label for="validationCustom02">Apellidos</label>
            <input type="text" className="form-control" id="validationCustom02" value="" required></input>
            <div className="valid-feedback">
              Looks good!
      </div>
          </div>
        </div>

        <div className="form-group">
          <label for="inputEmail4">Correo electronico</label>
          <input type="email" className="form-control" id="inputEmail4"></input>
        </div>
        <div className="form-group">
          <label for="inputAge">Fecha de nacimiento</label>
          <input type="text" className="form-control" id="inputAge"></input>
          <small>
            dia/mes/año
        </small>
        </div>
        <div className="form-group">
          <label for="inputAge">Edad</label>
          <input type="text" className="form-control" id="inputAge" placeholder="40"></input>
        </div>
        <label for="inputPassword5">Contraseña</label>
        <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"></input>
        <small id="passwordHelpBlock" className="form-text text-muted">
        Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji.
</small>
        <label for="inputPassword5">Repita la contraseña</label>
        <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"></input>
        <small id="passwordHelpBlock" className="form-text text-muted">
        Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji.
</small>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Tipo de identificación</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Tarjeta de identidad</option>
            <option>Cedula ciudadana</option>
            <option>Adulto sin identidad</option>
            <option>Cédula de extranjería</option>
            <option>Registro Civil</option>
          </select>
        </div>
        <div className="form-group">
          <label for="inputAddress">Numero de identificación</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="123456789"></input>
        </div>
        <div className="form-group">
          <label for="inputAddress">Celular</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="123456789"></input>
        </div>
        <div className="form-group">
          <label for="inputAddress">Telefono</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="123456789"></input>
        </div>
      
          <div className="form-group">
          <label for="inputCity">Barrio</label>
          <input type="text" className="form-control" id="inputCity"></input>
        </div>
     
        <div classNameName="Boton2">
              <button type="button" className="btn btn-primary">Registarse</button>
              </div>
      </form>
      
    </>
  );
}
export default Registro;

