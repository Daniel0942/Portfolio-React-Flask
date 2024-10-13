import Especialidades from "./components/especialidades/Especialidades";
import Formulario from "./components/formulario/Formulario";
import Header from "./components/header/Header";
import Projetos from "./components/projetos/Projetos";
import Sobre from "./components/sobre/Sobre";
import TopoDoSite from "./components/topoDoSite/TopoDoSite";

function App() {
  return (
    <>
      <Header/>
      <TopoDoSite/>
      <Especialidades/>
      <Sobre/>
      <Projetos/>
      <Formulario/>
    </>
  )
}

export default App;
