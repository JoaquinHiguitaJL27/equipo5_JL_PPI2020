import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import start from '../Paginas/StartP';
import inicio from '../Paginas/Inicio';
import registrarse from '../Paginas/Registrarse';

function App() {
  return (
   <BrowserRouter>
   <Switch>

     <Route exact path="/" component={start} />
     <Route exact path="/inicio" component={inicio} />
     <Route exact path="/registrarse" component={registrarse} />

   </Switch>
   </BrowserRouter>
  );
}

export default App;
