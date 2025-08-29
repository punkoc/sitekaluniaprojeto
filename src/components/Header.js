import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src={`${process.env.PUBLIC_URL}/bannerkalunia.png`}
          alt="Logo"
          className="logo"
        />
        <h1>Coletivo Literário Kalúnia</h1>
      </div>
    </header>
  );
};

export default Header;
