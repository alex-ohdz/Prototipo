import { Navegador } from "../Home/Navegador";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Arte } from "../CollectionPages/Arte";
import { Fotografia } from "../CollectionPages/Fotografia";
import { Historia } from "../CollectionPages/Historia";
import { Documentos } from "../CollectionPages/Documentos";
import { Eventos } from "../EventosPages/Eventos";
import { Visita } from "../VisitasPage/Visita";
import { Footer } from "../Home/Footer";

export const Router = () => {
  return (
    <>
      
        <Navegador />
        
          <Routes>
            <Route path="/*" element={<Home />} />
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
