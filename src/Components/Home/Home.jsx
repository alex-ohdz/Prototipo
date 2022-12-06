import { Carrousel } from "./Carrousel";
import { About } from "./HomeParts/About";
import { Destacado } from "./Destacado";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Css/index.css";
AOS.init();

export const Home = () => {
  return (
    <>
      {/* <Navegador /> */}
      
      <Carrousel />
      <About/>
      <Destacado />
      {/* <Footer /> */}
      {/* <Eventos /> */}
    </>
  );
};
