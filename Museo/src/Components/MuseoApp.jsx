import { Navegador } from "./Navegador";
import { Carrousel } from "./Carrousel";
import { Destacado } from "./Destacado";
import { Footer } from "./Footer";
import { Eventos } from "./Eventos";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import './index.css';




export const MuseoApp = () => {
  return (
	<>
	  <Navegador />
	  <Carrousel />
	  <Destacado />
	  <Footer />
	  {/* <Eventos /> */}
	</>
  )
}
