import { useState } from "react";
import styles from "./NavBar.module.scss";
import Icono from "../Icono/Icono";
import { BsThreeDotsVertical } from "react-icons/bs";
import BlackNavBar from "../BlackNavBar/BlackNavBar";
import Dropdown from "../Dropdown/Dropdown";
import Menu from "../Menu/Menu";
import HamburgerMenu from "../HamburguerMenu/HamburgerMenu";
import { useLanguage } from '../../components/LanguageContext/LanguageContext';
import enUK from '../../data/Translate/en.mock';
import it from '../../data/Translate/it.mock';
import es from '../../data/Translate/es.mock';


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('menu-open', menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  return (
    <div className={styles.navbarContainer}>
      <BlackNavBar />

      <Menu
        menuOpen={menuOpen}
        handleMenuClose={handleMenuClose}
      />
      <div className={styles.nav}>
        <HamburgerMenu />
        <Icono
          onClick={handleMenuToggle}
          esRedSocial={false}
          icono={<BsThreeDotsVertical />}
        />
        <img
          src="/NavBar/ea-electronicsarts.svg"
          alt="EA Logo"
          className={styles.easvg}
          onClick={handleMenuClose}
        />

        <div className={styles.dropDownSection}>
          <Dropdown
            data={translations.explorarJuegos}
            title={translations.explorarJuegosTitle} // Traducción para el título
            data2={translations.plataformas}
            className={"first"}
          />

          <Dropdown
            data={translations.masExperiencias}
            title={translations.masExperienciasTitle} // Traducción para el título
            className={"first"}
          />

          <Dropdown
            data={translations.acercaDe}
            title={translations.acercaDeTitle} // Traducción para el título
            className={"first"}
          />

          <Dropdown
            data={translations.compromisos}
            title={translations.compromisosTitle} // Traducción para el título
            className={"first"}
          />

          <Dropdown
            doble={false}
            data={translations.recursos}
            title={translations.recursosTitle} // Traducción para el título
            className={"first"}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
