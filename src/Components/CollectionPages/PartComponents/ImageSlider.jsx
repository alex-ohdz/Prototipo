import { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { AccordionSlider } from "./Accordion";

export const ImageSlider = ({value}) => {
  const [picture, setPicture] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setPicture(data.results);
    };

    fetchData();
  }, []);

  const [current, setCurrent] = useState(0);
  const length = picture.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(picture) || picture.length <= 0) {
    return null;
  }

  return (
    <>
      <h2 className="linea">
        <span>{value}</span>
      </h2>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {picture.map((picture, index) => {
          return (
            <div
              className={index === current ? "slideX active" : "slideX"}
              key={picture.id}
            >
              {index === current && (
                <img src={picture.image} alt="travel image" className="image" />
              )}
            </div>
          );
        })}
        <h5 className="titleSlider"><span><em>{picture[current].name}</em>, {picture[current].species}</span></h5>
      </section>

      <AccordionSlider picture={picture[current]} />
    </>
  );
};
