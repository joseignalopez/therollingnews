import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faList,faUserCog, faPlusSquare

} from "@fortawesome/free-solid-svg-icons";

const Administrar = () => {
  return (
    <div className="container   ">
       <h3 className="  text-center my-3 ">Bienvenidos Administrador!</h3>
        <div className=" content my-2  bg-gray">
         <div  className= "d-flex alig-items-center">
          <Button variant="primary  pt-2 mx-2"  size="">
            <FontAwesomeIcon icon={faNewspaper} />
            Administrar   Noticias{" "}
          </Button>{" "}
          <Button variant="primary pt-2 " size="">
            <FontAwesomeIcon icon={faPlusSquare} />
            Agregar Noticia Nueva
          </Button>{" "}</div>
        
        <br/>
       <div>
          <Button variant="primary pt-2 mx-2"  size="">
            <FontAwesomeIcon icon={faList} />
            Administrar Categorias{" "}
          </Button>{" "}
          <Button variant="primary my-2 pt-2 "  size="">
            <FontAwesomeIcon icon={faPlusSquare} />
            Agregar categoria Nueva{" "}
          </Button>{" "}</div>
          <br/>
          <div>
          <Button className="" variant="primary pt-2" size="">
            <FontAwesomeIcon icon={faUserCog} />
            Administrar Usuarios{" "}
          </Button>{" "}</div>
        </div>
    </div>
    
  );
};

export default Administrar;
