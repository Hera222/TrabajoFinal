import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DropdownMenu from "../../componets/menu/menu";
import Menu from "../../componets/menu/menu";
import routes from "../index";
import { Link } from "react-router-dom";
import MainSection from "./MainSection";
import CardCourse from "./CardCourse";
import Contact from "../Contacts/Contact";

const Home = () => {
  return (
    <>
      <div className="container">
        <MainSection />
        <CardCourse />
        <br></br>
        <h2 className="mt-5">¡Puede registrarse en nuestros cursos!</h2>
        <hr />
        <p>Regístrese <Link to={"/register"}>aquí</Link> , y sea parte de nuestro selecto grupo de estudiantes, o también puede contactarnos: </p><br></br><br></br><br></br>
        <Contact />
      </div>
    </>
  );
};

export default Home;
