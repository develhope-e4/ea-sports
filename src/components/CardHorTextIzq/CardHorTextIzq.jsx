import './CardHorTextIzq.scss';

const CardHorTextIzq = ({ modo, queEs, titulo, descripcion, imagenSrc }) => {
  return (
    <div className="cardHorTextIzq">
      <div className="contenidoCardHorTextIzq">
        <div className="infoCard">
          <p className="modo">{modo}</p>
          <p className="queEs">{queEs}</p>
          <h2 className="titulo">{titulo}</h2>
          <p className="texto">{descripcion}</p>
        </div>
      </div>
      <div className="imagenCard">
        <img src={imagenSrc} alt="Imagen" />
      </div>
    </div>
  );
};

export default CardHorTextIzq;

