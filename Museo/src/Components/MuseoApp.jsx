import { Carrousel } from "./Carrousel";
import { Destacado } from "./Destacado";
import { Footer } from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import "./index.css";


export const MuseoApp = () => {
  return (
    <>
      {/* <Navegador /> */}
      <Carrousel />
      <Destacado />
      <Footer />
      {/* <Eventos /> */}
    </>
  );
};
