import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ElementoListaCat = (props) => {
  const eliminarCategoria = (id) => {
    Swal.fire({
      title: "Estás seguro?",
      text: "La categoría no se podrá recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.value) {
        try {
          const respuesta = await fetch(
            `http://localhost:4000/categorias/${id}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log(respuesta);
          if (respuesta.status === 200) {
            props.setRecargarCategorias(true);
            Swal.fire("Listo!", "La categoría ha sido eliminada", "success");
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ocurrió un error!",
            footer: "<p>No se pudo eliminar la categoría</p>",
          });
        }
      }
    });
  };

  return (
    <ListGroup.Item className="d-flex align-items-center">
      <p className="pt-3">
        <span className="font-weight-bold">{props.categoria.nombreCat} </span>
        {props.categoria.descripcionCat}
      </p>
      <Link
        to={`/admin/editarCat/${props.categoria.id}`}
        className="btn btn-outline-primary mx-1 editar ml-auto"
      >
        <FontAwesomeIcon icon={faEdit} size="2x"></FontAwesomeIcon>
      </Link>
      <Button
        variant="outline-danger"
        size="sm"
        className="mx-1 eliminar"
        onClick={() => eliminarCategoria(props.categoria.id)}
      >
        <FontAwesomeIcon icon={faTrashAlt} size="2x"></FontAwesomeIcon>
      </Button>
    </ListGroup.Item>
  );
};

export default ElementoListaCat;
