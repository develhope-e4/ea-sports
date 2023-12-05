import { useState } from 'react';
import BasePage from '../../components/BasePage/BasePage';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import LoopVideo from '../../components/LoopVideo/LoopVideo';
import Cards from '../../components/Cards/Cards';
import Tabs from '../../components/Tabs/Tabs';
import cardDataEs from '../../data/CardDataEs.mock';
import cardDataEn from '../../data/CardDataEn.mock';
import cardDataIt from '../../data/CardDataIt.mock';
import Boton from '../../components/Boton/Boton';
import Subscription from '../../components/Subscription/Subscription';
import { CardsDestacadas } from '../../components/CardsDestacadas/CardsDestacadas';
import classes from '../../components/Tabs/Tabs.module.scss';
import styles from '../../components/Cards/Cards.module.scss';
import { useLanguage } from '../../components/LanguageContext/LanguageContext';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";


import enUK from '../../data/Translate/en.mock';
import it from '../../data/Translate/it.mock';
import es from '../../data/Translate/es.mock';

const estilo = {
  marginLeft: '50%',
  marginRight: '50%',
  whiteSpace: 'nowrap',
};

if (window.innerWidth < 500) {
  estilo.whiteSpace = 'wrap';
  estilo.textAlign = 'center';

}


const Home = () => {
  const [activeTab, setActiveTab] = useState("NoticiasEA");
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

  
  let translationsTab;
  switch (language) {
    case "United Kingdoms":
      translationsTab = cardDataEn;
      break;
    case "Italia":
      translationsTab = cardDataIt;
      break;
    case "España":
    default:
      translationsTab = cardDataEs;
  }

  const tabNames = translations.tabNames;

  return (
    <BasePage>
      <NavBar />
      <LoopVideo
        videoSrc="./immortals.mp4"
        imagenSrc="./Immorlas-Logo.svg"
        buttonText={translations.buyNow}
        onButtonClick={() => console.log("Click en el botón dorado")}
        isPrimary={true}
        isLight={false}
        customClass=""
        customImageClass=""
        showBuyButton={true}
      />
      <Section>
        <h1 className="h1" style={estilo}>{translations.pageTitle}</h1>
        <Container>
          <CardsDestacadas />
        </Container>
        <Boton
          esPrimario={false}
          isLight={false}
          onClick={() => console.log("click en el boton negro")}
          texto={translations.viewMore}
        />
      </Section>
      <Section>
        <h1 style={estilo}>{translations.latestUpdates}</h1>
        <Container>
          <div className={classes.tabsCards}>
            <Tabs
              tabNames={tabNames}
              handleTabClick={setActiveTab}
              activeTab={activeTab}
            />
            <div className={styles.cardContainer}>
              {translationsTab[activeTab] ? (
                translationsTab[activeTab].map((card, index) => (
                  <Cards
                    key={`${index}-${card.nombre}`}
                    imagenSrc={card.imagenSrc}
                    nombre={card.nombre}
                    fecha={card.fecha}
                    titulo={card.titulo}
                    texto={card.texto}
                  />
                ))
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </Container>
        <Boton
          esPrimario={false}
          isLight={false}
          onClick={() => console.log("click en el boton negro")}
          texto={translations.readMore}
        />
      </Section>
      <Subscription />
      <Footer/>
    </BasePage>
  );
};

export default Home;
