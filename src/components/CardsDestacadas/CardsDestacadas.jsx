import CardDestacada from "../CardDestacada/CardDestacada";
import "./CardsDestacadas.scss";
import { cardDestacadaData } from "../../data/CardDestacadasData.mock";

export const CardsDestacadas = () => {




return (


<div className="CardsDestacadas">

          {cardDestacadaData &&
            cardDestacadaData.map((card, index) => (
              <CardDestacada
              key={index}
                url="http://google.com"
                backgroundImage={card.bg}
                gameLogo={card.logo}
                showText={{text:"Sitio Oficial", link:"google.com"}}
                
              />
            ))}
       
</div>

)
}