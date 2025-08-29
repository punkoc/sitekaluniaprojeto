import React, { useState } from "react";
import "./WritersPage.css";
import writers from "../data/writers.json";

const WritersPage = () => {
  const [selectedWriter, setSelectedWriter] = useState(null);

  const handleOpenModal = (writer) => {
    setSelectedWriter(writer);
  };

  const handleCloseModal = () => {
    setSelectedWriter(null);
  };

  return (
    <div className="writers-container">
      <div className="writers-title-box">
        <h2>Conheça nossos/as escritores/as</h2>
      </div>

      <div className="writers-grid">
        {writers.map((writer, index) => (
          <div
            className="writer-card"
            key={index}
            onClick={() => handleOpenModal(writer)}
          >
            <img
              src={process.env.PUBLIC_URL + writer.image}
              alt={writer.name}
              className="writer-image"
            />
            <p className="writer-name">{writer.name}</p>
          </div>
        ))}
      </div>

      {selectedWriter && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={process.env.PUBLIC_URL + selectedWriter.image}
              alt={selectedWriter.name}
              className="modal-image"
            />
            <div
              className="modal-bio"
              dangerouslySetInnerHTML={{ __html: selectedWriter.bio }}
            />
            <button className="close-button" onClick={handleCloseModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WritersPage;
