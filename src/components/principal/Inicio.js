import React, { useState } from "react";
import Categories from "./Categories";
import Destacadas from "./Destacadas";
import BannerCovid from './BannerCovid';
import Publicidad from './Publicidad';

   


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
    <div className="container">
      <Destacadas></Destacadas>
      <section className="">
        <BannerCovid></BannerCovid>
      </section>
      <aside className="publicidad  py-2 mt-2 ">
		  <Publicidad></Publicidad>
		</aside>
     
      <Categories categorias = {categorias}></Categories>
    </div>
  );
};

export default Inicio;
