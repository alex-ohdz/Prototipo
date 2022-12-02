import { Redes } from "./HomeParts/Redes";
import { Horarios } from "./HomeParts/Horarios";
import { Localizacion } from "./HomeParts/Localizacion";
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
