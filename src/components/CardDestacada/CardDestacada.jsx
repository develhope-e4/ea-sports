import classes from "./CardDestacada.module.scss";

const CardDestacada = ({ backgroundImage, url, gameLogo, className, showText }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  
  return (
    <a href={url} className={classes.linkCardDestacada}>
      <div className={classes.backgroundImage} style={cardStyle}>
        <div className={classes.cardDestacada}>
          <img
            src={gameLogo}
            alt="Imagen de la tarjeta"
            className={classes.logoCardDestacada}
          />
          {showText && <p className={classes.textCardDestacada}>Sitio oficial</p>}
        </div>
      </div>
    </a>
  );
};

export default CardDestacada;
