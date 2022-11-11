import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


export const Carrousel = () => {
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
 
  const caruselInfo = [
    {
      image: "src/Images/caruselImg/2.jpg",
      title: "DOS3",
      text: "Probandoooooo2222",
    },
    {
      image: "src/Images/caruselImg/3.jpg",
      title: "DOS3",
      text: "Probandoooooo2222",
    },
    {
      image: "src/Images/caruselImg/5.jpg",
      title: "DOS3",
      text: "Probandoooooo2222",
    },
 
  ];
  const renderCarusel = (carusel, index) => {
  return (
  
      <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={carusel.image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{carusel.title}</h3>
          <p>{carusel.text}</p>
        </Carousel.Caption>
      </Carousel.Item>
   
  );
}

return(
  <Carousel activeIndex={index} onSelect={handleSelect}>
    {caruselInfo.map(renderCarusel)}
    </Carousel>
)
};