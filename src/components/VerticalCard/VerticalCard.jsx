/* eslint-disable jsx-a11y/anchor-is-valid */
import "./VerticalCard.scss";

const VerticalCard = ({ imagenSrc, aText, pText, h4Text, isReverse }) => {

    
  return (
    <div className="VerticalCard" style={{flexDirection:isReverse ? "row-reverse":"row"}}>
        <img
          src={imagenSrc}
          alt="Imagen de la tarjeta"
          className="cardImage"
        />
      <div className="cardContent">
        {h4Text && <h4>{h4Text}</h4>}
        {pText && <p>{pText}</p>}
        {aText && <a>{aText}</a>}
      </div>
    </div>
  );
};

export default VerticalCard;
