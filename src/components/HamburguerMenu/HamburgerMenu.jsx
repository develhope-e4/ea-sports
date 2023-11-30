import { useState } from "react";
import styles from "./HamburgerMenu.module.scss";
import { FiMenu, FiXCircle } from "react-icons/fi";
import { useLanguage } from '../../components/LanguageContext/LanguageContext';
import enUK from '../../data/Translate/en.mock';
import it from '../../data/Translate/it.mock';
import es from '../../data/Translate/es.mock';
import Dropdown from "../Dropdown/Dropdown";

const HamburgerMenu = () => {
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.menuContainer}>
      <button onClick={toggleMenu} className={styles.menuButton}>
        <div className={styles.menuicon}>
          <FiMenu />
        </div>
      </button>
      {menuOpen && (
        <div className={styles.menuOpenMenu}>
          <div className={styles.menuHamburguerAction}>
            <img
              src="/NavBar/ea-electronicsarts.svg"
              alt="Mi SVG"
              className="easvg"
              onClick={console.log("")}
            />

            <button onClick={toggleMenu}>
              <FiXCircle />
            </button>
          </div>

          <div className={styles.menuContent}>
            <Dropdown
              data={translations.explorarJuegos}
              title={translations.explorarJuegosTitle}
              data2={translations.plataformas}
              className={"second"}
            />
            <div className={styles.separator}></div>
            <Dropdown
              data={translations.masExperiencias}
              title={translations.masExperienciasTitle}
              className="second"
            />
            <div className={styles.separator}></div>
            <Dropdown
              data={translations.acercaDe}
              title={translations.acercaDeTitle}
              className="second"
            />
            <div className={styles.separator}></div>
            <Dropdown
              data={translations.compromisos}
              title={translations.compromisosTitle}
              className="second"
            />
            <div className={styles.separator}></div>
            <Dropdown
              data={translations.recursos}
              title={translations.recursosTitle}
              className="second"
            />
            <div className={styles.separator}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
