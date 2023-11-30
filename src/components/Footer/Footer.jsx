import classes from "./Footer.module.scss";
import FooterDropdown from "../FooterDropdown/FooterDropdown.jsx";

import { TfiFacebook } from "react-icons/tfi";
import { GrTwitter } from "react-icons/gr";
import { ImYoutube } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { IoLogoTwitch } from "react-icons/io";
import Icono from "../Icono/Icono";
import { itemsIdioma, itemsRegion } from "./FooterData";
import eaPurple from "../../assets/Footer/eaPurple.png";
import TRUSTe from "../../assets/Footer/TRUSTe.svg";
import Container from "../Container/Container";
import Section from "../Section/Section";

import { useLanguage } from '../../components/LanguageContext/LanguageContext';


import enUK from '../../data/Translate/en.mock';
import it from '../../data/Translate/it.mock';
import es from '../../data/Translate/es.mock';



const Footer = () => {

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
    <div className={classes.footer}>
      <Section backgroundColor={"--color-octave"} margen={false}>
        <Container paddingMD={true}>
          <div className={classes.linkTextoFooterGris}>
            <a href="https://www.ea.com/es-es/careers">{translations.empleo}</a>
            <a href="https://www.ea.com/es-es/executives">{translations.ejecutivos}</a>
            <a href="https://www.ea.com/es-es/news/sharing-our-2021-impact-report">
             {translations.informe}
            </a>
            <a href="https://www.ea.com/es-es/commitments">
              {translations.compromisosF}
            </a>
            <a
              className={classes.comunicarInquietudes}
              href="https://www.ea.com/es-es/about/reporting-concerns"
            >
              {translations.comunicar}
            </a>
          </div>
          <div className={classes.linkTextoNegritaFooter}>
            <a
              className={classes.linkTextoNegritaFooterTexto}
              href="https://www.ea.com/es-es/about/reporting-concerns"
            >
             {translations.unete}
            </a>
            <div className={classes.iconosRS}>
              <Icono
                href="https://www.facebook.com/ea.es/"
                icono={<TfiFacebook />}
              />
              <Icono
                href="https://twitter.com/EA_Espana"
                icono={<GrTwitter />}
              />
              <Icono
                href="https://www.youtube.com/EAvideos"
                icono={<ImYoutube />}
              />
              <Icono
                href="https://www.instagram.com/ea/"
                icono={<BsInstagram />}
              />
              <Icono
                className={classes.iconosRedesSocialesNM}
                href="https://www.twitch.tv/ea"
                icono={<IoLogoTwitch />}
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section >
        <Container>
          <div className={classes.izquierda}>
            <img className={classes.latIzq} src={eaPurple} />
          </div>
          <div className={classes.centro}>
            <div className={classes.arribaCentro}>
              <a href="https://www.ea.com/es-es/games/library">
                {translations.bibliotecaJuegos}
              </a>
              <a href="https://www.ea.com/es-es/subscribe">{translations.suscribirse}</a>
              <a href="https://www.ea.com/es-es/redeem">{translations.canjearCodigo}</a>
              <br />
              <a href="https://www.ea.com/es-es/ea-app">{translations.eaApp}</a>
              <a href="https://www.ea.com/es-es/ea-app">{translations.acercaDeF}</a>
              <a href="https://www.ea.com/es-es/ea-app">{translations.accesibilidad}</a>
              <a href="https://www.ea.com/es-es/ea-app">{translations.ayuda}</a>
            </div>
            <div className={classes.abajoCentro}>
              <a href="http://www.ea.com/es-es/legal">
                {translations.informacionLegal}
              </a>
              <a href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/">
                {translations.acuerdoUsuario}
              </a>
              <br />
              <a href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/">
                {translations.politicaPrivacidad}
              </a>
              <br />
              <a href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/">
                {translations.actualizacionesServicio}
              </a>
              <a href="https://tos.ea.com/legalapp/WEBTERMS/US/es/PC/">
                {translations.seguridad}
              </a>
              <a href="https://www.ea.com/es-es">{translations.preferenciasCookies}</a>
              <p>© 2023 Electronic Arts Inc.</p>
            </div>
          </div>
          <div className={classes.derecha}>
            <div className={classes.arribaDer}>
              <FooterDropdown
                dropdownTitle={translations.region}
                items={itemsRegion}
              />
              <FooterDropdown dropdownTitle={translations.idioma} items={itemsIdioma} />
            </div>
            <div className={classes.abajoDer}>
              <img src={TRUSTe} alt="Truste Logo" />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Footer;
