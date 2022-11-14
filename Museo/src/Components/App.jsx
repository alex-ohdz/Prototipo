import { Navegador } from "./Navegador";
import { Route, Routes } from "react-router-dom";
import { MuseoApp } from "./MuseoApp";
import { Colleccion } from "./CollectionPages/Colleccion";
import { Eventos } from "./EventosPages/Eventos";
import { Visita } from "./VisitasPage/Visita";






export const App = () => {
  return (
    <>
      <Navegador />
      <Routes>
        <Route path="/" element={<MuseoApp />} />
        <Route path="/collecion" element={<Colleccion />} />
        <Route path="/visita" element={<Visita />} />
        <Route path="/eventos" element={<Eventos/>} />
      </Routes>
    </>
  );
};
