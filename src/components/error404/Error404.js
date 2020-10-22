import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Error404 = () => {
  return (
    <div className="container d-flex justify-content-center  my-3">
      <Card className="bg-dark text-white">
        <Card.Img
          src={process.env.PUBLIC_URL + "/error.png"}
          alt="pagina error"
        />
        <Card.ImgOverlay>
          <Card.Text>
            <Button type="button" variant="primary" className="azul" href="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </Button>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Error404;
