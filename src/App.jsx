import Header from "./components/Header"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom";
import Inicio from "./views/Inicio";
import Peleadores from "./views/Peleadores"
import Contenido from "./views/Contenido";
import Predicciones from "./views/Predicciones";
import Eventos from "./views/Eventos";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Inicio/>} path="/"></Route>
        <Route element={<Peleadores/>} path="/peleadores"></Route>
        <Route element={<Contenido/>} path="/contenido"></Route>
        <Route element={<Predicciones/>} path="/predicciones"></Route>
        <Route element={<Eventos/>} path="/eventos"></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
