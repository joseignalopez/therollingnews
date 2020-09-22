import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MonedaExtr from "./components/Api/MonedaExtr";
import Tiempo from "./components/Apiclima/Tiempo";
/* import Reloj from "./components/Apiclima/Reloj";
import Fecha from "./components/fecha/Fecha"; */
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
import Error404  from './components/error404/Error404';
import Nosotros  from './components/principal/Nosotros';
import Category from "./components/categoria/Category";


function App() {
  /* const noticias = defaultNew;
  const destacadas = defaultNew.filter(
    (destacadas) => destacadas.Destacado === true
  ); */

  const [listadoNoticias, setListadoNoticias] = useState([]);
  const [recargarNoticias, setRecargarNoticias] = useState(true);
  const [listadoCategorias, setListadoCategorias] = useState([]);
  const [recargarCategorias, setRecargarCategorias] = useState(true);
  const [destacados, setDestacados] = useState([]);
  const [usuarios, setUsuarios] = useState("");

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
      const respuesta = await fetch(
        "https://the-rolling-new.herokuapp.com/api/theRollingNew"
      );
      /* const respuestaCat = await fetch("http://localhost:4000/categorias"); */
      const respuestaCat = await fetch(
        "https://the-rolling-new.herokuapp.com/api/theRollingNew/Categorias"
      );
      const resultado = await respuesta.json();
      const resultadoCat = await respuestaCat.json();
      /* const destacadas = await resultado.filter((destacadas) => destacadas.destacado === true) */
      // guardar datos en el state
      setListadoNoticias(resultado);
      setListadoCategorias(resultadoCat);
      /* setDestacados(destacadas) */
      console.log(resultado);
      console.log(resultadoCat);
      /* console.log(destacadas) */
    } catch (error) {
      console.log(error);
    }
  };
  /* const destacadas = listadoNoticias.filter(
    (destacadas) => destacadas.destacado === true
  ); */

  return (
    <Router>
      <Header categorias={listadoCategorias}></Header>
      <section className="container contenidoSeccion"></section>
      <MonedaExtr className="moneda"></MonedaExtr>
      <Switch>
        <Route exact path="/">
          <Inicio
            destacadas={listadoNoticias.filter((destacadas) => destacadas.destacado === true)}
            categorias={listadoCategorias}
            noticias = {listadoNoticias}
          ></Inicio>
        </Route>
        <Route path="/Categoria/:categoria/"
        render={
          (props)=>{

            const categoria = props.match.params.categoria;
            console.log(categoria)
            const notasCategoria = listadoNoticias.filter(
              (n) => n.categoria === categoria
            );
            console.log(notasCategoria)
            return(
            <Category categoria = {categoria} noticias = {notasCategoria}></Category>
            )
          }
        }>
        </Route >
        
        <Route
          path="/:categoria/nota/:id"
          render={(props) => {
            const idParametro = props.match.params.id;
            const cat = props.match.params.categoria;
            const notasCategoria = listadoNoticias.filter(
              (n) => n.categoria === cat
            );
            const nota = notasCategoria.find(
              (item) => item._id === idParametro
            );
            console.log(nota)
            console.log(notasCategoria)

            return (
              <NewDetail noticia={nota} noticias={listadoNoticias}></NewDetail>
            );
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
            categorias={listadoCategorias}
            setRecargarNoticias={setRecargarNoticias}
          ></AgregarNoticia>
        </Route>
        <Route
          exact
          path="/Administracion/Noticia/:id"
          render={(props) => {
            const idNoticia = props.match.params.id;
            console.log(idNoticia);
            console.log(listadoNoticias);
            const noticiaSeleccionada = listadoNoticias.find(
              (noticia) => noticia._id === idNoticia
            );
            console.log(noticiaSeleccionada);
            return (
              <EditarNoticia
                noticia={noticiaSeleccionada}
                categorias={listadoCategorias}
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
            return (
              <EditarCategoria
                categoria={categoriaSeleccionada}
                setRecargarCategorias={setRecargarCategorias}
              ></EditarCategoria>
            );
          }}
        ></Route>
        <Route exact path="/login/Ingresar">
          <Ingresar
          usuarios={usuarios}></Ingresar>
        </Route>
        <Route exact path="/login/Registro">
          <Registro />
        </Route>
        <Route exact path="/principal/Nosotros">
          <Nosotros></Nosotros>
        </Route>
        <Route exact path='*'>
          <Error404></Error404>
        </Route>
      </Switch>
      <Footer categorias={listadoCategorias}></Footer>
    </Router>
  );
}

export default App;
