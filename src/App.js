import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import defaultNew from "./defaultNew";
import NewDetail from "./components/new/NewDetail";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Inicio from "./components/principal/Inicio";
import AgregarNoticia from "./components/administracion/noticias/AgregarNoticia";
import ListaNoticias from "./components/administracion/noticias/ListaNoticias";

function App() {
  const noticias = defaultNew;

  const [listadoNoticias, setListadoNoticias] = useState([]);
  const [recargarNoticias, setRecargarNoticias] = useState(true);

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
      console.log(respuesta);
      const resultado = await respuesta.json();
      console.log(resultado);
      // guardar datos en el state
      setListadoNoticias(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
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
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
