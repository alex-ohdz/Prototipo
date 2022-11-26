import { ImageSlider } from "./ImageSlider";
import { SliderData } from "../../assets/Data/SliderData";
// import { Accordion } from "./Accordion";

export const Arte = () => {
  return (
    <>
      <ImageSlider slides={SliderData} />
      {/* <Accordion /> */}
    </>
  );
};
