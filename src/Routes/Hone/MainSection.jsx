import React from "react";
import img from "../../assets/wall_paper9.jpg";
import { useUsersContext } from "../../hooks/UsersContext";

function MainSection() {
  const { usersContext } = useUsersContext();
  return (
    <>
      {
        <div className="mt-4">
          {usersContext.login && (
            <p>
              Bienvenido Sr(a) {usersContext.nombre} {usersContext.apellido}
            </p>
          )}
          <h2>Bienvenido a IT ACADEMY</h2>
          <hr />
          <section className="prinSetion">
            <aside>
            <p>Nos complace ofrecer una amplia gama de cursos de informática diseñados para satisfacer sus necesidades de aprendizaje sin importar su nivel de experiencia.</p>
              <p>En nuestra academia, encontrará un equipo dedicado de instructores expertos apasionados por la enseñanza y listos para ayudarlo a tener éxito.</p>
              <p>Nuestra Misión es brindarle las habilidades y los conocimientos que necesita para tener éxito en la era digital actual, creemos que todos deberían tener acceso a una educación de calidad, por eso nos esforzamos por brindar opciones de aprendizaje asequibles y flexibles.</p>
              <p>Nuestros cursos están diseñados para ser prácticos, brindándole la oportunidad de aplicar lo que aprende en entornos del mundo real.</p>
              <p>Únase a la mejor academia de IT y emprenda un viaje de crecimiento y éxito profesional junto a nosotros.</p><br></br>
              <h3>¡Formando Profesionales!</h3>
            </aside>
            <aside>
              <img id="imgMain" src={img} alt="" />
            </aside>
          </section>
        </div>
      }
    </>
  );
}

export default MainSection;
