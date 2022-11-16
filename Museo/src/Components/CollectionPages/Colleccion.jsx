import React, { useState } from "react";
import Slider from "react-slick";
import { arteInfo } from "../../assets/Data/data";

export const Colleccion = () => {
  const RenderImg = ({ img, index, cuted }) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          className: "imgAll",
        }}
      >
        <img
          className={`img-fluid lazyload ${cuted ? "imgAllCuted" : ""}`}
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
        responsive={[
          {
            breakpoint: 3000,
            settings: {
              slidesToShow: 12,
            },
          },
          {
            breakpoint: 2000,
            settings: {
              slidesToShow: 11,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
            },
          },
        ]}
        touchMove={true}
        lazyLoad="ondemand"
        centerMode={true}
        swipeToSlide={true}
        focusOnSelect={true}
        className="secondSlider"
      >
        {arteInfo.map((data, index) => (
          <RenderImg img={data} cuted={true} key={index} />
        ))}
      </Slider>
    </div>
  );
};
