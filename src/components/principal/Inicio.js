import React, { useState } from "react";
import Categories from "./Categories";
import Destacadas from "./Destacadas";
import BannerCovid from "./BannerCovid";
import Publicidad from "./Publicidad";

const Inicio = (props) => {
  const [destacadaBig, setDestacadaBig] = useState({});
  const [destacadaSmall1, setDestacadaSmall1] = useState({});
  const [destacadaSmall2, setDestacadaSmall2] = useState({});
  const [categorias, setCategorias] = useState([
    "Actualidad",
    "Espectaculos",
    "Tecnologia",
    "Deportes",
    "Politica",
    "Economia",
    "Salud",
    "Fotografia",
  ]);

  // const cargaDest = async (e) => {
  //   const big = await props.destacadas[2];
  //   const small1 = await props.destacadas[1];
  //   const small2 = await props.destacadas[0];
  //   setDestacadaBig(big);
  //   setDestacadaSmall1(small1);
  //   setDestacadaSmall2(small2);
  // };
  // cargaDest();

  return (
    <div className="container">
      <Destacadas
      destacadas={props.destacadas}
        // destacadaBig={destacadaBig}
        // destacadaSmall1={destacadaSmall1}
        // destacadaSmall2={destacadaSmall2}
      ></Destacadas>
      <section className="">
        <BannerCovid></BannerCovid>
      </section>
      <aside className="publicidad  py-2 mt-2 ">
        <Publicidad></Publicidad>
      </aside>

      <Categories categorias={categorias}></Categories>
    </div>
  );
};

export default Inicio;
