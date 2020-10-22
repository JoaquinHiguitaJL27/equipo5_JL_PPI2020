import React from 'react';
import Logo1 from '../img/Logosincachito.png';
import Logo from '../img/Logo1.png';
import Necesidades from '../img/IconNecesidades.png';
import {Link} from 'react-router-dom'; 

function PComidas() {
    return (
        <>

           <nav className="navbar navbar-expand-xl navbar-dark bg-primary text-white">
  <Link to="/abrebocas" className="navbar-brand">
  <img alt="responsive" src={Logo} width="30" height="30" class="d-inline-block align-top mr-2" loading="lazy" />
    PetSociety</Link>
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
          <Link to="/ProductosP" className="dropdown-item">Perros</Link>
          <Link to="/ProductosG" className="dropdown-item">Gatos</Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="#/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Mis Mascotas
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/Mismascotas" className="dropdown-item">Registra a tus mascotas</Link>
          <Link to="/Calendario" class="dropdown-item" >Calendario</Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="#/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Consejos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/ConsejosP" className="dropdown-item">Perros</Link>
          <Link to="/ConsejosG" className="dropdown-item">Gatos</Link>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-white" href="#/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Adopciones
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/AdopcionP" className="dropdown-item">Perros</Link>
          <Link to="/AdopcionG" className="dropdown-item">Gatos</Link>
        </div>
      </li>
      <li class="nav-item active">
        <Link to="/Calificacion" class="nav-link">Calificación<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
        <Link to="/Configuraciones" class="nav-link">Configuración<span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item active">
                    <Link to="/ComunidadPet" class="nav-link" >Comunidad<span class="sr-only">(current)</span></Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-light text-white my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

            <h1 className="tituloregistro mt-4">Programación de necesidades</h1>
              <div className="card shadow-lg p-3 mb-4 container">
            <center>
                <img className="logo" src={Necesidades} width="200px"></img>
            </center>
            <br></br>

            <br></br>

            <form className="container">
            <div className="form-row">
            <div className="col-md-6 mb-3">
                        <label for="exampleFormControlSelect1">Tipo de tiempo</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>hr</option>
                            <option>días</option>
                            <option>Semanas</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="inputTime">Hora de salida o limpieza</label>
                        <input type="text" className="form-control" id="inputTime"></input>
                        <small>
                            número
        </small>
                    </div>
    
                </div>
                <div className="form-row">
            <div className="col-md-6 mb-3">
                        <label for="exampleFormControlSelect1">Tipo de tiempo</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>hr</option>
                            <option>días</option>
                            <option>Semanas</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="inputTime">Hora de salida o limpieza</label>
                        <input type="text" className="form-control" id="inputTime"></input>
                        <small>
                            número
        </small>
                    </div>
    
                </div>
                <div className="form-row">
            <div className="col-md-6 mb-3">
                        <label for="exampleFormControlSelect1">Tipo de tiempo</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                            <option>hr</option>
                            <option>días</option>
                            <option>Semanas</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="inputTime">Hora de salida o limpieza</label>
                        <input type="text" className="form-control" id="inputTime"></input>
                        <small>
                            número
        </small>
                    </div>
    
                </div>
                <p className="recor" >Recuerda que si tienes un gato solo debes llenar la primera columna para que el recordatorio sea enviado en el lapso que indicas</p>
                <br></br>
<br></br>
                <div classNameName="Boton2">
                <Link to="/Calendario" className="btn btn-primary">Guardar</Link> 
                </div>
                
            </form>

</div>

        </>
    )

}
export default PComidas;