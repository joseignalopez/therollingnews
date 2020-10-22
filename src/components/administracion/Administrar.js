import React from "react";
import Button from "react-bootstrap/Button";
import "./style/admin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faList,
  faUserCog,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Administrar = () => {
  return (
    <div className="container bg-dark-transparent d-flex justify-content-center py-3 mb-2">
      <div className="row shadow text-center pb-4">
        <div className="col-sm-12  text-center mb-3">
          <h3 className="text-center py-3 ">Bienvenido Administrador!</h3>
        </div>
        <hr />
        <div className="col-md-12 col-sm-12 mb-2 text-center ">
          <Link
            variant="primary"
            size="lg"
            className="btn text-light button azul m-1 py-1"
            to="/Administracion/Noticias"
          >
            <FontAwesomeIcon icon={faNewspaper} /> Administrar Noticias
          </Link>{" "}
          <Link
            variant="primary"
            size="lg"
            className="btn text-light button azul m-1 py-1"
            to="/Administracion/Noticia"
          >
            <FontAwesomeIcon icon={faPlusSquare} /> Agregar Noticia
          </Link>
        </div>

        <br />
        <div className="col-md-12 col-sm-12 text-center mb-2">
          <Link
            variant="primary"
            size="lg"
            className="btn text-light button azul m-1 py-1"
            to="/Administracion/Categorias/"
          >
            <FontAwesomeIcon icon={faList} /> Administrar Categorias
          </Link>{" "}
          <Link
            variant="primary"
            size="lg"
            className="btn text-light button azul m-1 py-1"
            to="/Administracion/Categoria"
          >
            <FontAwesomeIcon icon={faPlusSquare} /> Agregar categoria
          </Link>
        </div>
        <br />
        <div className="col-sm-12  text-center ">
          <Link variant="primary" size="lg" className="btn text-light button azul m-1 py-1">
            <FontAwesomeIcon icon={faUserCog} /> Administrar Usuarios
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Administrar;
