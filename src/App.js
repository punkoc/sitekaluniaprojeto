import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import WritersPage from "./components/WritersPage"; // Página dos escritores
import TextosPage from "./components/TextosPage"; // Importa a nova página
import SobrePage from "./components/SobrePage";
import EventosPage from "./components/EventosPage";
import FotosPage from "./components/FotosPage"; // Importe a página

// Página inicial
function Home() {
  const items = [
    <img
      src={`${process.env.PUBLIC_URL}/fotomeio.jpg`}
      alt="Foto 1"
      className="carousel-image"
      key="foto1"
    />,
    <img
      src={`${process.env.PUBLIC_URL}/foto2.jpg`}
      alt="Foto 2"
      className="carousel-image"
      key="foto2"
    />,
    <img
      src={`${process.env.PUBLIC_URL}/foto3.jpg`}
      alt="Foto 3"
      className="carousel-image"
      key="foto3"
    />,
  ];

  return (
    <main>
      <h1 className="titulo-home">B E M - V I N D O S(AS)!</h1>
      <p>Site do Coletivo Literário Kalúnia.</p>
      <AliceCarousel
        infinite={true}
        mouseDragEnabled={true}
        items={items}
        className="alice-carousel"
      />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/escritores" element={<WritersPage />} />
          <Route path="/textos" element={<TextosPage />} /> {/* Adiciona a nova rota */}
          <Route path="/sobre" element={<SobrePage />} /> {/* Nova rota */}
          <Route path="/eventos" element={<EventosPage />} />
          <Route path="/fotos" element={<FotosPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;