import React, { useEffect, useState } from "react";
import CategoryNew from "./CategoryNew";
import defaultNew from "../../defaultNew";

const Categories = (props) => {
  /* const noticias = defaultNew; */
  const[noticias, setNoticias] = useState([])
  useEffect(()=>{
    cargarNoticias();
  },[])
  const cargarNoticias = async()=>{
    try {
      const consultar = await fetch("https://the-rolling-new.herokuapp.com/api/theRollingNew/")
      const resultado = await consultar.json();
      console.log(resultado);
      setNoticias(resultado);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      {props.categorias.map((valueCategory) => (
        /* console.log(valueCategory) */
        <CategoryNew
          key={valueCategory._id}
          noticiasDeCategoria={noticias.filter(
            (n) => n.categoria === valueCategory.nombre
          )}
          nombreCategoria={valueCategory.nombre}
        ></CategoryNew>
      ))}
    </div>
  );
};

export default Categories;
