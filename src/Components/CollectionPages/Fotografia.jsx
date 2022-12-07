import { ImageSlider } from './PartComponents/ImageSlider'
import React from 'react'


export const Fotografia = () => {
  return (
    <>
      <h2 className='linea'>
        <span>Fotografía</span>
      </h2>
      <ImageSlider collection='Fotografia' />
    </>
  )
}
