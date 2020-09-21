import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FormControl } from "react-bootstrap";
import "./style/login.css";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

const Ingresar = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === "" || email === "") {
      setError(true);
      return;
    }
    setError(false);
    const usuarioBuscado = props.usuarios.find(
      (usuario) => usuario.email === email
    );
    console.log(usuarioBuscado);
    if (usuarioBuscado !== undefined) {
      if (
        email === usuarioBuscado.email &&
        password === usuarioBuscado.password
      ) {
        const usuarioLogueado = {
          nombre: usuarioBuscado.nombre,
          apellido: usuarioBuscado.apellido,
          email: usuarioBuscado.email,
          password: usuarioBuscado.password,
          claseUsuario: "publico",
          statusLogin: true,
        };
        try {
          const respuesta = await fetch(
            `http://localhost:4000/usuarios/${usuarioBuscado.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(usuarioLogueado),
            }
          );
          console.log(respuesta);
          if (respuesta.status === 200) {
            Swal.fire(`Bienvenido ${usuarioBuscado.nombre}!`, "", "success");
            props.history.push("/");
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ocurrió un error!",
            footer: "<p>Ocurrió un error al ingresar</p>",
          });
          console.log(error);
        }
      } 
    }else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ocurrió un error!",
        footer: "<p>Email o contraseña incorrectas</p>",
      });
    }
  };

  return (
    <div className="py-5">
      <div className="fixed-bg w-100">
        <img
          src={process.env.PUBLIC_URL + "/bglogin.jpg"}
          className="bglogin"
        ></img>
      </div>
      <div className="container">
        <div className="row">
          <Card className="border ml-auto col-sm-10 col-md-4 col-lg-5 mt-5">
            <Card.Body>
              <Card.Title className="mb-4 text-danger">Ingresar</Card.Title>
              <Card.Text>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                  </Form.Group>
                  <Form.Group className="my-4" controlId="formBasicPassword">
                    <Form.Control
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Contraseña"
                      name="password"
                    />
                  </Form.Group>

                  <Button
                    className="mb-3 text-white amarillo"
                    type="submit"
                    size="lg"
                    block
                  >
                    Ingresar
                  </Button>

                  <Card.Link className="text-secondary" href="#">
                    ¿Necesitás ayuda?
                  </Card.Link>
                  <Button
                    className="my-4 text-white rojo d-flex align-content-center justify-content-center"
                    type="submit"
                    size="lg"
                    block
                  >
                    Ingresa con Google
                    <FontAwesomeIcon
                      className="mx-2 mt-1"
                      icon={faGoogle}
                      size="1x"
                    ></FontAwesomeIcon>
                  </Button>
                </Form>
              </Card.Text>
              <hr></hr>
              <div className="mt-4">
                <Card.Link className="text-secondary" href="#">
                  ¿No tenés una cuenta?
                </Card.Link>
              </div>
              <div className="mb-4">
                <Card.Link className="text-danger" href="#">
                  Registrarme ahora
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Ingresar);
