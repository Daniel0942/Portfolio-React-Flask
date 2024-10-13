import Especialidades from "./components/especialidades/Especialidades";
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
    </>
  )
}

export default App;
