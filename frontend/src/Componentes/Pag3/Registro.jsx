import React, { Component } from 'react';
import Logo1 from '../img/Logosincachito.png';
import './RegistroE.css';
import {Link} from 'react-router-dom'; 
import { naxios } from '../Utilities';

class Registro extends Component {
  constructor(props) {
    //Inicialización del estado y llamado de props
    super(props);
    this.state ={
        losRegistros:{
          nombres: '',
          apellidos: '',
          correo_electronico: '',
          fecha_de_nacimiento: '',
          edad: '',
          contrasena: '',
          rep_contrasena: '',
          tipo_identidad: '',
          num_identidad: '',
          num_celular: '',
          num_telefono: '',
          direccion: '',
          add_direccion: '',
          barrio: '',
          codigo_postal: ''
        }
    }
  }

  PostPerfil=async()=>{
    await naxios.post('https://BaseDeDatosPetSociety.loperasebas.repl.co/api/nuevo-perfil', this.state.losRegistros)
    .then(res=>{
    }).catch(error=>{
      console.log(error.message)
    })
  }

  handleChange=async (e) =>{
    e.persist();
    await this.setState({
      losRegistros:{
        ...this.state.losRegistros,
        [e.target.name]: e.target.value 
      }
    })
    console.log(this.state.losRegistros)
  }

  render(){
  return (
    <>
        <h1 className="tituloregistro mt-4">Registro de Petsociety</h1>
    <div className="card shadow-lg p-3 mb-4 container">
      <center>
      <img className="logo" src={Logo1}></img>
      </center>
      <br></br>

      <br></br>

      <form>
      <div className="ola2 col-md-8">
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
          <div className="col-6 mb-3">
            <label for="validationCustom01">Nombres</label>
            <input type="text" className="form-control" id="validationCustom01" name="nombres" onChange={this.handleChange} value={this.state.losRegistros.nombres}></input>
            <div className="valid-feedback">
              Looks good!
      </div>
          </div>
          <div className="col-6 mb-3">
            <label for="validationCustom02">Apellidos</label>
            <input type="text" className="form-control" id="validationCustom02" name="apellidos" onChange={this.handleChange} value={this.state.losRegistros.apellidos}></input>
            <div className="valid-feedback">
              Looks good!
      </div>
          </div>
        </div>

        <div className="form-group">
          <label for="inputEmail4">Correo electronico</label>
          <input type="email" className="form-control" id="inputEmail4" name="correo_electronico" onChange={this.handleChange} value={this.state.losRegistros.correo_electronico}></input>
        </div>
        <div className="form-row">
        <div className="form-group col-6">
          <label for="inputAge">Fecha de nacimiento</label>
          <input type="text" className="form-control" id="inputAge" name="fecha_de_nacimiento" onChange={this.handleChange} value={this.state.losRegistros.fecha_de_nacimiento}></input>
          <small>
            dia/mes/año
        </small>
        </div>
        <div className="form-group col-6">
          <label for="inputAge">Edad</label>
          <input type="text" className="form-control" id="inputAge" placeholder="40" name="edad" onChange={this.handleChange} value={this.state.losRegistros.edad}></input>
        </div>
        </div>
        <div className="form-row">
         <div className="form-group col-6">
        <label for="inputPassword5">Contraseña</label>
        <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" name="contrasena" onChange={this.handleChange} value={this.state.losRegistros.contrasena}></input>
        <small id="passwordHelpBlock" className="form-text text-muted">
        Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji.
</small>
</div>
<div className="form-group col-6">
        <label for="inputPassword5">Repita la contraseña</label>
        <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" name="rep_contrasena" onChange={this.handleChange} value={this.state.losRegistros.rep_contrasena}></input>
        <small id="passwordHelpBlock" className="form-text text-muted">
        Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números, y no debe contener espacios, caracteres especiales ni emoji.
</small>
</div>
</div>
<div className="form-row">
        <div className="form-group col-6">
          <label for="Identification">Tipo de identificación</label>
          <select className="form-control" id="Identification" required="" name="tipo_identidad" onChange={this.handleChange} value={this.state.losRegistros.tipo_identidad}>
          <option selected>Selecciona un tipo</option>
            <option>Tarjeta de identidad</option>
            <option>Cedula ciudadana</option>
            <option>Adulto sin identidad</option>
            <option>Cédula de extranjería</option>
            <option>Registro Civil</option>
          </select>
        </div>
        <div className="form-group col-6">
          <label for="inputAddress">Número identificación</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1011390733" name="num_identidad" onChange={this.handleChange} value={this.state.losRegistros.num_identidad}></input>
        </div>
</div>
<div className="form-row">
        <div className="form-group col-6">
          <label for="inputAddress">Celular</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="3104109270" name="num_celular" onChange={this.handleChange} value={this.state.losRegistros.num_celular}></input>
        </div>
        <div className="form-group col-6">
          <label for="inputAddress">Telefono <span className="text-muted">(Opcional)</span></label>
          <input type="text" className="form-control" id="inputAddress" placeholder="5884735" name="num_telefono" onChange={this.handleChange} value={this.state.losRegistros.num_telefono}></input>
        </div>
  </div>
  <div className="form-row">
  <div className="mb-3 col-md-4 ola">
          <label for="address">Dirección <span className="text-muted"></span> </label>
          <input type="text" className="form-control" id="address" placeholder="Cra. 40 #12-34" name="direccion" onChange={this.handleChange} value={this.state.losRegistros.direccion} />
          <div className="invalid-feedback">
            Por favor ingresar tu dirección para enviar el/los productos.
          </div>
          </div>
          <div class="mb-3 col-md-4">
          <label for="address2">Piso o Apartamento<span class="text-muted ml-1">(Opcional)</span></label>
          <input type="text" class="form-control" id="address2" placeholder="(Piso 1, 2, 3, etc.) o (Apto 101, 102, 201, etc.)" name="add_direccion" onChange={this.handleChange} value={this.state.losRegistros.add_direccion} />
        </div>
          <div className="form-group col-md-3 ola1">
          <label for="inputCity">Barrio</label>
          <input type="text" className="form-control" id="inputCity" name="barrio" onChange={this.handleChange} value={this.state.losRegistros.barrio}></input>
        </div> 
       
</div>
        <div class="row">
          <div class="col-md-5 mb-3">
            <label for="country">Departamento</label>
            <select class="custom-select d-block w-100 seleccionar" id="country" required="">
              <option value="">Selecciona...</option>
              <option>Antioquia</option>
            </select>
            <div class="invalid-feedback">
              Por favor selecciona un departamento.
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="state">Municipio</label>
            <select class="custom-select d-block w-100 seleccionar" id="state" required="">
              <option value="">Selecciona...</option>
              <option>Medellín</option>
            </select>
            <div class="invalid-feedback">
              Por favor selecciona un municipio.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="zip">Código Postal<span class="text-muted ml-1">(Opcional)</span></label>
            <input type="text" class="form-control" id="zip" placeholder="054448" name="codigo_postal" onChange={this.handleChange} value={this.state.losRegistros.codigo_postal} />
          </div>
        </div>
     
        <div classNameName="Boton2">
        <Link to="/abrebocas" role="button" className="btn btn-primary btn-lg" onClick={this.PostPerfil}>Registrarse</Link>
              </div>
      </form>
      </div>   
    </>
  );
}}
export default Registro;

