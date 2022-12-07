import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { arteInfo } from '../../assets/Data/data'

export const Carrousel = () => {
  const [index, setIndex] = useState(0)
  const [arteInfo, setArteInfo] = useState([])

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCollection("Carousel")
      setArteInfo(data)
    }

    fetchData()
  }, [])

  const renderCarusel = (carusel, index) => {
    return (
      <Carousel.Item key={index}>
        <img
          className='d-block w-100 caruselH lazyload'
          src={carusel.image}
          alt=''
        />
        <Carousel.Caption>
          <h3>{carusel.title}</h3>
          <p>{carusel.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    )
  }

  return (
    <Carousel
      className='caruselHome'
      activeIndex={index}
      onSelect={handleSelect}
    >
      {arteInfo.map(renderCarusel)}
    </Carousel>
  )
}
