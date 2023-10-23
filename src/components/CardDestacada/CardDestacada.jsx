import classes from "./CardDestacada.module.scss";

const CardDestacada = ({ backgroundImage, url, gameLogo, className, showText }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <a href={url} className={classes.linkCardDestacada + {className}}>
      <div className={classes.backgroundImage + {className}} style={cardStyle}>
        <div className={classes.cardDestacada + {className}}>
          <img
            src={gameLogo}
            alt="Imagen de la tarjeta"
            className={classes.logoCardDestacada + {className}}
          />
          {showText && <p className={classes.textCardDestacada +{className}}>Sitio oficial</p>}
        </div>
      </div>
    </a>
  );
};

export default CardDestacada;
