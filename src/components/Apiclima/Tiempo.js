import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const Tiempo = () => {
  const [clima, setClima] = useState({});

  useEffect(() => {
    obtenerDatosApi();
    setInterval(obtenerDatosApi, 900000);
  }, []);

  const obtenerDatosApi = async () => {
    const preguntaApi = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?id=3836873&appid=96032c389497cd446dfb602f4d3dbebd&units=metric&lang=es"
    );

    const respuestaApi = await preguntaApi.json();
    console.log(respuestaApi);
    setClima(respuestaApi);
  };

  return (
    <div className="d-flex justify-content-center p-0 text-center">
     
        <Card >
          <Card.Body>
            {clima && clima.main ? (
              <>
                <h5>{clima.name}</h5>

                <Card.Text>
                  Temp. Actual: {clima.main.temp}°C --{" "}
                  {clima.weather[0].description} --{" "}
                  <img
                    src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`}
                    alt="weather.main"
                  ></img>{" "}
                  -- Temp. Max: {clima.main.temp_max}°C--Temp. Min:
                  {clima.main.temp_min}°C
                </Card.Text>
              </>
            ) : null}
          </Card.Body>
        </Card>
     
    </div>
  );
};

export default Tiempo;
