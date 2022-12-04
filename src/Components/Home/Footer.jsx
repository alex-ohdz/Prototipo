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
      <div className="derechos">
        <p className="derechosP">Copyright © 2022. Museo de Arte Popular. Todos los derechos reservados</p>
      </div>
      <Redes />
    </footer>
  );
};
