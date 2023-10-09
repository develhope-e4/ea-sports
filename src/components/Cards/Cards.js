import React from "react";
import "./Cards.scss";

const Cards = ({ imagenSrc, nombre, fecha, titulo, texto }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img
          src={imagenSrc}
          alt="Imagen de la tarjeta"
          className="card-image"
        />
      </div>
      <div className="card-content">
        <div className="card-header">
          <h2 className="card-title">{nombre}</h2>
          <p className="card-date">{fecha}</p>
        </div>
        <h3 className="card-subtitle">{titulo}</h3>
        <p className="card-text">{texto}</p>
      </div>
    </div>
  );
};
export default Cards;
