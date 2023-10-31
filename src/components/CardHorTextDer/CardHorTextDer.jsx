import "./CardHorTextDer.scss";

const CardHorTextDer = ({ modo, queEs, titulo, descripcion, imagenSrc }) => {
  return (
    <div className="cardHorTextDer">
      <div className="imgcardHorTextDer">
        <img src={imagenSrc} alt="Imagen" />
      </div>
      <div className="contenidoCardHorTextDer">
        <p className="modo">{modo}</p>
        <p className="queEs">{queEs}</p>
        <h2 className="titulo">{titulo}</h2>
        <p className="texto">{descripcion}</p>
      </div>
    </div>
  );
};

export default CardHorTextDer;
