import "./CardDestacada.scss";

const CardDestacada = ({ backgroundImage, url, gameLogo, className }) => {
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
          <p className="textCardDestacada">Sitio oficial</p>
        </div>
      </div>
    </a>
  );
};

export default CardDestacada;
