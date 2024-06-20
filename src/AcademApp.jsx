import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./componets/menu/menu";
import routes from "./Routes/index";
import Footer from "./Routes/footer/Footer";

import "./App.css";

const AcademApp = () => {
  return (
    <Router>
      <header>
        <h2>CONVIÉRTASE EN UN DESARROLLADOR FULLSTACK</h2>
      </header>
      <nav>
        <Menu />
      </nav>
      <main className="main">
        <div className="section">
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
};

export default AcademApp;
