import { ImageSlider } from "./ImageSlider";
import { SliderData } from "../../assets/Data/SliderData";
import { ApiRest } from "./PartComponents/ApiRest";

export const Arte = () => {
  return (
    <>
      <ImageSlider slides={SliderData} />
      <ApiRest />
    </>
  );
};
