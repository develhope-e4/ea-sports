/* eslint-disable jsx-a11y/anchor-is-valid */
import "./HorizontalCard.scss";

const HorizontalCard = ({ imagenSrc, aText, pText, h4Text, isReverse }) => {

    
  return (
    <div className="HorizontalCard" style={{flexDirection:isReverse ? "row-reverse":"row"}}>
      <div className="image-container">
        <img
          src={imagenSrc}
          alt="Imagen de la tarjeta"
          className="card-image"
        />
      </div>
      <div className="card-content">
        {h4Text && <h4>{h4Text}</h4>}
        {aText && <a>{aText}</a>}
        {pText && <p>{pText}</p>}
      </div>
    </div>
  );
};

export default HorizontalCard;
