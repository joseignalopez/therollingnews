import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const AgregarNoticia = () => {
  return (
    <section className="container">
      <Form>
        <h1 className="text-center my-4">Agregar nuevo producto</h1>
        <Form.Group controlId="productoID">
          <Form.Label>Nombre del producto *</Form.Label>
          <Form.Control type="text" placeholder="Ej: Licuado" />
        </Form.Group>
        <Form.Group controlId="precioID">
          <Form.Label>Precio *</Form.Label>
          <Form.Control type="number" placeholder="Ej: $150" />
        </Form.Group>
        <h3 className="text-center mt-4">Categoría</h3>
        <div className="my-3 text-center">
          <Form.Check
            type="radio"
            label="Bebida caliente"
            value="bebida-caliente"
            name="categoria"
            inline
          />
          <Form.Check
            type="radio"
            label="Bebida fría"
            value="bebida-fria"
            name="categoria"
            inline
          />
          <Form.Check
            type="radio"
            label="Sandwich"
            value="sandwich"
            name="categoria"
            inline
          />
          <Form.Check
            type="radio"
            label="Panadería"
            value="panaderia"
            name="categoria"
            inline
          />
          <Form.Check
            type="radio"
            label="Pastelería"
            value="pasteleria"
            name="categoria"
            inline
          />
        </div>
        <Button variant="primary" type="submit" className="w-100">
          Agregar
        </Button>
      </Form>
    </section>
  );
};

export default AgregarNoticia;
