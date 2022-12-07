import React from 'react'

export const Horarios = () => {
  return (
    <div className='horario col-md-6 col-sm-6'>
      <h4 className='titleF'>Horarios</h4>
      <hr />
      <p className='bodyF1'>
        <b>Abierto :</b>
      </p>
      <p className='bodyF'>
        Martes a sábado :
        <br />
        9:00am a 12:00pm <br /> 1:30pm a 4:30pm
      </p>
      <p className='bodyF1'>
        <b>Cerrado :</b>
      </p>
      <p className='bodyF'>
        Lunes – cerrados al público por conservación.
        <br />
        Domingo
      </p>
    </div>
  )
}
