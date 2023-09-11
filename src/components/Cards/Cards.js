import "./Cards.scss";

function Card({ imagenSrc, nombre, fecha, titulo, texto }) {
    return (
      <div className="card">
        <img src={imagenSrc} alt="Imagen de la tarjeta" className="card-image" />
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
  }

export default Card;