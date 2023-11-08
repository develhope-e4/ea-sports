import "./CardDestacada.scss";

const CardDestacada = ({ backgroundImage, url, gameLogo, className, showText, text }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <a href={url} className={`linkCardDestacada ${className}`}>
      <div className={`backgroundImage ${className}`} style={cardStyle}>
        <div className={`cardDestacada ${className}`}>
          <img
            src={gameLogo}
            alt="Imagen de la tarjeta"
            className={`logoCardDestacada ${className}`}
          />
          {showText && <p className={`textCardDestacada ${className}`}>{text}</p>}
        </div>
      </div>
    </a>
  );
};

export default CardDestacada;
