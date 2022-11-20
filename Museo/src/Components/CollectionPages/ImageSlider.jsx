import React, { useState, useRef } from "react";
import { SliderData } from "../../assets/Data/SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from "react-bootstrap/Tooltip";

export const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  const renderTooltip = (props) => (
    <Tooltip id="imgTooltip" {...props}>
      <span><em>Titulo de la Obra</em>, Autor</span>
    </Tooltip>
  );
  return (
    <>
      <h2 className="linea">
        <span>ARTE</span>
      </h2>
      <section className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="travel image" className="image" />
              )}
            </div>
            </OverlayTrigger>
          );
        })}
      </section>
    </>
  );
};
