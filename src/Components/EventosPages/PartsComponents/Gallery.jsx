import React from "react";
import { SliderData } from "../../../assets/Data/SliderData";
import { StarsButton } from "./GalleryParts";

export const Gallery = ({ value }) => {
  const renderGallery = (gallery, index) => {
    return (
      <>
        <div className="contSup">
          <div className="gallery-cont" key={index}>
            <img
              className="lazyload  gallery-img img-fluid"
              src={gallery.image}
              alt={gallery.alt}
            />
            <div className="menuDown">
             <StarsButton/>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
     <h1 className="hGallery">{ value }</h1>
      <div className="gallery-container">{SliderData.map(renderGallery)}</div>
    </>
  );
};
