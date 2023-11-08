import classes from "./CardDestacada.module.scss";
import classNames from "classnames/bind";

const CardDestacada = ({ backgroundImage, url, gameLogo, className, showText, text }) => {
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
    otherImages: otherimg
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
          {showText && <p className={`textCardDestacada ${className}`}>{text}</p>}
        </div>
      </div>
    </a>
  );
};

export default CardDestacada;
