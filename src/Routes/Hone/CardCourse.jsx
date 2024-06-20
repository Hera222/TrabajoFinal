import React from "react";
import android from "../../assets/android_app.jpg";
import graphic from "../../assets/graphic_desing.jpg";
import basic from "../../assets/back.webp";
import web from "../../assets/web_app.jpg";
import { FaRegStar } from "react-icons/fa";

const servicios = [
  {
    id:1,
    imagen: web,
    title: "Desarrollador Web",
    time: "10 meses",
    descripcion: "Curso Online",
    calificacion: 5,
  },
  {
    id:2,
    imagen: graphic,
    title: "Diseño gráfico",
    time: "6 meses",
    descripcion: "Curso OnDemand",
    calificacion: 5,
  },
  {
    id:3,
    imagen: android,
    title: "Front End",
    time: "10 meses",
    descripcion: "Curso Online",
    calificacion: 5,
  },
  {
    id:4,
    imagen: back,
    title: "Back End",
    time: "10 meses",
    descripcion: "Curso Online",
    calificacion: 5,
  },
];
function CardCourse() {
  return (
    <>
      <h2>Cursos destacados</h2>
      <hr />
      <br />
      <br />
      <div className="row ">
        <div className="cards">
          {servicios.map((servicio) => (
            <div className="card h-100 card" key={servicio.id}>
              <img
                src={servicio.imahen}
                className="card-img-top"
                alt={servicio.imahen}
              />
              <div className="card-body">
                <h5 className="card-title">{servicio.title}</h5>
                <p className="card-text">{servicio.descrip}</p>
              </div>
              <div className="card-footer">
                <div className="grup-footer">
                  <small className="text-muted">{`Duración de los cursos ${servicio.time}`}</small>
                  <div>
                  <span><FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar><FaRegStar></FaRegStar></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CardCourse;
