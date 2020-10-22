import React from 'react';
import Logo from '../img/Logo.png';
import './Pagina8.css';
import {Link} from 'react-router-dom'; 

    function Carrito () {
        return(
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

<div className="container-fluid">
            <h1 className="text-center text-light bg-primary mt-5 mb-4"><b>Pago</b></h1>
            <div className="container">
          <div className=" card shadow-lg p-3 mb-4">
<div className="row">
<div class="col-md-4 order-md-2 mb-4 mt-3">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-primary">Carrito de compras</span>
        <span class="badge badge-primary badge-pill">3</span>
      </h4>
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Purina para perros</h6>
            <small class="text-muted">Descripción</small>
          </div>
          <span class="text-muted">$12.000</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Purina para gatos</h6>
            <small class="text-muted">Descripción</small>
          </div>
          <span class="text-muted">$8.000</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Accesorio para perros</h6>
            <small class="text-muted">Descripción</small>
          </div>
          <span class="text-muted">$10.000</span>
        </li>
        <li class="list-group-item d-flex justify-content-between bg-light">
          <div class="text-primary">
            <h6 class="my-0">Código promocional</h6>
            <small>PetSociety</small>
          </div>
          <span class="text-primary">-20%</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span>Total (Peso Colombiano)</span>
          <strong>$24.000</strong>
        </li>
      </ul>
      <form className="card p-2">
        <div class="input-group">
          <input type="text" className="form-control" placeholder="Código promocional" />
          <div class="input-group-prepend">
            <button type="submit" className="btn btn-primary">Añadir</button>
          </div>
        </div>
        </form>
      
</div>
<div className="col-md-8 order-md-1">
                <div className="row">
          <div className="col-md-6 mb-3 my-2">
            <label for="firstName">Nombres</label>
            <input type="text" className="form-control" id="firstName" placeholder="Sebastián" value="" required="" />
            <div className="invalid-feedback">
              Tu/s nombre/s es requerido.
            </div>
          </div>
          <div className="col-md-6 mb-3 my-2">
            <label for="lastName">Apellidos</label>
            <input type="text" className="form-control" id="lastName" placeholder="Parra Lopera" value="" required="" />
            <div className="invalid-feedback">
            Tus apellidos son requeridos.
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label for="email">Correo <span className="text-muted">(Opcional)</span></label>
          <input type="email" className="form-control" id="email" placeholder="Petsociety@example.com" />
          <div className="invalid-feedback">
            Por favor ingresar un correo valido para mantenerte atent@ a las actualizaciones.
          </div>
        </div>
        <div className="mb-3">
          <label for="address">Dirección</label>
          <input type="text" className="form-control" id="address" placeholder="Cra. 40 #12-34" required="" />
          <div className="invalid-feedback">
            Por favor ingresar tu dirección para enviar el/los productos.
          </div>
        </div>
        <div class="mb-3">
          <label for="address2">Piso o Apartamento<span class="text-muted ml-1">(Opcional)</span></label>
          <input type="text" class="form-control" id="address2" placeholder="(Piso 1, 2, 3, etc.) o (Apto 101, 102, 201, etc.)" />
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
            <label for="zip">C. P.<span class="text-muted ml-1">(Opcional)</span></label>
            <input type="text" class="form-control" id="zip" placeholder="054448" required="" />
          </div>
        </div>
      <div className="text-left">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="same-address" />
          <label class="custom-control-label" for="same-address">Guardar información de envio</label>
        </div>
        
        <h4 class="mb-3 my-3">Método de pago</h4>
        <div class="d-block my-3">
          <div class="custom-control custom-radio">
            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" required="" />
            <label class="custom-control-label" for="credit">Tarjeta Crédito</label>
          </div>
          <div class="custom-control custom-radio">
            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required="" />
            <label class="custom-control-label" for="debit">Tarjeta Débito</label>
          </div>
          <div class="custom-control custom-radio">
            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required="" />
            <label class="custom-control-label" for="paypal">PayPal</label>
          </div>
          <div class="custom-control custom-radio">
            <input id="upon delivery" name="paymentMethod" type="radio" class="custom-control-input" required="" />
            <label class="custom-control-label" for="upon delivery">Contraentrega</label>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="cc-name">Nombre en la tarjeta</label>
            <input type="text" class="form-control" id="cc-name" placeholder="Sebastián Parra Lopera" required="" />
            <small class="text-muted">Nombre completo que aparece en la tarjeta</small>
            <div class="invalid-feedback">
            Nombre en la tarjeta es requerido.
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="cc-number">Número de la tarjeta</label>
            <input type="text" class="form-control" id="cc-number" placeholder="1234-5678-9012-3456" required="" />
            <div class="invalid-feedback">
              Número de la tarjeta es requerido.
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5 mb-3">
            <label for="cc-expiration">Fecha de vencimiento</label>
            <input type="text" class="form-control col-md-7" id="cc-expiration" placeholder="04/29" required="" />
            <div class="invalid-feedback">
              Fecha de vencimiento requerida.
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="cc-cvv">CVV</label>
            <input type="text" class="form-control" id="cc-cvv" placeholder="123" required="" />
            <div class="invalid-feedback">
              Código de seguridad requerido.
            </div>
          </div>
        </div>
    </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="same-pay" />
          <label class="custom-control-label" for="same-pay">Guardar información de pago</label>
        </div>
        <button class="btn btn-primary btn-lg btn-block mt-4" type="submit">Continuar a pagar</button>
</div>
</div>
  </div>
</div>
<footer className="creditos mt-5 pt-2 text-dark text-center text-small">
        <p class="mb-1">© 2020 PetSociety</p>
        <ul class="list-inline">
      <li class="list-inline-item"><a href="/#">Privacidad</a></li>
      <li class="list-inline-item"><a href="/#">Términos</a></li>
      <li class="list-inline-item"><a href="/#">Soporte</a></li>
        </ul>
</footer>

</div>

</>
        );
    }

    export default Carrito;