import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./menu.css"; // Archivo CSS donde definiremos los estilos

function MenuItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menuItem">
      <div onClick={handleToggle} className="menuItemTitle">
        <Link to={item.route}>{item.title}</Link>
      </div>
      {isOpen && (
        <ul className="submenu">
          {item.subItems.map((subItem) => (
            <li key={subItem.title} className="submenuItem">
              <Link to={subItem.route}>{subItem.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Menu() {
  const menuItems = [
    {
      title: "Home",
      route: "/",
      subItems: [],
    },
    {
      title: "Estudiantes",
      subItems: [
        { title: "Registro", route: "/register" },
        { title: "Perfil", route: "/perfil" },
      ],
    },
    {
      title: "Listados",
      subItems: [
        { title: "Cursos", route: "/vecurso" },
        { title: "Estudiantes por Curso", route: "/matricula" },
      ],
    },
    {
      title: "Administración",
      subItems: [
        { title: "Gestión de Cursos", route: "/cursos" },
        { title: "Gestión de Estudiantes", route: "/students" },
        { title: "Gestión de Profesores", route: "/teachers" },
        { title: "Matriculación de Cursos", route: "/matricula" },
        { title: "Usuarios", route: "/users" },
        { title: "Contactos", route: "/contact" },
      ],
    },
    {
      title: "Accesos",
      subItems: [
        { title: "Iniciar Sesión", route: "/login" },
        { title: "Cambio de Clave", route: "/cambioClave" },
        { title: "Salir", route: "/Logout" },
      ],
    },
  ];

  return (
    <div className="menu">
      {menuItems.map((item) => (
        <MenuItem key={item.title} item={item} />
      ))}
    </div>
  );
}

export default Menu;
