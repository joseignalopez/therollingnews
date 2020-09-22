import React from "react";
/* import defaultNew from '../../../defaultNew'; */
import NewTopCard from "./NewTopCard";

const NewTop = (props) => {
    /* const noticias = defaultNew.filter(
        (n) => n.Destacado === true 
      ); */
    /* const noticiasRelevantes = props.noticias.filter((n)=>n.Destacado === true)
    console.log(noticiasRelevantes) */
      /* {props.noticiasDeCategoria.map((noticia, i) => (
        <CardNew key={i} noticia={noticia}></CardNew>
      ))} */
  return (
    <div className=" bk-naranja">
      {
        props.noticiasRelevantes.map((noticia, i)=>
        <NewTopCard key={noticia._id} titulo={noticia.titulo} imagen={noticia.url} noticia = {noticia}></NewTopCard>)

      }
      {/* {noticias.map((noticia, i)=>
          <NewTopCard key={i} titulo={noticia.Titulo} imagen={noticia.Imagen}></NewTopCard>
      )} */}
    </div>
  );
};

export default NewTop;
