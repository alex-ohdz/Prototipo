import ReactAudioPlayer from 'react-audio-player'
export const Barrios = () => {
  return (
    <section className='historia'>
      <h1 className='barriosHead'>Barrios y sus polcas</h1>
      <h4 className='barriosHead'>Remedios</h4>
      <h6 className='barriosHead'>
        Se realizan los 24 de diciembre de cada año
      </h6>
      <div className='barrios'>
        <div className='barrioA'>
          <h4>El Carmen</h4>
          <img
            className='barrioAImg img-fluid'
            src='src\assets\Images\C2.jpg'
            alt='El Carmen'
          />
          <ReactAudioPlayer
            src='src\assets\Audio\PolcaElCarmen(entrada).ogg'
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
            src='src\assets\Audio\PolcaSanSalvador(carroza).ogg'
            controls
          />
        </div>
      </div>
    </section>
  )
}
