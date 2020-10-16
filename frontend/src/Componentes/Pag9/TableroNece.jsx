import React from 'react';
import Logo from '../img/Logo1.png';
import Baños from '../img/IconBaños.png';
import Necesidades from '../img/IconNecesidades.png';
import Comidas from '../img/IconComida.png';
import Control from '../img/IconControl.png';
import Medicamentos from '../img/IconMedicamentos.png';
import Vitaminas from '../img/IconVitaminas.png';


function TableroNece(){
return(
    <>
      <nav className="navbar navbar-expand-xl navbar-dark bg-primary text-white">
        <a className="navbar-brand" href="#">
            <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" />
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
                <li className="nav-item active">
                    <a className="nav-link" href="#">Calendario<span className="sr-only">(current)</span></a>
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
                <li className="nav-item active">
                    <a className="nav-link" href="#">Calificación<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Configuración<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Comunidad PetSociety<span className="sr-only">(current)</span></a>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light text-white my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    

    <div className="container text-center">
  
    <img className="mb-2 mt-2 logoconfig" src={Logo} />
    <h1 className="tituloconfig mt-5 mb-5">Tablero de necesidades</h1>

<button type="button" className="btn btn-primary btn-lg btn-block">
<img src={Comidas} style={{marginRight:"20px"}}width="100px"></img>
    Comidas</button>
<button type="button" className="btn btn-primary btn-lg btn-block">
<img src={Baños} style={{marginRight:"20px"}}width="100px"></img>
    Baños</button>
<button type="button" className="btn btn-primary btn-lg btn-block">
<img src={Medicamentos} style={{marginRight:"20px"}}width="100px"></img>
    Medicamentos</button>
<button type="button" className="btn btn-primary btn-lg btn-block">
<img src={Necesidades} style={{marginRight:"20px"}}width="100px"></img>
    Necesidades</button>
<button type="button" className="btn btn-primary btn-lg btn-block">
<img src={Control} style={{marginRight:"20px"}}width="100px"></img>
    Control de veterinaria</button>
<button type="button" className="btn btn-primary btn-lg btn-block">
<img src={Vitaminas} style={{marginRight:"20px"}}width="100px"></img>
    Vitaminas</button>

</div>
    </>
)

}
export default TableroNece;