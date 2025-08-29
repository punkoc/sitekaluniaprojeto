import React from "react";
import { Link } from "react-router-dom"; // Importando o Link do react-router-dom
import "./Menu.css";

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Página Inicial</Link></li>
        <li><Link to="/escritores">Escritores/as</Link></li>
        <li><Link to="/fotos">Fotos</Link></li>
        <li><Link to="/eventos">Eventos</Link></li>
        <li><Link to="/textos">Textos do Mês</Link></li>
        <li><Link to="/sobre">Sobre o Coletivo</Link></li>

      </ul>
    </nav>
  );
};

export default Menu;