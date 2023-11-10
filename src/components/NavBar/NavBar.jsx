import { useState } from "react";
import classes from "./NavBar.module.scss";
import Icono from "../Icono/Icono";
import { BsThreeDotsVertical } from "react-icons/bs";

import BlackNavBar from "../BlackNavBar/BlackNavBar";
import Dropdown from "../Dropdown/Dropdown";
import { ExplorarJuegosDropDown } from "../../data/ExplorarJuegosDropDown.mock";
import { PlataformasDropDown } from "../../data/PlataformasDropDown.mock";
import { MasExperiencias } from "../../data/MasExperiencias.mock";
import { AcercaDeDropDown } from "../../data/AcercaDeDropDown.mock";
import { CompromisosDropDown } from "../../data/CompromisosDropDown.mock";
import { RecursosDropDown } from "../../data/RecursosDropDown.mock";
import Menu from "../Menu/Menu";
import HamburgerMenu from "../HamburguerMenu/HamburgerMenu";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle(menuOpen);
  };
  const handleMenuClose = () => {
    setMenuOpen(false);
    document.body.classList.remove(menuOpen);
  };

  const handleMenuItemClick = () => {
    handleMenuClose();
  };

  return (
    <div className="navbar-container">
      <BlackNavBar />

      <Menu
        menuOpen={menuOpen}
        handleMenuClose={handleMenuClose}
        handleMenuItemClick={handleMenuItemClick}
      />
  <div className={ classes.nav }>
        <HamburgerMenu/>
        <Icono
          onClick={handleMenuToggle}
          esRedSocial={false}
          icono={<BsThreeDotsVertical />}
        />
        <img
          src="/NavBar/ea-electronicsarts.svg"
          alt="Mi SVG"
          className={classes.easvg}
          onClick={handleMenuClose}
        />

        <div className={classes.DropDownSectionDemo}>
          <Dropdown
            data={ExplorarJuegosDropDown}
            title={ExplorarJuegosDropDown[0].tittle}
            data2={PlataformasDropDown}
            className={"first"}
          />

          <Dropdown
            data={MasExperiencias}
            title={MasExperiencias[0].tittle}
            className={"first"}
          />

          <Dropdown
            data={AcercaDeDropDown}
            title={AcercaDeDropDown[0].tittle}
            className={"first"}
          />

          <Dropdown
            data={CompromisosDropDown}
            title={CompromisosDropDown[0].tittle}
            className={"first"}
          />

          <Dropdown
            doble={false}
            data={RecursosDropDown}
            title={RecursosDropDown[0].tittle}
            className={"first"}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
