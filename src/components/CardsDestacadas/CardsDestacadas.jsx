import CardDestacada from "../CardDestacada/CardDestacada";
import classes from "./CardsDestacadas.module.scss";
import { cardDestacadaData } from "../../data/CardDestacadasData.mock";

export const CardsDestacadas = () => {
  return (
    <div className={classes.CardsDestacadas}>
      {cardDestacadaData &&
        cardDestacadaData.map((card) => (
          <CardDestacada
            url="http://google.com"
            backgroundImage={card.bg}
            gameLogo={card.logo}
            showText={true}
          />
        ))}
    </div>
  );
};
