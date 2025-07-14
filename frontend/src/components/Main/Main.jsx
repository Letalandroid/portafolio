import Portada from "./components/portada/portada";
import Descripcion from "./components/descripcion/descripcion";
import Tecnologias from "./components/tecnologias/tecnologias";
import Proyectos from "./components/proyectos/Proyectos";
import setTitle from "../../setTitle"

export default function Main() {
  setTitle("Home")
  return (
    <main>
      <Portada />
      <Descripcion />
      <Tecnologias />
      <Proyectos />
    </main>
  );
}
