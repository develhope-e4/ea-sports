
/* import styles from "./CardGames.module.scss"; */
import classes from "./CardDestacada.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

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
    otherImages: otherimg,
    bgGames: games
  })

  const background = cx({
    backgroundImage : true,
    firstImage: firstImg,
    otherImages: otherimg,
    bgGames: games
  })

  const card = cx({
    cardDestacada : true,
    firstImage: firstImg,
    otherImages: otherimg,
    bgGames: games
  })

  const logo = cx({
    logoCardDestacada: true,
    firstImage: firstImg,
    otherImages: otherimg,
    bgGames: games
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
                  className={index === 0 ? classes.linksbg : classes.as}
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
