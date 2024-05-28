import { Routes, Route } from "react-router-dom";
import Inicio from "./views/Inicio";
import Peleadores from "./views/Peleadores";
import Layout from "./views/Layout";
import NotFound from "./views/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>} path="/">
          <Route element={<Inicio />} index></Route>
          <Route element={<Peleadores />} path="/peleadores"></Route>
          <Route element={<NotFound/>} path="*"></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
