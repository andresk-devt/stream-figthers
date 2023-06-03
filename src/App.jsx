import { Routes, Route } from "react-router-dom";
import Inicio from "./views/Inicio";
import Peleadores from "./views/Peleadores";
import Contenido from "./views/Contenido";
import Predicciones from "./views/Predicciones";
import Eventos from "./views/Eventos";
import Layout from "./views/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>} path="/">
          <Route element={<Inicio />} path="/"></Route>
          <Route element={<Peleadores />} path="/peleadores"></Route>
          <Route element={<Contenido />} path="/contenido"></Route>
          <Route element={<Predicciones />} path="/predicciones"></Route>
          <Route element={<Eventos />} path="/eventos"></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
