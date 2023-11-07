import styles from "./FooterSims4.module.scss";

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
import logoPegi from "../../../public/FooterSims4/logoPegi.png";
import logoSexo from "../../../public/FooterSims4/logoSexo.png";
import logoViolencia from "../../../public/FooterSims4/logoViolencia.png";

function FooterSims4() {
  return (
    <div className={styles.footerSims4}>
      <Section className={styles.claro}>
        <Container className={styles.contenido}>
          <div className={styles.subContenido1}>
            <div className={styles.iconosRS}>
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
            <div className={styles.dropdowns}>
              <FooterDropdown
                dropdownTitle="Región (precios)"
                items={itemsRegion}
              />
              <FooterDropdown dropdownTitle="Idioma" items={itemsIdioma} />
            </div>
            <VolverArribaBoton />
          </div>
          <div className={styles.subContenido2}>
            <div className={styles.logosFooter}>
            <img
              className={styles.logoElectronicsArts}
              src={logoElectronicsArts}
              alt="Logo ElectronicsArts"
            />
            <img
              className={styles.logoMaxis}
              src={logoMaxis}
              alt="Logo Maxis"
            />
            <img
              className={styles.logoSims4}
              src={logoSims4}
              alt="Logo Sims4"
            />
            </div>
            <div clasname={styles.advertencias}>
                <img
                className={styles.logoPegi}
                src={logoPegi}
                alt="Logo Pegi"
                />
                <img
                className={styles.logoSexo}
                src={logoSexo}
                alt="Contenido no permitido para menores de 18 años"
                />
                <img
                className={styles.logoViolencia}
                src={logoViolencia}
                alt="Contenido violento"
                />
            </div>
          </div>
          <div className={styles.subContenido3}></div>
          <div className={styles.subContenido4}></div>
        </Container>
      </Section>
      <Section className={styles.oscuro}>
        <Container className={styles.contenidoOscuro}>
          <p>&copy; 2023 Electronic Arts Inc.</p>
          <img src={TRUSTe} alt="Truste Logo" />
        </Container>
      </Section>
    </div>
  );
}

export default FooterSims4;
