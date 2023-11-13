import { useState } from "react";
import styles from "./HamburgerMenu.module.scss";
import { FiMenu, FiXCircle } from "react-icons/fi";

import { ExplorarJuegosDropDown } from "../../data/ExplorarJuegosDropDown.mock";
import { PlataformasDropDown } from "../../data/PlataformasDropDown.mock";
import { MasExperiencias } from "../../data/MasExperiencias.mock";
import { AcercaDeDropDown } from "../../data/AcercaDeDropDown.mock";
import { CompromisosDropDown } from "../../data/CompromisosDropDown.mock";
import { RecursosDropDown } from "../../data/RecursosDropDown.mock";
import DropDown from "../Dropdown/Dropdown";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <div className={styles.menuContainer}>
      <button onClick={toggleMenu} className={styles.menuButton}>
        <div className="menuicon">
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
              <DropDown
                data={ExplorarJuegosDropDown}
                title={ExplorarJuegosDropDown[0].tittle}
                data2={PlataformasDropDown}
                className={"second"}
              />
              <div className={styles.separator}></div>
              <DropDown
                data={MasExperiencias}
                title="Más Experiencias"
                className="second"
              />
              <div className={styles.separator}></div>
              <DropDown
                data={AcercaDeDropDown}
                title="Acerca De"
                className="second"
              />
              <div className={styles.separator}></div>
              <DropDown
                data={CompromisosDropDown}
                title="Compromisos"
                className="second"
              />
              <div className={styles.separator}></div>
              <DropDown
                data={RecursosDropDown}
                title="Recursos"
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
