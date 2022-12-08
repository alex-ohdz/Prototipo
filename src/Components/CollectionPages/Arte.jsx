import { ImageSlider } from './PartComponents/ImageSlider'
import React from 'react'

export const Arte = () => {
  return (
    <>
      <h2 className='linea'>
        <span>Arte</span>
      </h2>
      <ImageSlider collection='Arte' />
    </>
  )
}
