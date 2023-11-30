 
import classes from "./Cards.module.scss";

const Cards = ({ imagenSrc, nombre, fecha, titulo, texto }) => {
  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <img
          src={imagenSrc}
          alt="Imagen de la tarjeta"
          className={classes.cardImage}
        />
      </div>
      <div className={classes.cardContent}>
        <div className={classes.cardHeader}>
          <h2 className={classes.cardTitle}>{nombre}</h2>
          <p className={classes.cardDate}>{fecha}</p>
        </div>
        <h3 className={classes.cardSubtitle}>{titulo}</h3>
        <p className={classes.cardText}>{texto}</p>
      </div>
    </div>
  );
};
export default Cards;
