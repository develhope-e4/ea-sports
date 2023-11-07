import "./FooterSims4.scss";

import Container from "../Container/Container";
import Section from "../Section/Section";

import VolverArribaBoton from "../VolverArribaBoton/VolverArribaBoton";
import FooterDropdown from "../FooterDropdown/FooterDropdown";
import { itemsIdioma, itemsRegion } from "../Footer/FooterData";

import Icono from "../Icono/Icono";
import { TfiFacebook } from "react-icons/tfi";
import { GrTwitter } from "react-icons/gr";
import { ImYoutube } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

import TRUSTe from "../../assets/Footer/TRUSTe.svg";
import logoSims4 from "../../../public/FooterSims4/logoSims4.png";
import logoMaxis from "../../../public/FooterSims4/logoMaxis.png";
import logoElectronicsArts from "../../../public/FooterSims4/logoElectronicsArts.png";


function FooterSims4() {
  return (
    <div className="footer-sims4">
      <Section className="claro">
        <Container className="contenidoClaro">
          <div className="contenidoClaro1">
            <div className="iconosRS">
              <Icono
                href="https://www.facebook.com/ea.es/"
                icono={<TfiFacebook />}
              />
              <Icono
                href="https://twitter.com/EA_Espana"
                icono={<GrTwitter />}
              />
              <Icono
                href="https://www.instagram.com/ea/"
                icono={<BsInstagram />}
              />
              <Icono
                href="https://www.youtube.com/EAvideos"
                icono={<ImYoutube />}
              />
            </div>
            <div className="dropdownsFooter">
              <FooterDropdown
                dropdownTitle="Región (precios)"
                items={itemsRegion}
              />
              <FooterDropdown dropdownTitle="Idioma" items={itemsIdioma} />
            </div>
            <VolverArribaBoton />
          </div>
          <div className="contenidoClaro2">
            <img 
            className="logosFooterSims4"
            src={logoElectronicsArts}
            alt="Logo ElectronicsArts"
            onClick={() => window.open("https://www.truste.com")}
            />
            <img
            className="logosFooterSims4"
            src={logoMaxis}
            alt="Logo Maxis"
            onClick={() => window.open("https://www.truste.com")}
            />
            <img
            className="logosFooterSims4"
            src={logoSims4}
            alt="Logo Sims4"
            onClick={() => window.open("https://www.truste.com")}
            />
          </div>
          <div className="contenidoClaro3"></div>
          <div className="contenidoClaro4"></div>
        </Container>
      </Section>
      <Section className="oscuro">
        <Container className="contenidoOscuro">
          <p>&copy; 2023 Electronic Arts Inc.</p>
          <img src={TRUSTe} alt="Truste Logo" />
        </Container>
      </Section>
    </div>
  );
}

export default FooterSims4;
