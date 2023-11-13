import { useState } from "react";
import classes from "./HamburgerMenu.module.scss"; // Estiliza este archivo según tus necesidades
import { FiMenu, FiXCircle } from "react-icons/fi";
import DropDown from "../Dropdown/Dropdown";

import Dropdown from "../Dropdown/Dropdown";
import { ExplorarJuegosDropDown } from "../../data/ExplorarJuegosDropDown.mock";
import { PlataformasDropDown } from "../../data/PlataformasDropDown.mock";
import { MasExperiencias } from "../../data/MasExperiencias.mock";
import { AcercaDeDropDown } from "../../data/AcercaDeDropDown.mock";
import { CompromisosDropDown } from "../../data/CompromisosDropDown.mock";
import { RecursosDropDown } from "../../data/RecursosDropDown.mock";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const Menu = cx({
    hamburguerLinks: true,
    open: menuOpen,
    "": !menuOpen
  })

  return (
    <div className={classes.HamburgerMenu}>
      <button onClick={toggleMenu}>
        <div className={classes.menuicon}>
          <FiMenu />
        </div>
      </button>
      {menuOpen && (
        <div className={Menu}>
          <div className={classes.menuHamburguer}>
            <div className={classes.menuHamburguerAction}>
              <img
                src="/NavBar/ea-electronicsarts.svg"
                alt="Mi SVG"
                className={classes.easvg}
                onClick={""}
              />

              <button onClick={toggleMenu}>
                <FiXCircle />
              </button>
            </div>
            <div className={classes.menuHamburguerMenu}>
              <DropDown
                data={ExplorarJuegosDropDown}
                title={ExplorarJuegosDropDown[0].tittle}
                data2={PlataformasDropDown}
                className={classes.second}
              />

              <div className={classes.separator}></div>

              <DropDown
                data={MasExperiencias}
                title={MasExperiencias[0].tittle}
                className={classes.second}
              />

              <div className={classes.separator}></div>

              <Dropdown
                data={AcercaDeDropDown}
                title={AcercaDeDropDown[0].tittle}
                className={classes.second}
              />
              <div className={classes.separator}></div>

              <Dropdown
                data={CompromisosDropDown}
                title={CompromisosDropDown[0].tittle}
                className={classes.second}
              />
              <div className={classes.separator}></div>

              <Dropdown
                doble={false}
                data={RecursosDropDown}
                title={RecursosDropDown[0].tittle}
                className={classes.second}
              />
              <div className={classes.separator}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
