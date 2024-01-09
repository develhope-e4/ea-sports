/* eslint-disable jsx-a11y/anchor-is-valid */
import classes from "./HorizontalCard.module.scss";

const HorizontalCard = ({ imagenSrc, aText, pText, h4Text, isReverse }) => {

    
  return (
    <div className={classes.HorizontalCard} style={{flexDirection:isReverse ? "row-reverse":"row"}}>
      <div className={classes.imageContainer}>
        <img
          src={imagenSrc}
          alt="Imagen de la tarjeta"
          className={classes.cardImage}
        />
      </div>
      <div className={classes.cardContent}>
        {h4Text && <h4>{h4Text}</h4>}
        {aText && <a>{aText}</a>}
        {pText && <p>{pText}</p>}
      </div>
    </div>
  );
};

export default HorizontalCard;
