import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { AccordionSlider } from "./Accordion";
import { RenderTooltip } from "./PartComponents/RenderTooltip";
import { SliderData } from "../../assets/Data/SliderData";


export const ImageSlider = ({ slides }) => {

  const [current, setCurrent] = useState(0);
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
              key={index}
              placement="bottom"
              delay={{ show: 200, hide: 400 }}
              overlay={(props) => RenderTooltip({ slide, ...props })}
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
      <AccordionSlider slide={slides[current]} />
    </>
  );
};
