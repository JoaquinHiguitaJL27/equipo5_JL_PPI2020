import React from 'react';
import Preguntas from '../Componentes/Pag16/Preguntas';


export default function Preg () {
    return (
        <div> 
            <Header />
            <Preguntas />
            <div className="container-fluid text-right">
            <button class="btn btn-primary mt-3 mr-3" type="submit">Estoy listo</button>
            </div>
        </div>
    );
}