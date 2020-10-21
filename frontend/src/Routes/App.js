import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import start from '../Paginas/StartP';
import inicio from '../Paginas/Inicio';
import registrarse from '../Paginas/Registrarse';
import InicioAbrebocas from '../Paginas/Abrebocas';
import CarritoCompras from '../Paginas/CarritoDeCompras';
import masinfoP from '../Paginas/InformacionP';
import masinfoG from '../Paginas/InformacionG';
import ProductosP from '../Paginas/ProductosP';
import ProductosG from '../Paginas/ProductosG';
import ConsejosP from '../Paginas/ConsejosP';
import AdopcionP from '../Paginas/AdopcionP';
import AdopcionG from '../Paginas/AdopcionG';
import Configuraciones from '../Paginas/Configuraciones';
import Comidas from '../Paginas/Comidas';
import Control from '../Paginas/Control';
import Baños from '../Paginas/Baños';
import Necesidades from '../Paginas/Necesidades';
import Medicamentos from '../Paginas/Medicamentos';
import Vitaminas from '../Paginas/Vitaminas';
import PreCalendarios from '../Paginas/PreCalendarios';
import Calendario from '../Paginas/Calendario';
import ConsejosG from '../Paginas/ConsejosG';
import Calificacion from '../Paginas/Calificacion';
import Tableronece from '../Paginas/Calendarios';
import ComunidadPet from '../Paginas/ComunidadPet';


function App() {
  return (
   <BrowserRouter>
   <Switch>

     <Route exact path="/" component={start} />
     <Route exact path="/inicio" component={inicio} />
     <Route exact path="/registrarse" component={registrarse} />
     <Route exact path="/abrebocas" component={InicioAbrebocas} />
     <Route exact path="/pagar" component={CarritoCompras} />
     <Route exact path="/masinfoP" component={masinfoP} />
     <Route exact path="/masinfoG" component={masinfoG} />
     <Route exact path="/ProductosP" component={ProductosP} />
     <Route exact path="/ProductosG" component={ProductosG} />
     <Route exact path="/ConsejosP" component={ConsejosP} />
     <Route exact path="/AdopcionP" component={AdopcionP} />
     <Route exact path="/AdopcionG" component={AdopcionG} />
     <Route exact path="/Configuraciones" component={Configuraciones} />
     <Route exact path="/Comidas" component={Comidas} />
     <Route exact path="/Control" component={Control} />
     <Route exact path="/Baños" component={Baños} />
     <Route exact path="/Necesidades" component={Necesidades} />
     <Route exact path="/Medicamentos" component={Medicamentos} />
     <Route exact path="/Vitaminas" component={Vitaminas} />
     <Route exact path="/PreCalendarios" component={PreCalendarios} />
     <Route exact path="/Calendario" component={Calendario} />
     <Route exact path="/ConsejosG" component={ConsejosG} />
     <Route exact path="/Calificacion" component={Calificacion} />
     <Route exact path="/Tableronece" component={Tableronece} />
     <Route exact path="/ComunidadPet" component={ComunidadPet} />


   </Switch>
   </BrowserRouter>
  );
}

export default App;
