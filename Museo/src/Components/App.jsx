import { Navegador } from "./Navegador";
import { Route, Routes } from "react-router-dom";
import { MuseoApp } from "./MuseoApp";
import { Colleccion } from "./CollectionPages/Colleccion";
export const App = () => {
  return (
    <>
      <Navegador />
      <Routes>
        <Route path="/" element={<MuseoApp />} />
        <Route path="/collecion" element={<Colleccion />} />
      </Routes>
    </>
  );
};
