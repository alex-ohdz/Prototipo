import { Carrousel } from "./Carrousel";
import { Destacado } from "./Destacado";
import { Footer } from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
AOS.init();

export const MuseoApp = () => {
  return (
    <>
      {/* <Navegador /> */}
      <Carrousel />
      <Destacado />
      {/* <Footer /> */}
      {/* <Eventos /> */}
    </>
  );
};
