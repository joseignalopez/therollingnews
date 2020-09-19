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
    setClima(respuestaApi);
  };

  return (
    <div className="">
          {clima && clima.main ? (
            <div>
              <small className=""><strong>Clima:</strong>
               {""} {clima.main.temp}°C | {" "}
                {clima.weather[0].description}
                {/* <img className=""
                  src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}.png`}
                  alt="weather.main" 
                ></img> */}
              </small>
            </div>
          ) : null}

    </div>
  );
};

export default Tiempo;
