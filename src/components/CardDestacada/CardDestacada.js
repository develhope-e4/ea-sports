import "./CardDestacada.scss";


const CardDestacada = ({backgroundImage,  url, gameLogo }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <a href={url} className="linkCardDestacada">
      <div className="backgroundImage" style={cardStyle}>
        <div className="cardDestacada">
          <img
            src={gameLogo}
            alt="Imagen de la tarjeta"
            className="logoCardDestacada"
          />
          <p className="textCardDestacada">Sitio oficial</p>
        </div>
      </div>
    </a>
  );
};

export default CardDestacada;
