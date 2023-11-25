import "./CardDestacada.scss";
import "./CardGames.modules.scss";
const CardDestacada = ({
  backgroundImage,
  url,
  gameLogo,
  className,
  showText,
  showTexts,
}) => {
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
          {showText && (
            <p className={`textCardDestacada ${className}`}>
              <a href={showText.link}>{showText.text}</a>
            </p>
          )}

          {showTexts &&
            showTexts.map((textItem, index) => (
              <p key={index} className={`textCardDestacada ${className}`}>
                <a
                  className={index === 0 ? "linksbg" : "as"}
                  href={textItem.link}
                >
                  {textItem.text}
                </a>
              </p>
            ))}
        </div>
      </div>
    </a>
  );
};

export default CardDestacada;
