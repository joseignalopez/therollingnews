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
import AgregarCategoria from "./components/administracion/categorias/AgregarCategoria";
import ListadoCategorias from "./components/administracion/categorias/ListadoCategorias";
import EditarCategoria from "./components/administracion/categorias/EditarCategoria";

function App() {
  const noticias = defaultNew;
  const destacadas = defaultNew.filter(
    (destacadas) => destacadas.Destacado === true
  );

  const [listadoNoticias, setListadoNoticias] = useState([]);
  const [recargarNoticias, setRecargarNoticias] = useState(true);
  const [listadoCategorias, setListadoCategorias] = useState([]);
  const [recargarCategorias, setRecargarCategorias] = useState(true);

  useEffect(() => {
    // llamar a la api
    if (recargarNoticias || recargarCategorias) {
      consultarAPI();
      setRecargarNoticias(false);
      setRecargarCategorias(false);
    }
  }, [recargarNoticias, recargarCategorias]);

  const consultarAPI = async () => {
    try {
      // operación GET
      /* const respuesta = await fetch("http://localhost:4000/noticias"); */
      const respuesta = await fetch("https://the-rolling-new.herokuapp.com/api/theRollingNew");
      /* const respuestaCat = await fetch("http://localhost:4000/categorias"); */
      const respuestaCat = await fetch("https://the-rolling-new.herokuapp.com/api/theRollingNew/Categorias");
      const resultado = await respuesta.json();
      const resultadoCat = await respuestaCat.json();
      // guardar datos en el state
      setListadoNoticias(resultado);
      setListadoCategorias(resultadoCat);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <Header></Header>
      <section className="container contenidoSeccion">
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
        
        <Route exact path="/Administracion/Noticias">
          <ListaNoticias
            noticias={listadoNoticias}
            setRecargarNoticias={setRecargarNoticias}
          ></ListaNoticias>
        </Route>
        <Route exact path="/Administracion/Noticia">
          <AgregarNoticia
            setRecargarNoticias={setRecargarNoticias}
          ></AgregarNoticia>
        </Route>
        <Route
          exact
          path="/Administracion/Noticia/:id"
          render={(props) => {
            const idNoticia = props.match.params.id;
            console.log(idNoticia);
            console.log(listadoNoticias)
            const noticiaSeleccionada = listadoNoticias.find(
              (noticia) => noticia._id === idNoticia
            );
            console.log(noticiaSeleccionada)
            return (
              <EditarNoticia
                noticia={noticiaSeleccionada}
                setRecargarNoticias={setRecargarNoticias}
              ></EditarNoticia>
            );
          }}
        ></Route>
        <Route exact path="/Administracion/Categorias/">
          <ListadoCategorias
            categorias={listadoCategorias}
            setRecargarCategorias={setRecargarCategorias}
          ></ListadoCategorias>
        </Route>
        <Route exact path="/Administracion/Categoria">
          <AgregarCategoria
            setRecargarCategorias={setRecargarCategorias}
          ></AgregarCategoria>
        </Route>
        <Route
          exact
          path="/Administracion/Categoria/:id"
          render={(props) => {
            const idCategoria = props.match.params.id;
            const categoriaSeleccionada = listadoCategorias.find(
              (categoria) => categoria._id === idCategoria
            );
            console.log(categoriaSeleccionada)
            return(
              <EditarCategoria
                categoria={categoriaSeleccionada}
                setRecargarCategorias={setRecargarCategorias}
              ></EditarCategoria>
            )
          }}
        >
        </Route>
        <Route exact path="/login/Ingresar">
          <Ingresar></Ingresar>
        </Route>
        <Route exact path="/login/Registro">
          <Registro />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
