import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import start from '../Paginas/StartP';
import inicio from '../Paginas/Inicio';
import registrarse from '../Paginas/Registrarse';
import InicioAbrebocas from '../Paginas/Abrebocas';
import CarritoCompras from '../Paginas/CarritoDeCompras';

function App() {
  return (
   <BrowserRouter>
   <Switch>

     <Route exact path="/" component={start} />
     <Route exact path="/inicio" component={inicio} />
     <Route exact path="/registrarse" component={registrarse} />
     <Route exact path="/abrebocas" component={InicioAbrebocas} />
     <Route exact path="/pagar" component={CarritoCompras} />

   </Switch>
   </BrowserRouter>
  );
}

export default App;
