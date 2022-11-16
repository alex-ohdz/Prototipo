import React, { useState } from "react";
import Slider from "react-slick";
import { arteInfo } from "../../assets/Data/data";


export const Colleccion = () => {

  const RenderImg = ({img, index, cuted}) => {
    return (
      <div style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
        
        <img
          className={`img-fluid imgAlllazyload ${cuted ? "imgAllCuted" : ""}`}
          key={index}
          src={img.imageSrc}
          alt=""
        />
      </div>
    );
  };
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div className="caruselAll">
      <h2>Arte</h2>
      <Slider
        asNavFor={nav2}
        lazyLoad="ondemand"
        ref={(slider1) => setNav1(slider1)}
        className="firstSlider"
      >
        {arteInfo.map((data, index) => (
          <RenderImg img={data} key={index} />
        ))}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={3}
        touchMove={true}
        adaptiveHeight={false}
        centerMode={true}
        swipeToSlide={true}
        focusOnSelect={true}
        className="container secondtSlider"
      >
        {arteInfo.map((data, index) => (
          <RenderImg img={data} cuted={true} key={index} />
        ))}
      </Slider>
    </div>
  );
};


