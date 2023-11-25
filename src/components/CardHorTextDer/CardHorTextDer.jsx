import "./CardHorTextDer.scss";

const CardHorTextDer = ({ titulo, descripcion, boton, imagenSrc }) => {
  return (
    <div className="cardHorTextDer">
      <div className="contenidoCardHorTextDer">
        <div className="textoCard">
        <p>{modo}</p>
          <p>{queEs}</p>
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
          <button>{boton}</button>
        </div>
        <div className="imagenCard">
          <img src={imagenSrc} alt="Imagen de la tarjeta" />
        </div>
      </div>
    </div>
  );
};
export default CardHorTextDer;
