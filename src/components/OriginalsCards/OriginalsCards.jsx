import { originalsCards } from "../../data/OriginalsCards.mock";
import CardDestacada from "../CardDestacada/CardDestacada";

export const OriginalsCards = () => {
  return (
    <div className="CardsDestacadas">
      {originalsCards &&
        originalsCards.map((card, index) => (
          <CardDestacada
            key={index}
            url="http://google.com"
            backgroundImage={card.bg}
            gameLogo={card.logo}
            className={"optional"}
            showText={false}
          />
        ))}
    </div>
  );
};
