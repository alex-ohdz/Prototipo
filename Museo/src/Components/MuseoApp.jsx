import { Navegador } from "./Navegador";
import { Carrousel } from "./Carrousel";
import { Destacado } from "./Destacado";
import { Eventos } from "./Eventos";
import './index.css';



export const MuseoApp = () => {
  return (
	<>
	  <Navegador />
	  <Carrousel />
	  <Destacado />
	  {/* <Eventos /> */}
	</>
  )
}
