import { ImageSlider } from './PartComponents/ImageSlider'
import React from 'react'

export const Documentos = () => {
  return (
    <>
      <h2 className='linea'>
        <span>Documentos</span>
      </h2>
      <ImageSlider collection='Documentos' />
    </>
  )
}
