import { originalsCards } from "../../data/OriginalsCards.mock";
import CardDestacada from "../CardDestacada/CardDestacada";

export const OriginalsCards = () => {
  return (
    <div className="CardsDestacadas">
      {originalsCards &&
        originalsCards.map((originalsCard, index) => (
          <CardDestacada
            key={index}
            url="http://google.com"
            backgroundImage={originalsCard.bg}
            gameLogo={originalsCard.logo}
            showText={false}
          />
        ))}
    </div>
  );
};
