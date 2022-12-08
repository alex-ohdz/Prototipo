import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
export const Barrios = () => {
  return (
    <section className='historia'>
      <h1 className='barriosHead'>Barrios y sus polcas</h1>

      <div className='barrios'>
        <div className='barrioA'>
          <h4>El Carmen</h4>
          <img
            className='barrioAImg img-fluid'
            src='src\assets\Images\C2.jpg'
            alt='El sCarmen'
          />
          <ReactAudioPlayer
            src='src\assets\Audio\PolcaElCarmen(entrada).mp3'
            autoPlay
            controls
          />
        </div>
        <div className='barrioA'>
          <h4>El San Salvador</h4>
          <img
            className='barrioAImg img-fluid'
            src='src\assets\Images\C1.jpg'
            alt='El San Salvador'
          />
          <ReactAudioPlayer
            src='src\assets\Audio\PolcaSanSalvador(carroza).mp3'
            controls
          />
        </div>
      </div>
    </section>
  )
}
