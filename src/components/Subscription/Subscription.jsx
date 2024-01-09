import Boton from "../Boton/Boton";
import IconoEaPlay from "../../assets/iconos/IconoEaPlay";
import classes from "./Subscription.module.scss";
import Container from "../Container/Container";
import Section from "../Section/Section";
import bgImage from "../../assets/Imagenes/Subscription/hero-medium-console-medio.jpg";
import { useLanguage } from '../../components/LanguageContext/LanguageContext';


import enUK from '../../data/Translate/en.mock';
import it from '../../data/Translate/it.mock';
import es from '../../data/Translate/es.mock';

const Subscription = () => {

  
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
    <>
      <Section imageUrl={bgImage} margen={false}>
        <Container paddingLG={true}>
          <div className={classes.textContainer}>
            <IconoEaPlay />
            <h6 className={classes.texto}>
              {translations.textoUnete}
            </h6>
            <Boton
              esPrimario={false}
              isLight={true}
              onClick={() => console.log("click en el boton blanco")}
              texto={translations.textoUneteBoton}
            />
          </div>
        </Container>
      </Section>
      <Section backgroundColor={"--color-sin-variable"} margen={false} >
        <Container subscription={true}>
          <h2 className={classes.tittle}>{translations.textoInformacion}</h2>
          <div className={classes.SubscriptionSectionMoreInfoContenidoBoton}>
            <Boton
              esPrimario={false}
              isLight={false}
              onClick={() => console.log("click en el boton negro")}
              texto={translations.textoInformacionBoton}
            />
          </div>
        </Container>
      </Section>
    </>
  );
};
export default Subscription;
