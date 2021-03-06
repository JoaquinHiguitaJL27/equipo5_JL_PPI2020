import React from 'react';
import Logo from '../img/Logo200.png';
import './PregMascota.css';
import {Link} from 'react-router-dom'; 

    function RegistroMascota () {
        return(
      <>

          <div className="card shadow-lg p-3 mb-4 container">
          <h6 className="text-dark mt-4">Bienvenid@, para continuar con el registro responde lo siguiente:</h6>
                <br></br>
          <img alt="description" src={Logo} className="mb-4" />
                <br></br>
                
            <h4 className="text-dark mb-4">¿Cada cuánto bañas a tu mascota?</h4>
            <div className="d-flex">

              <div className="text-left">
                <div class="form-check mr-2 mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                  Cada 8 días
                  </label>
                </div>
                <div class="form-check mr-2 mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                  <label class="form-check-label" for="defaultCheck2">
                  Cada 15 días
                  </label>
                  </div>
              </div>
              <div className="text-center">
                <div class="form-check d mr-2 mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                  <label class="form-check-label" for="defaultCheck2">
                  Cada 1 mes
                  </label>
                </div>
              </div>
              <div className="text-right">
                <div class="form-check mr-2 mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                  <label class="form-check-label" for="defaultCheck2">
                  Cada 2 mes
                  </label>
                </div>
                <div class="form-check mr-2 mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck4" />
                  <label class="form-check-label" for="defaultCheck2">
                  Cada 3 mes
                  </label>
                </div>
              </div>

            </div>
        <h4 className="text-dark mt-4 mb-4">¿Cada cuánto come tu mascota?</h4>
          <div className="d-flex">
            <div className="text-left">
                <div class="form-check mr-2 mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                  Cada 1-2 horas
                  </label>
                </div>
                <div class="form-check mr-2 mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                  <label class="form-check-label" for="defaultCheck2">
                  Cada 3-4 horas
                  </label>
                  </div>
            </div>
            <div className="text-right">
                <div class="form-check mr-2 mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                  <label class="form-check-label" for="defaultCheck2">
                  Cada 5-6 horas
                  </label>
                </div>
                <div class="form-check mr-2 mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck4" />
                  <label class="form-check-label" for="defaultCheck2">
                  No lo sé
                  </label>
                </div>
            </div>
          </div>
        <h4 className="text-dark mt-4 mb-4">¿Cada cuánto bebe agua tu mascota?</h4>
          <div className="d-flex">
            <div className="text-left">
                <div class="form-check mr-2 mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                  <label class="form-check-label" for="defaultCheck1">
                  Cada 30 minutos
                  </label>
                </div>
                <div class="form-check mr-2 mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                  <label class="form-check-label" for="defaultCheck2">
                  Cada 1 hora
                  </label>
                  </div>
            </div>
            <div className="text-center">
                <div class="form-check mr-2 mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck3" />
                  <label class="form-check-label" for="defaultCheck2">
                  Cada 2 horas
                  </label>
                </div>
                <div class="form-check mr-2 mb-2">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck4" />
                  <label class="form-check-label" for="defaultCheck2">
                  Cada 3 horas
                  </label>
                </div>
            </div>
            <div className="text-right">
              <div class="form-check mr-2 mb-2">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck4" />
                <label class="form-check-label" for="defaultCheck2">
                Cada +4 horas
                </label>
              </div>
              <div class="form-check mr-2 mb-2">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck4" />
                <label class="form-check-label" for="defaultCheck2">
                No lo sé
                </label>
              </div>
            </div>
              
          </div>

        <h4 className="text-dark mt-4 mb-4">¿Cada cuánto va al baño tu mascota?</h4>
        <div className="d-flex">
            <div className="text-left">
            <div class="form-check mr-2 mb-2">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
    Cada 1-2 horas
  </label>
</div>
<div class="form-check mr-2 mb-2">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
  <label class="form-check-label" for="defaultCheck2">
    Cada 3-4 horas
  </label>
</div>
            </div>
            <div className="text-right">
            <div class="form-check mr-2 mb-2">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck3" />
  <label class="form-check-label" for="defaultCheck2">
    Cada 5-6 horas
  </label>
</div>
<div class="form-check mr-2 mb-2">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck4" />
  <label class="form-check-label" for="defaultCheck2">
    No lo sé
  </label>
</div>
            </div>
          </div>

        <h4 className="text-dark mb-4">¿Tu mascota tiene las vacunas al día?</h4>
        <div className="d-flex">
            <div className="text-left">
            <div class="form-check mr-2 mb-2">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
    Sí
  </label>
</div>
            </div>
            <div className="text-center">
                
<div class="form-check mr-2 mb-2">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
  <label class="form-check-label" for="defaultCheck2">
    No
  </label>
</div>
            </div>
            <div className="text-right">
            <div class="form-check d mr-2 mb-2">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
  <label class="form-check-label" for="defaultCheck2">
    No lo sé
  </label>
</div>
            </div>
              
          </div>

        <h4 className="text-dark mt-4 mb-4">¿Cada cuánto llevas a tu mascota a control?</h4>
        <div className="d-flex">
            <div className="text-left">
            <div class="form-check mr-2 mb-2">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
  <label class="form-check-label" for="defaultCheck1">
    Cada 15 días
  </label>
</div>
<div class="form-check mr-2 mb-2">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
  <label class="form-check-label" for="defaultCheck2">
    Cada 1 mes
  </label>
</div>
            </div>
            <div className="text-center">
            <div class="form-check mr-2 mb-2">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck3" />
  <label class="form-check-label" for="defaultCheck2">
    Cada 2 meses
  </label>
</div>
            </div>
            <div className="text-right">
            <div class="form-check mr-2 mb-2">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck4" />
  <label class="form-check-label" for="defaultCheck2">
    Cada 3 meses
  </label>
</div>
<div class="form-check d mr-2 mb-2">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck4" />
  <label class="form-check-label" for="defaultCheck2">
    Cada 4 meses
  </label>
</div>
            </div>
          </div>

          <div className="text-right container mt-3 mr-5">
            <Link to="/Mismascotas" role="button" className="bg-primary text-light btn btn-lg mb-4">Continuar</Link>
            </div>

          </div>

      </>
        );
    }

    export default RegistroMascota;