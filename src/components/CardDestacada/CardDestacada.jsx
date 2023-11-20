
import styles from "./CardGames.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CardDestacada = ({
  backgroundImage,
  url,
  gameLogo,
  className,
  showText,
  showTexts,
  firstImg,
  otherimg,
  games
}) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const link = cx({
    linkCardDestacada : true,
    firstImage: firstImg,
    otherImages: otherimg
  })

  const background = cx({
    backgroundImage : true,
    firstImage: firstImg,
    otherImages: otherimg
  })

  const card = cx({
    cardDestacada : true,
    firstImage: firstImg,
    otherImages: otherimg
  })

  const logo = cx({
    logoCardDestacada: true,
    firstImage: firstImg,
    otherImages: otherimg
  })

  const text = cx({
    textCardDestacada: true,
    firstImage: firstImg,
    otherImages: otherimg,
    bgGames: games
  })

  return (
    <a href={url} className={link}>
      <div className={background} style={cardStyle}>
        <div className={card}>
          <img
            src={gameLogo}
            alt="Imagen de la tarjeta"
            className={logo}
          />
          {showText && (
            <p className={text}>
              <a href={showText.link}>{showText.text}</a>
            </p>
          )}

          {showTexts &&
            showTexts.map((textItem, index) => (
              <p key={index} className={text}>
                <a
                  className={index === 0 ? styles.linksbg : styles.as}
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
