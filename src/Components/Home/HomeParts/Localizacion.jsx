import React from 'react'
import { Mapa } from './Mapa'

export const Localizacion = () => {
  return (
	<div className="info col-md-6 col-sm-6">
	<h4 className='titleF'>Visítanos</h4>
	<hr />
	<p className='bodyF'>
	  aqui va la direccion de el museo
	  <br />
	  Remedios ,Villa Clara, Cuba
	</p>
	<Mapa/>
  </div>
  )
}
