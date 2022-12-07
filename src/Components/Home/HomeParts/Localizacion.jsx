import React from 'react'
import { Mapa } from './Mapa'

export const Localizacion = () => {
  return (
    <div className='info col-md-6 col-sm-6'>
      <h4 className='titleF'>Visítanos</h4>
      <hr />
      <h6>Museo de las Parrandas :</h6>
      <p className='bodyF'>
        Calle Alejandro del Río #74 / Máximo Gómez y Enrique Malaret.
        <br />
        Remedios, Villa Clara, Cuba.
      </p>
      <Mapa />
      <p className='bodyF'>Teléfono : 42396818</p>
    </div>
  )
}
