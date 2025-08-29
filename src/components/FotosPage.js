import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./FotosPage.css";

// Gera dinamicamente os caminhos das imagens
const imagens = Array.from({ length: 29 }, (_, i) => `/images/fotos/foto${i + 1}.jpg`);

const items = imagens.map((src, index) => (
  <div className="foto-item" key={index}>
    <img src={process.env.PUBLIC_URL + src} alt={`Foto ${index + 1}`} />
  </div>
));

const FotosPage = () => {
  return (
    <div className="fotos-container">
      <h2>Galeria de Fotos</h2>
      <AliceCarousel
        items={items}
        mouseTracking
        infinite
        disableDotsControls={false}
        disableButtonsControls={false}
      />
    </div>
  );
};

export default FotosPage;