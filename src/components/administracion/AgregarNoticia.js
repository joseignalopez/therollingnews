import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import './style/agregarnoticia.css'

const AgregarNoticia = () => {
  return (
    <section className="container">
      <Form>
        <h1 className="text-center my-4">Agregar nueva noticia</h1>
        <Form.Group>
          <Form.Label>Título de la nota</Form.Label>
          <Form.Control type="text" placeholder="Agregar el título de la nota" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Imagen de cabecera</Form.Label>
          <Form.Control type="text" placeholder="Agregar url de la imagen" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Resumen</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="Agregar un extracto de la nota" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Noticia</Form.Label>
          <Form.Control as="textarea" rows="10" placeholder="Agregar el cuerpo de la nota" />
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
          />
          <Form.Check
            type="radio"
            label="Espectáculos"
            value="Espectaculos"
            name="categoria"
            inline
            className="mx-3"
          />
          <Form.Check
            type="radio"
            label="Tecnología"
            value="Tecnologia"
            name="categoria"
            inline
            className="mx-3"
          />
          <Form.Check
            type="radio"
            label="Deportes"
            value="Deportes"
            name="categoria"
            inline
            className="mx-3"
          />
          <Form.Check
            type="radio"
            label="Política"
            value="Politica"
            name="categoria"
            inline
            className="mx-3"
          />
          <Form.Check
            type="radio"
            label="Economía"
            value="Economia"
            name="categoria"
            inline
            className="mx-3"
          />
          <Form.Check
            type="radio"
            label="Salud"
            value="Salud"
            name="categoria"
            inline
            className="mx-3"
          />
        </div>
        <Button type="submit" className="w-100 mb-4 boton">
          AGREGAR NOTICIA
        </Button>
      </Form>
    </section>
  );
};

export default AgregarNoticia;
