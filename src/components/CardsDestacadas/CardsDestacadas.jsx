import CardDestacada from "../CardDestacada/CardDestacada";
import classes from "./CardsDestacadas.module.scss";
import { cardDestacadaData } from "../../data/CardDestacadasData.mock";
import { useLanguage } from '../../components/LanguageContext/LanguageContext';


import enUK from '../../data/Translate/en.mock';
import it from '../../data/Translate/it.mock';
import es from '../../data/Translate/es.mock';

export const CardsDestacadas = () => {

  const { language } = useLanguage(); 


  let translations;
  switch (language) {
    case "United Kingdoms":
      translations = enUK;
      break;
    case "Italia":
      translations = it;
      break;
    case "España":
    default:
      translations = es;
  }

return (
<div className={classes.CardsDestacadas}>

          {cardDestacadaData &&
            cardDestacadaData.map((card, index) => (
              <CardDestacada
              key={index}
                url="http://google.com"
                backgroundImage={card.bg}
                gameLogo={card.logo}
                showText={{text:translations.sitioOficial, link:"google.com"}}
              />
            ))}

</div>

)
}
