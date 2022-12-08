import { Barrios } from './PartComponents/Barrios'
import { ImageSlider } from './PartComponents/ImageSlider'
import React from 'react'

export const Historia = () => {
  return (
    <>
      <h2 className='linea'>
        <span>Historia</span>
      </h2>
      <ImageSlider collection='Historia' />
      <Barrios />
    </>
  )
}
