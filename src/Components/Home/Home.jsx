import { Carrousel } from './Carrousel'
import { About } from './HomeParts/About'
import { Destacado } from './Destacado'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../Css/index.css'
import React from 'react'

AOS.init()

export const Home = () => {
  return (
    <>
      <Carrousel />
      <About />
      <Destacado />
    </>
  )
}
