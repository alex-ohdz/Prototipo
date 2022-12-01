import { Redes } from "./MainParts/Redes";
import { Horarios } from "./MainParts/Horarios";
import { Localizacion } from "./MainParts/Localizacion";
import { Mapa } from './MainParts/Mapa'
export const Footer = () => {
  return (
    <footer id="footer">
      <div className="col row" id="seccionA">
        <Localizacion />
        <Horarios />
      </div>
      <Redes />
    </footer>
  );
};
