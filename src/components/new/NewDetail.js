import React from "react";
import NewContent from "./NewContent";
import NewHeader from "./NewHeader";
import NewRelated from "./related/NewRelated";
import NewTop from "./topNew/NewTop";
import "./style/newDetail.css";

const NewDetail = (props) => {
  return (
    <div className="pl-4 pr-4">
      <NewHeader></NewHeader>
      <div className="d-flex justify-content-center mb-3">
        <NewContent noticia={props.noticia} className=""></NewContent>
        <div className="border pl-2 pr-2 mt-3 rounded-lg col-2 shadow bg-white rounded">
          <NewTop
            noticiasRelevantes={props.noticias.filter(
              (n) => n.Destacado === true
            )}
          ></NewTop>
          <div className="bk-azul mt-3">
            <h1>Publicidad</h1>
          </div>
          <div className="bk-naranja mt-3">
            <h1>Otra cosa</h1>
          </div>
        </div>
      </div>
      <NewRelated
        noticiasRelacionadas={props.noticias.filter(
          (n) => n.Categoria === props.noticia.Categoria && n.Id !== props.noticia.Id
        )}
      ></NewRelated>
    </div>
  );
};

export default NewDetail;
