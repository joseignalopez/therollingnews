import React from "react";
import { Button, Card, CardDeck } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./style/publicidad.css";
const Nosotros = () => {
  return (
    <div className="container ">
      <h1 className="disply-4 ">Acerca de Nosotros </h1>
      <section className="container d-flex justify-content-center ">
        <div className="row d-flex justify-content-center mt-3">
          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/foto/pablo.png"}
                  alt="Photo Pablo Cativa"
                  className="rounded-circle efectoimg py-4"
                  width="100px"
                  height="150px"
                />
              </div>
              <Card.Body className="card-body  bg-dark text-white">
                <Card.Title>Pablo Cativa</Card.Title>
                <Card.Text>Developer.</Card.Text>
                <Button
                  variant="primary"
                  className="azul rounded-circle"
                  type="button"
                  href="/error404/Error404"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/foto/luciano.png"}
                  alt="Photo Luciano Chipolina"
                  className="rounded-circle efectoimg py-4"
                  width="100px"
                  height="150px"
                />
              </div>
              <Card.Body className="card-body  bg-dark text-white">
                <Card.Title>Luciano Chipolina</Card.Title>
                <Card.Text>Developer.</Card.Text>
                <Button
                  variant="primary"
                  className="azul rounded-circle"
                  type="button"
                  href="/error404/Error404"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/foto/jose.png"}
                  alt="Photo Jose Lopez"
                  className="rounded-circle efectoimg py-4"
                  width="100px"
                  height="150px"
                />
              </div>
              <Card.Body className="card-body  bg-dark text-white">
                <Card.Title>José López</Card.Title>
                <Card.Text>Developer.</Card.Text>
                <Button
                  variant="primary"
                  className="azul rounded-circle"
                  type="button"
                  href="/error404/Error404"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/foto/Maury.png"}
                  alt="Photo Mauricio Castro"
                  className="rounded-circle efectoimg py-4"
                  width="100px"
                  height="150px"
                />
              </div>
              <Card.Body className="card-body  bg-dark text-white">
                <Card.Title>Mauricio Castro</Card.Title>
                <Card.Text>Developer.</Card.Text>
                <Button
                  variant="primary"
                  className="azul rounded-circle"
                  type="button"
                  href="/error404/Error404"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/foto/carlos.png"}
                  alt="Photo Carlos Rodriguez"
                  className="rounded-circle efectoimg py-4"
                  width="100px"
                  height="150px"
                />
              </div>
              <Card.Body className="card-body  bg-dark text-white">
                <Card.Title>Carlos Rodríguez</Card.Title>
                <Card.Text>Developer.</Card.Text>
                <Button
                  variant="primary"
                  className="azul rounded-circle"
                  type="button"
                  href="/error404/Error404"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/foto/nico.png"}
                  alt="Photo Nicolas Bertini"
                  className="rounded-circle efectoimg py-4"
                  width="100px"
                  height="150px"
                />
              </div>
              <Card.Body className="card-body  bg-dark text-white">
                <Card.Title>Nicolas Bertini</Card.Title>
                <Card.Text>Developer.</Card.Text>
                <Button
                  variant="primary"
                  className="azul rounded-circle"
                  type="button"
                  href="https://ar.linkedin.com/in/nicolas-bertini-arga%C3%B1aras-9b634b189?trk=public_profile_samename_profile_profile-result-card_result-card_full-click&challengeId=AQEZ2u4yNptd4wAAAXSuSFgbwbqvn7ADQX1EQSUbQdDj2qCz8P7zLTv_ndUi3oA9oGi8bimCjs83jla4V1FBTfpvCLfqZDf31A&submissionId=43277056-57a8-3616-bad1-dc8d2d293829"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-3">
            <Card className="card bg-light text-center">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/foto/ro.png"}
                  alt="Photo Rosario Serrano"
                  className="rounded-circle efectoimg py-4"
                  width="100px"
                  height="150px"
                />
              </div>
              <Card.Body className="card-body  bg-dark text-white">
                <Card.Title>Rosario Serrano</Card.Title>
                <Card.Text>Developer.</Card.Text>
                <Button
                  variant="primary"
                  className="azul rounded-circle"
                  type="button"
                  href="https://www.linkedin.com/in/mrosarioserrano/?trk=people-guest_people_search-card&originalSubdomain=ar" 
                  target="_blank"> 
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nosotros;
