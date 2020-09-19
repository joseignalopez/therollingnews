import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "../style/admin.css";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

const EditarNoticia = (props) => {
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState(false);

  const tituloRef = useRef("");
  const imagenCabeceraRef = useRef("");
  const resumenRef = useRef("");
  const noticiaRef = useRef("");
  const destacado = props.noticia.destacado;

  const seleccionarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleSubmit = async (e) =>{
      e.preventDefault();

    //   validar
    const _categoria = categoria === "" ? props.noticia.categoria : categoria;
    if (
        tituloRef.current.value.trim() === "" ||
        imagenCabeceraRef.current.value.trim() === "" ||
        resumenRef.current.value.trim() === "" ||
        noticiaRef.current.value.trim() === "" ||
        _categoria === ""
      ) {
        // mostrar alert de error
        setError(true);
        return;
      }
      setError(false);

    //   crear objeto a guardar en la DB
    const noticiaModificada = {
        titulo: tituloRef.current.value,
        imagenCabecera: imagenCabeceraRef.current.value,
        resumen: resumenRef.current.value,
        noticia: noticiaRef.current.value,
        categoria: _categoria,
        destacado
    }

    try {
        const respuesta = await fetch(
          `http://localhost:4000/noticias/${props.noticia.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(noticiaModificada),
          }
        );
        console.log(respuesta);
        if (respuesta.status === 200) {
          props.setRecargarNoticias(true);
          Swal.fire("Listo!", "La noticia se modificó correctamente", "success");
          props.history.push("/admin/listanoticias");
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocurrió un error!',
          footer: '<p>No se pudo modificar la noticia.</p>'
        })
        console.log(error);
      }

  }


  return (
    <section className="container">
      <Form onSubmit={handleSubmit}>
        <h1 className="text-center my-4">Modificar noticia</h1>
        <Form.Group>
          <Form.Label>Título de la nota</Form.Label>
          <Form.Control
            type="text"
            placeholder="Agregar el título de la nota"
            ref={tituloRef}
            defaultValue={props.noticia.titulo}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen de cabecera</Form.Label>
          <Form.Control
            type="text"
            placeholder="Agregar url de la imagen"
            ref={imagenCabeceraRef}
            defaultValue={props.noticia.imagenCabecera}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Resumen</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Agregar un extracto de la nota"
            ref={resumenRef}
            defaultValue={props.noticia.resumen}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Noticia</Form.Label>
          <Form.Control
            as="textarea"
            rows="10"
            placeholder="Agregar el cuerpo de la nota"
            ref={noticiaRef}
            defaultValue={props.noticia.noticia}
          />
        </Form.Group>
        <h3 className="text-center mt-4">Categoría</h3>
        <div className="my-3 text-center">
          <Form.Check
            type="radio"
            label="Actualidad"
            value="Actualidad"
            name="categoria"
            inline
            className="mx-3"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "Actualidad"}
          />
          <Form.Check
            type="radio"
            label="Espectáculos"
            value="Espectaculos"
            name="categoria"
            inline
            className="mx-3"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "Espectaculos"}
          />
          <Form.Check
            type="radio"
            label="Tecnología"
            value="Tecnologia"
            name="categoria"
            inline
            className="mx-3"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "Tecnologia"}
          />
          <Form.Check
            type="radio"
            label="Deportes"
            value="Deportes"
            name="categoria"
            inline
            className="mx-3"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "Deportes"}
          />
          <Form.Check
            type="radio"
            label="Política"
            value="Politica"
            name="categoria"
            inline
            className="mx-3"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "Politica"}
          />
          <Form.Check
            type="radio"
            label="Economía"
            value="Economia"
            name="categoria"
            inline
            className="mx-3"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "Economia"}
          />
          <Form.Check
            type="radio"
            label="Salud"
            value="Salud"
            name="categoria"
            inline
            className="mx-3"
            onChange={seleccionarCategoria}
            defaultChecked={props.noticia.categoria === "Salud"}
          />
        </div>

        {
          // alerta en caso de no completar los datos al intentar el submit
          error ? (
            <Alert className="mt-4" variant={"danger"}>
              Debes completar todos los campos
            </Alert>
          ) : null
        }
        <Button type="submit" className="w-100 mb-4 boton">
          GUARDAR CAMBIOS
        </Button>
      </Form>
    </section>
  );
};

export default withRouter(EditarNoticia);
