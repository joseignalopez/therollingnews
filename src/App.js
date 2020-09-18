import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MonedaExtr from "./components/Api/MonedaExtr";
import Tiempo from "./components/Apiclima/Tiempo";
import Reloj from "./components/Apiclima/Reloj";
import Fecha from "./components/fecha/Fecha";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import defaultNew from "./defaultNew";
import NewDetail from "./components/new/NewDetail";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Inicio from "./components/principal/Inicio";
import AgregarNoticia from "./components/administracion/noticias/AgregarNoticia";
import ListaNoticias from "./components/administracion/noticias/ListaNoticias";
import EditarNoticia from "./components/administracion/noticias/EditarNoticia";
import Ingresar from "./components/login/Ingresar";
import Registro from "./components/login/Registro";



function App() {
  const noticias = defaultNew;

  const [listadoNoticias, setListadoNoticias] = useState([]);
  const [recargarNoticias, setRecargarNoticias] = useState(true);
  const [destacadas, setDestacadas] = useState([])

  useEffect(() => {
    // llamar a la api
    if (recargarNoticias) {
      consultarAPI();
      setRecargarNoticias(false);
    }
  }, [recargarNoticias]);

  const consultarAPI = async () => {
    try {
      // operación GET
      const respuesta = await fetch("http://localhost:4000/noticias");
      const resultado = await respuesta.json();
      // guardar datos en el state
      setListadoNoticias(resultado);
      const noticiasDestacadas = resultado.filter((noticias) => noticias.destacado === true);
      setDestacadas(noticiasDestacadas);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <Header></Header>
      <section className="container contenidoSeccion">
        <div className="row text-center d-flex justify-content-center">
          <Tiempo className="col-sm-12 col-md-12 col-lg-12"></Tiempo>
        </div>
      </section>
      <MonedaExtr className="moneda"></MonedaExtr>
      <Switch>
        <Route exact path="/">
          <Inicio destacadas={destacadas}></Inicio>
        </Route>
        <Route
          path="/:categoria/nota/:id"
          render={(props) => {
            const idParametro = parseInt(props.match.params.id);
            const cat = props.match.params.categoria;
            const notasCategoria = noticias.filter((n) => n.Categoria === cat);
            const nota = notasCategoria.find((item) => item.Id === idParametro);

            return <NewDetail noticia={nota} noticias={noticias}></NewDetail>;
          }}
        ></Route>
        <Route exact path="/:categoria">
          {/* Aqui debemos crear una ventana con todas la noticias de una categoria */}
        </Route>
        <Route exact path="/admin/listanoticias">
          <ListaNoticias
            noticias={listadoNoticias}
            setRecargarNoticias={setRecargarNoticias}
          ></ListaNoticias>
        </Route>
        <Route exact path="/admin/agregarnoticia">
          <AgregarNoticia
            setRecargarNoticias={setRecargarNoticias}
          ></AgregarNoticia>
        </Route>
        <Route
          exact
          path="/admin/editar/:id"
          render={(props) => {
            const idNoticia = parseInt(props.match.params.id);
            console.log(idNoticia);
            const noticiaSeleccionada = listadoNoticias.find(
              (noticia) => noticia.id === idNoticia
            );
            console.log(noticiaSeleccionada);
            return (
              <EditarNoticia
                noticia={noticiaSeleccionada}
                setRecargarNoticias={setRecargarNoticias}
              ></EditarNoticia>
            );
          }}
        ></Route>
        <Route exact path="/login/Ingresar">
          <Ingresar></Ingresar>
        </Route>
        <Route exact path="/login/Registro">
          <Registro/>
        </Route>

      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
