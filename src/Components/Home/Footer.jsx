import { Redes } from './HomeParts/Redes'
import { Horarios } from './HomeParts/Horarios'
import { Localizacion } from './HomeParts/Localizacion'
import React from 'react'

export const Footer = () => {
  return (
    <footer id='footer'>
      <div className='col row' id='seccionA'>
        <Horarios />
        <Localizacion />
      </div>
      <Redes />
      <div className='derechos'>
        <p className='derechosP1'>Copyright © 2022. Museo de Arte Popular</p>
        <p className='derechosP2'>Todos los derechos reservados</p>
      </div>
    </footer>
  )
}
