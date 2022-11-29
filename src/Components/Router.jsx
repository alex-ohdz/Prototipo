import { Navegador } from "./Navegador";
import { Route, Routes } from "react-router-dom";
import { MuseoApp } from "./MuseoApp";
import { Arte } from "./CollectionPages/Arte";
import { Fotografia } from "./CollectionPages/Fotografia";
import { Historia } from "./CollectionPages/Historia";
import { Documentos } from "./CollectionPages/Documentos";
import { Eventos } from "./EventosPages/Eventos";
import { Visita } from "./VisitasPage/Visita";
import { Footer } from "./Footer";

export const Router = () => {
  return (
    <>
      
        <Navegador />
        
          <Routes>
            <Route path="/" element={<MuseoApp />} />
            <Route path="/arte" element={<Arte />} />
            <Route path="/fotografia" element={<Fotografia />} />
            <Route path="/documentos" element={<Documentos />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/visita" element={<Visita />} />
            <Route path="/eventos" element={<Eventos />} />
          </Routes>
        
        <Footer />
      
    </>
  );
};
