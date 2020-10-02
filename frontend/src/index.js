import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import App from './Routes/App';
import Start from './Paginas/StartP';
import Inicio from './Paginas/Inicio';
import Registro from './Paginas/Registrarse';
import ProductosP from './Paginas/ProductosP';
import ProductosG from './Paginas/ProductosG';
import Calendarios from './Paginas/Calendarios';
import ConsejosP from './Paginas/ConsejosP';
import InformacionP from './Paginas/InformacionP';
import InformacionG from './Paginas/InformacionG';
import AdopcionG from './Paginas/AdopcionG';
import Configuraciones from './Paginas/Configuraciones';
import ComunidadPet from './Paginas/ComunidadPet';
import AdopcionP from './Paginas/AdopcionP';


ReactDOM.render(
  <React.StrictMode>

    <App />

  </React.StrictMode>,
  document.getElementById('root')
);



