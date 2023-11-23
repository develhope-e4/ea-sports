/* eslint-disable jsx-a11y/anchor-is-valid */
import classes from "./VerticalCard.module.scss";

const VerticalCard = ({ imagenSrc, aText, pText, h4Text, isReverse }) => {

    
  return (
    <div className={classes.VerticalCard} style={{flexDirection:isReverse ? "row-reverse":"row"}}>
        <img
          src={imagenSrc}
          alt="Imagen de la tarjeta"
          className={classes.cardImage}
        />
      <div className={classes.cardContent}>
        {h4Text && <h4>{h4Text}</h4>}
        {pText && <p>{pText}</p>}
        {aText && <a>{aText}</a>}
      </div>
    </div>
  );
};

export default VerticalCard;
