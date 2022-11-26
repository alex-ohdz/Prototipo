import  React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { arteInfo } from "../../assets/Data/data";


export const Fotografia = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const renderAll = (x, index) => {
    return (
      <Carousel.Item key={index}>
        <img
          className="d-block w-100 carusel lazyload"
          src={x.image}
          alt=""
        />
        <Carousel.Caption>
          <h3>{x.title}</h3>
          <p>{x.text}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {arteInfo.map(renderAll)}
    </Carousel>
  );
};