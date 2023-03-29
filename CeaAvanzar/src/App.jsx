
import React from "react";
import Home from "./componentes/Home";
import SobreNosotros from "./componentes/SobreNosotros";
import Cursos from "./componentes/Cursos";
import NuestraSede from "./componentes/NuestraSede";
import Contactanos from "./componentes/Contactanos";
import { Routes, Route } from "react-router-dom";
import CarruselCursos from "./componentes/CarruselCursos";
import CarruselSede from "./componentes/CarruselSede";

export function App() {

  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre-nosotros" element={<SobreNosotros/>} />
        <Route path="/cursos" element={<Cursos>
          <CarruselCursos/>
        </Cursos>} />
        <Route path="/nuestra-sede" element={<NuestraSede>
          <CarruselSede/>
          </NuestraSede>} />
        <Route path="/contactanos" element={<Contactanos/>} />
      </Routes>
  )
}

export default App;
