import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./TextosPage.css";
import { monthlyTexts } from "../data/monthlyTexts";

const TextosPage = () => {
  const [selectedMonth, setSelectedMonth] = useState(monthlyTexts[0] || null);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (selectedMonth) {
      const items = selectedMonth.images.map((filename, index) => (
        <div key={filename} className="carousel-item">
          <img
            src={`${process.env.PUBLIC_URL}/images/textos/${selectedMonth.folder}/${filename}`}
            alt={`Texto ${filename.split('.')[0]}`}
            className="carousel-image"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `${process.env.PUBLIC_URL}/placeholder.png`;
            }}
          />
          <div className="image-counter">
            {index + 1} / {selectedMonth.images.length}
          </div>
        </div>
      ));
      
      setImages(items);
    }
  }, [selectedMonth]);

  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 1 },
    768: { items: 1 },
    1024: { items: 1 },
  };

  const renderPrevButton = ({ isDisabled }) => {
    return <span className={`custom-arrow prev ${isDisabled ? 'disabled' : ''}`}>❮</span>;
  };

  const renderNextButton = ({ isDisabled }) => {
    return <span className={`custom-arrow next ${isDisabled ? 'disabled' : ''}`}>❯</span>;
  };

  return (
    <div className="textos-container">
      <h2>Textos do Mês</h2>
      
      <div className="month-selector">
        {monthlyTexts.map(month => (
          <button
            key={month.id}
            className={`month-button ${selectedMonth?.id === month.id ? 'active' : ''}`}
            onClick={() => {
              if (selectedMonth?.id !== month.id) {
                setSelectedMonth(month);
                setCurrentIndex(0);
              }
            }}
          >
            {month.name}
          </button>
        ))}
      </div>

      {selectedMonth && (
        <div className="carousel-container">
          <h3>{selectedMonth.name}</h3>
          {images.length > 0 ? (
            <AliceCarousel
              items={images}
              activeIndex={currentIndex}
              onSlideChanged={(e) => setCurrentIndex(e.item)}
              infinite
              controlsStrategy="alternate"
              autoPlay={false}
              mouseTracking
              disableDotsControls={false}
              disableButtonsControls={false}
              renderPrevButton={renderPrevButton}
              renderNextButton={renderNextButton}
              responsive={responsive}
              onDragStart={handleDragStart}
            />
          ) : (
            <p className="no-images">Nenhuma imagem encontrada para este mês.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TextosPage;