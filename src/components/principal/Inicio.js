import React, { useState } from "react";
import Categories from "./Categories";


const Inicio = () => {
  const [categorias, setCategorias] = useState([
    "Actualidad",
    "Espectaculos",
    "Tecnologia",
    "Deportes",
    "Politica",
    "Economia",
    "Salud",
    "Fotografia",
  ])
  
 
  return (
    <div>
      <Categories categorias = {categorias}></Categories>
    </div>
  );
};

export default Inicio;
