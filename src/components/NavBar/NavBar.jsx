import { useState } from "react";
import styles from "./NavBar.module.scss";
import Icono from "../Icono/Icono";
import { BsThreeDotsVertical } from "react-icons/bs";

import BlackNavBar from "../BlackNavBar/BlackNavBar";
import Dropdown from "../Dropdown/Dropdown";
import Menu from "../Menu/Menu";


import { ExplorarJuegosDropDown } from "../../data/ExplorarJuegosDropDown.mock";
import { PlataformasDropDown } from "../../data/PlataformasDropDown.mock";
import { MasExperiencias } from "../../data/MasExperiencias.mock";
import { AcercaDeDropDown } from "../../data/AcercaDeDropDown.mock";
import { CompromisosDropDown } from "../../data/CompromisosDropDown.mock";
import { RecursosDropDown } from "../../data/RecursosDropDown.mock";
import HamburgerMenu from "../HamburguerMenu/HamburgerMenu";



const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
            data={ExplorarJuegosDropDown}
            title={ExplorarJuegosDropDown[0].tittle}
            data2={PlataformasDropDown}
            className={classes.first}
          />

          <Dropdown
            data={MasExperiencias}
            title={MasExperiencias[0].tittle}
            className={classes.first}
          />

          <Dropdown
            data={AcercaDeDropDown}
            title={AcercaDeDropDown[0].tittle}
            className={classes.first}
          />

          <Dropdown
            data={CompromisosDropDown}
            title={CompromisosDropDown[0].tittle}
            className={classes.first}
          />

          <Dropdown
            doble={false}
            data={RecursosDropDown}
            title={RecursosDropDown[0].tittle}
            className={classes.first}
          />

          
        </div>
      </div>
    </div>
  );
};

export default NavBar;
