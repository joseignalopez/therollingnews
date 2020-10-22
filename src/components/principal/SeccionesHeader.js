import React from "react";
import { Link } from "react-router-dom";

const SeccionesHeader = (props) => {
  return (
    <div className="subnav-content d-flex justify-content-center">
      <ul className="d-flex  flex-column flex-lg-row">
        {props.categorias.map((categoria) => (
          <li key={categoria._id} className="nav-item my-1  ">
            <Link to={`/Categoria/${categoria.nombre}`} className="nav-link">
              {categoria.nombre}
            </Link>
          </li>
        ))}
        <li className="nav-item my-1">
          <a className="nav-link " href="session/covid19">
            Covid-19
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SeccionesHeader;
