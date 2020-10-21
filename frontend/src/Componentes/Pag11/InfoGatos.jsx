import React from 'react';
import Logo from '../img/Logo1.png';
import BG from '../img/InfoG.jpg';
import './InfoGatos.css';
import {Link} from 'react-router-dom'; 

function InfoGatos() {
    return (
        < >
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
          <a className="dropdown-item" href="#/">Registra a tus mascotas</a>
        </div>
      </li>
      <li class="nav-item active">
        <Link to="/Calendario" class="nav-link" >Calendario<span class="sr-only">(current)</span></Link>
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
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-light text-white my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>


            <h2 className="jl text-center mt-4">¿Cómo bañar a un gato adulto por primera vez?</h2>
<center>
<img className="container" src={BG} />
</center>
            
<br></br>
<br></br>
            <p className="Parrafo">La mayoría de los gatos pasan su vida sin necesidad de tomar un baño, pero a veces un chapuzón rápido es inevitable.
            Necesitarás un champú especial para limpiar y desenredar su pelo, además de cuidar su piel.
            A pesar de lo que muchos creen, existen gatos que disfrutan mucho los baños, sobre todo si de pequeños les han dado baños tibios de vez en cuando.
            Si tu minino te complica las cosas a la hora de bañarlo, puedes optar por llevarlo a una estética para mascotas.
            No hay como bañar un gato en un ambiente totalmente tranquilo y controlado acompañado de caricias.</p>

            <h2 className="jl">¿Cómo bañar a tu gato?</h2>

            <p>Para llevar a cabo el baño a un gato, deberás tener tacto y paciencia. Aunque a tu gato le guste el agua, cualquier movimiento brusco puede generarle estrés y miedo, esto complicaría la actividad sobre cómo bañar un gato.</p>

            <h2 className="jl">Recomendaciones</h2>

            <p className="Parrafo">Puedes usar la bañera, o un recipiente que se ajuste a su tamaño. Es conveniente que coloques una alfombra en la superficie para evitar que tu gato se resbale con las uñas. Sus patitas y los recipientes resbalosos o incluso la bañera puede ser un gran obstáculo para el baño. Te recomendamos los tapetes de baño que puedes encontrar en las tiendas de mascota o incluso en tiendas para el hogar.
            Procura utilizar agua tibia (a unos 30 grados), asì tu gato no pasará frío y disfrutará del agua para su piel y disfrutar el baño.
            Utiliza un champú específico para felinos. Éste último punto es muy importante, porque los champús para humanos, aunque sean neutros, no respetan el PH de la piel de los gatos.
            ¡Ahora sí! Tomemos un baño
            Antes de empezar, deja correr el agua unos segundos para que tu gato se acostumbre al sonido. A muchos de los gatos les encanta jugar con el agua, tu gato podría ser uno de ellos y dirigirse por su cuenta al agua. Si este no es el caso, es importante tomar a tu gato con mucho amor y cuidado, necesita sentirse seguro.
            Es importante hacerlo con paciencia, se necesita de mucho cuidado y tiempo para no provocar miedo y estrés a tu gato.
            Durante el bañado, evita el contacto del agua con sus orejas y ojos. De esta manera, disminuyes el riesgo de que desarrolle infecciones a futuro. Además, ayuda a que tu gato se sienta cómodo y más tranquilo.
            Comienza mojando la parte inferior de su cuerpo con la mano o con la ayuda de una esponja suave, y vas ascendiendo poco a poco. Con esta técnica, conseguirás aumentar su confianza y hacer más fácil el proceso. Enjabónalo mientras lo acaricias, y deja que el champú actúe durante unos minutos. Finaliza el proceso aclarando su cuerpo con abundante agua para eliminar restos de jabón, que podrían incomodarlo durante sus rutinas de aseo diario.
            Una vez finalizada la tarea sobre cómo bañar un gato, sécalo con una toalla, con mucho mimo y cuidado. Si es invierno, también puedes utilizar un secador para acelerar el secado, aunque el ruido que produce suele generarles inquietud y ansiedad. Puedes probar con un secador silencioso. Acércaselo con moderación, y deja que lo toque para que se familiarice con él.
            Cuando hayas conseguido que esté totalmente seco y tranquilo, puedes darle un último cepillado para que su pelaje resulte brillante y uniforme.
            Recuerda que nuestros gatos son mascotas destacadas por su limpieza e higiene, es muy importante ayudarlos y bañarlos de la mejor manera. No olvides proporcionarle un lugar a tu felino donde se sienta cómodo y feliz.</p>

        </>

    );


}
export default InfoGatos;