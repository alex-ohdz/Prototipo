import { Carrousel } from "./Carrousel";
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
      <Destacado />
      {/* <Footer /> */}
      {/* <Eventos /> */}
    </>
  );
};
