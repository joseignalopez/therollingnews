import React, { useEffect, useState /* ,useEffect */ } from "react";
import { Navbar, Nav, Button, Col, Row } from "react-bootstrap";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCaretDown,
  faCheckSquare,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import SeccionesHeader from "../principal/SeccionesHeader";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import warning from "react-bootstrap/Alert";
import Swal from "sweetalert2";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { render } from "@testing-library/react";

const Header = (props) => {
  const [seccionVisible, setSeccionVisible] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [nombreSuscriptor, setnombreSuscriptor] = useState("");
  const [apellidoSuscriptor, setapellidoSuscriptor] = useState("");
  const [direccionSuscriptor, setdireccionSuscriptor] = useState("");
  const [localidadSuscriptor, setlocalidadSuscriptor] = useState("");
  const [codigoPostalSuscriptor, setcodigoPostalSuscriptor] = useState("");
  const [telefonoSuscriptor, settelefonoSuscriptor] = useState("");
  const [emailSuscriptor, setemailSuscriptor] = useState("");
  const [error, setError] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      nombreSuscriptor.trim() === "" ||
      apellidoSuscriptor.trim() === "" ||
      direccionSuscriptor.trim() === "" ||
      localidadSuscriptor.trim() === "" ||
      codigoPostalSuscriptor.trim() === "" ||
      telefonoSuscriptor.trim() === "" ||
      emailSuscriptor.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    const nuevoSuscriptor = {
      nombreSuscriptor,
      apellidoSuscriptor,
      direccionSuscriptor,
      localidadSuscriptor,
      codigoPostalSuscriptor,
      telefonoSuscriptor,
      emailSuscriptor,
    };

    try {
      const cabecera = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoSuscriptor),
      };

      const resultado = await fetch(
        "https://the-rolling-new.herokuapp.com/api/theRollingNew/Suscripcion",
        cabecera
      );

      if (resultado.status === 201) {
        Swal.fire(
          "Datos enviados correctamente",
          "Próximamente nos pondremos en contacto con vos para terminar tu suscripción",
          "success"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar variant="dark" bg="dark" className="azul" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/logo.png"}
            alt="logo"
            className="logo"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="subnav ">
          <Nav className="mr-auto">
            {/* boton para ingresar o dropdown de usuario */}
            {props.sesion.usuario !== "Ingresar" ? (
              <Dropdown>
                <Dropdown.Toggle variant="primary" className="btn-nav mr-3 text-white">
                {props.sesion.usuario}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/administracion/Administrar">Administración</Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="/" onClick={()=> props.setSesion({usuario: "Ingresar"})}>
                    Cerrar sesión
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <NavLink
                exact={true}
                to="/login/ingresar"
                className="nav-link mr-3"
                activeClassName="active"
              >
                {" "}
                <FontAwesomeIcon key="15" icon={faUser} />{" "}
                {props.sesion.usuario}
              </NavLink>
            )}

            <Button
              className="nav-Link warning text-white"
              onClick={handleShow}
              variant="warning"
            >
              Suscribirse
            </Button>
          </Nav>
        </div>

        <Nav className="ml-auto subnav">
          <NavLink
            exact={true}
            to="/"
            className="nav-link "
            activeClassName="active"
          >
            Home
          </NavLink>
          <div className="subnav">
            <Button
              className="btn-nav"
              activeClassName="active"
              onClick={() => setSeccionVisible(!seccionVisible)}
            >
              Secciones
              <FontAwesomeIcon className="ml-1" icon={faCaretDown} />
            </Button>
            {seccionVisible && (
              <SeccionesHeader
                setSeccionVisible={setSeccionVisible}
                seccionVisible={seccionVisible}
                categorias={props.categorias}
              ></SeccionesHeader>
            )}
          </div>
        </Nav>
        <Form inline>
          <div>
            <Form.Control
              type="text"
              placeholder=" Buscar "
              id="icon"
              className="btn-sm"
            />
            <Button className=" btn-nav btn-ms" /* onChange={handleChange} */>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
            {/* <ul> 
            {searchResultado.map(item=>(
              <li>{item}</li>
              ))} 
            </ul> */}
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title classname="text-center">Suscribite</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <Form.Label className="lead font-weight-bold text-warning">
                  Datos personales
                </Form.Label>
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Col>
                      <Form.Control
                        placeholder="Nombre"
                        onChange={(e) => setnombreSuscriptor(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        placeholder="Apellido"
                        onChange={(e) => setapellidoSuscriptor(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Form.Control
                    type="text"
                    placeholder="Direccion"
                    onChange={(e) => setdireccionSuscriptor(e.target.value)}
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Localidad"
                    onChange={(e) => setlocalidadSuscriptor(e.target.value)}
                  />
                  <br />
                  <Form.Control
                    type="number"
                    placeholder="Codigo postal"
                    onChange={(e) => setcodigoPostalSuscriptor(e.target.value)}
                  />
                  <br />
                  <Form.Control
                    type="number"
                    placeholder="Telefono"
                    onChange={(e) => settelefonoSuscriptor(e.target.value)}
                  />
                  <br />
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label
                      className="lead font-weight-bold text-warning"
                      required
                      onChange={(e) => setnombreSuscriptor(e.target.value)}
                    >
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese una direccion de Email"
                      onChange={(e) => setemailSuscriptor(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="Estoy de acuerdo con los terminos y condiciones"
                    />
                  </Form.Group>

            {error ? (
              <Alert
              variant={warning}
              className="lead font-weight-bold bg-warning text-white text-center w-80"
              >
                Todos los campos son obligatorios!
              </Alert>
            ) : null}
              <Button
                variant="warning"
                className="text-white"
                onClick={handleSubmit}
                type="submit"
                >
                Guardar
              </Button>
              </Form>
              </div>
                </Modal.Body>
          </Modal>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
