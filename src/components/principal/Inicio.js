import React, { useEffect, useState } from "react";
import Categories from "./Categories";
import Destacadas from "./Destacadas";
import BannerCovid from "./BannerCovid";
import Publicidad from "./Publicidad";

const Inicio = (props) => {
  /* const [destacadaBig, setDestacadaBig] = useState({});
  const [destacadaSmall1, setDestacadaSmall1] = useState({});
  const [destacadaSmall2, setDestacadaSmall2] = useState({}); */
  /* const [bandera, setBandera] = useEffect(true) */

  /*  useEffect(() => {
    console.log("En useEffect inicio.js")
    console.log(props.destacadas)
    const big = props.destacadas[2];
    console.log(big)
    const small1 = props.destacadas[1];
    const small2 = props.destacadas[0];
    setDestacadaBig(big);
    setDestacadaSmall1(small1);
    setDestacadaSmall2(small2);

  }, [destacadaBig, destacadaSmall1, destacadaSmall2]); */

  /* const cargaDest = async (e) => {
    console.log(props.destacadas[2])
    const big = await props.destacadas[2];
    console.log(big)
    const small1 = await props.destacadas[1];
    const small2 = await props.destacadas[0];
    setDestacadaBig(big);
    setDestacadaSmall1(small1);
    setDestacadaSmall2(small2);
  }; */

  /* const cargaDest = async (e) => {
    const big = await props.destacadas[2];
    const small1 = await props.destacadas[1];
    const small2 = await props.destacadas[0];
    setDestacadaBig(big);
    setDestacadaSmall1(small1);
    setDestacadaSmall2(small2);
  }; */
  // /* cargaDest(); */

  return (
    <div className="container">
      <section className="row my-5">
        {
          props.destacadas.map((destacada) =>(
            <Destacadas key={destacada._id} titulo={destacada.titulo} imagen={destacada.url} detalleCorto={destacada.detalleCorto}></Destacadas>
          ))
        }
      </section>
      {/* { () => {
        if (
          props.destacadas[0] !== undefined &&
          props.destacadas[1] !== undefined &&
          props.destacadas[2] !== undefined
        ) {
          return (
            <Destacadas
              destacada={props.destacadas}
              destacadaBig={props.destacadas[2]}
              destacadaSmall1={props.destacadas[1]}
              destacadaSmall2={props.destacadas[0]}
            ></Destacadas>
          );
        }else{
          console.log("no funciona")
      }}} */}
      <section className="">
        <BannerCovid></BannerCovid>
      </section>
      <aside className="publicidad  py-2 mt-2 ">
        <Publicidad></Publicidad>
      </aside>

      <Categories categorias={props.categorias}></Categories>
    </div>
  );
};

export default Inicio;
