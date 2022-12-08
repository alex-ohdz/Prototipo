import React from 'react'

export const Redes = () => {
  return (
    <div className='redes container'>
      <h6 className='titleRedes'>Contáctanos:</h6>
      <ul>
        <li>
          <a
            href='https://www.instagram.com/museo.parrandas/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='bi bi-instagram'></i>
          </a>
        </li>
        <li>
          <a
            href='https://www.facebook.com/museoparrandas/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='bi bi-facebook'></i>
          </a>
        </li>
        {/* <li>
          <a href="" target="_blank">
            <i className="bi bi-whatsapp"></i>
          </a>
        </li> */}
        <li>
          <a href='https://t.me/eri5c' target='_blank' rel='noreferrer'>
            <i className='bi bi-telegram'></i>
          </a>
        </li>
        <li>
          <a
            href='https://www.youtube.com/@museodelasparrandas4711'
            target='_blank'
            rel='noreferrer'
          >
            <i className='bi bi-youtube'></i>
          </a>
        </li>
      </ul>
    </div>
  )
}
