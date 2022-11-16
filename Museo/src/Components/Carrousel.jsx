import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { caruselInfo } from "../assets/Data/data";

export const Carrousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const renderCarusel = (carusel, index) => {
    return (
      <Carousel.Item key={index}>
        <img
          className="d-block w-100 carusel lazyload"
          src={carusel.image}
          alt=""
        />
        <Carousel.Caption>
          <h3>{carusel.title}</h3>
          <p>{carusel.text}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {caruselInfo.map(renderCarusel)}
    </Carousel>
  );
};
