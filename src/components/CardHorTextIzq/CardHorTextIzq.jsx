import "./CardHortexIzq.scss";

const CardHorTextIzq = ({
  modo,
  queEs,
  titulo,
  descripcion,
  boton,
  imagenSrc,
}) => {
  return (
    <div className="cardHorTextIzq">
      <div className="imagenCard">
        <img src={imagenSrc} alt="Imagen de la tarjeta" />
      </div>
      <div className="contenidoCardHorTextIzq">
        <div className="textocard">
          <p>{modo}</p>
          <p>{queEs}</p>
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
          <button>{boton}</button>
        </div>
      </div>
    </div>
  );
};
export default CardHorTextIzq;
