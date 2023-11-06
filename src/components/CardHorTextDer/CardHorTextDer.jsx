import './CardHorTextDer.scss';

const CardHorTextDer = ({ modo, queEs, titulo, descripcion, imagenSrc, conBorde }) => {
  return (
    <div className="cardHorTextDer">
      <div className="imagenCard">
        <img src={imagenSrc} alt="Imagen" />
      </div>
      <div className="contenidoCardHorTextDer">
        <div className="infoCard">
          <p className="modo">{modo}</p>
          <p className="queEs">{queEs}</p>
          <h2 className="titulo">{titulo}</h2>
          <p className="texto">{descripcion}</p>

        </div>
      </div>
      
    </div>
  );
};

export default CardHorTextDer;
