import React from 'react'
import { useState } from 'react'
const buttonStar = document.querySelector('.bi-star')
const buttonNumber = document.querySelector('.button-number')

export const StarsButton = () => {
  const [stars, setStars] = useState(0)
  const handleIncrement = () => {
    setStars(stars + 1)
  }
  return (
    <>
      <div className='contadorStar'>
        <p className='button-number'>{stars}</p>
      </div>
      <div className='contadorButton'>
        <button onClick={handleIncrement} className='button-star'>
          <i className='bi bi-star'></i>
        </button>
      </div>
    </>
  )
}
