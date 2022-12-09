import { useEffect, useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { getCollection } from '../../../../firebase/index'
import { AccordionSlider } from './Accordion'

// eslint-disable-next-line react/prop-types
export const ImageSlider = ({ collection }) => {
  const [picture, setPicture] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCollection(collection)
      setPicture(data.filter(item => item.image))
    }

    fetchData()
  }, [])

  const [current, setCurrent] = useState(0)
  const length = picture.length
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(picture) || picture.length <= 0) {
    return null
  }

  return (
    <div>
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {picture.map((picture, index) => {
          return (
            <div
              className={index === current ? 'slideX active' : 'slideX'}
              key={picture.id}
            >
              {index === current && (
                <img
                  src={picture.image}
                  alt='travel image'
                  className='image img-fluid'
                />
              )}
            </div>
          )
        })}
        <h5 className='titleSlider'>
          <span>
            <em>
              {picture[current] && picture[current].title
                ? picture[current].title + ' , ' + picture[current].autor
                : 'Anónimo'}
            </em>
          </span>
        </h5>
      </section>

      <AccordionSlider picture={picture[current].description} />
    </div>
  )
}
