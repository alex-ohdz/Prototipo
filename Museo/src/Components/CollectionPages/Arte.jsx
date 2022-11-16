import React, { useState } from "react";
import Slider from "react-slick";
import { arteInfo } from "../../assets/Data/data";

const RenderArteImg = ({img, index, cuted}) => {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
      
      <img
        className={`img-fluid imgArte lazyload ${cuted ? "imgArteCuted" : ""}`}
        key={index}
        src={img.imageSrc}
        alt=""
      />
    </div>
  );
};
export const Arte = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div className="caruselArte">
      <h2>Arte</h2>
      <Slider
        asNavFor={nav2}
        lazyLoad="ondemand"
        ref={(slider1) => setNav1(slider1)}
        className="firstSlider"
      >
        {arteInfo.map((data, index) => (
          <RenderArteImg img={data} key={index} />
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
          <RenderArteImg img={data} cuted={true} key={index} />
        ))}
      </Slider>
    </div>
  );
};
