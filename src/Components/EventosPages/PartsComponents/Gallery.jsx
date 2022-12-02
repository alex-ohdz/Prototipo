import React from "react";
import { SliderData } from "../../../assets/Data/SliderData";

export const Gallery = () => {
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
              <div className="contadorStar">
              <p>4</p>
              </div>
              <div className="contadorButton">
                <button className="bStar">
                  <i class="bi bi-star"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <h1 className="hGallery">Galería</h1>
      <div className="gallery-container">{SliderData.map(renderGallery)}</div>
    </>
  );
};
