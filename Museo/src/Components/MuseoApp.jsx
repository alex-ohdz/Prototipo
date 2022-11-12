import { Navegador } from "./Navegador";
import { Carrousel } from "./Carrousel";
import { Destacado } from "./Destacado";
import { Footer } from "./Footer";
import { Eventos } from "./Eventos";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
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
