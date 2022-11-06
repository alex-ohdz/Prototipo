import { Navegador } from "./Navegador";
import { Carrousel } from "./Carrousel";
import { Destacado } from "./Destacado";
import './index.css';


export const MuseoApp = () => {
  return (
	<>
	  <Navegador />
	  <Carrousel />
	  <Destacado />
	</>
  )
}
