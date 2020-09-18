import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

const AgregarCategoria = () => {
  const [categoria, setCategoria] = useState("");
  const [descripcionCat, setDescripcionCat] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
      e.preventDefault()
      if (categoria.trim() === "" || descripcionCat.trim() === ""){
          setError(true);
          return;
      }
      setError(false);
  
  const categoriaNueva = {
      categoria,
      descripcionCat
  }

  try {
    const resultado = await fetch(
        "http://localhost:4000/categorias",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(categoriaNueva),
        }
      );
      
  } catch (error) {
      
  }}


    return (
      <section className="container px-5">
        <h1 className="text-center my-4">Agregar Categoría</h1>
        <Form onSubmit={handleSubmit} className="mt-5 mb-3">
          <Form.Group>
            <Form.Label>Categoría</Form.Label>
            <Form.Control
              type="text"
              placeholder="ingresar el nombre de la categoría"
              onChange={(e) => setCategoria(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="my-4">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              placeholder="una descripción breve de la categoría"
              onChange={(e) => setDescripcionCat(e.target.value)}
            />
          </Form.Group>
          {
          // alerta en caso de no completar los datos al intentar el submit
          error ? (
            <Alert className="mt-4" variant={"danger"}>
              Se debe completar todos los campos
            </Alert>
          ) : null
        }
          <Button type="submit" className="w-100 my-4 boton">
            AGREGAR CATEGORIA
          </Button>
        </Form>
      </section>
    );
};

export default withRouter(AgregarCategoria);
