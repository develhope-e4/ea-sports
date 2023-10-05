import React, { useState } from "react";
import "./NavBar.scss";
import Icono from "../Icono/Icono";
import { BsThreeDotsVertical } from "react-icons/bs";

import BlackNavBar from "../BlackNavBar/BlackNavBar";
import Dropdown from "../../components/Dropdown/Dropdown";
import { ExplorarJuegosDropDown } from "../../data/ExplorarJuegosDropDown.mock";
import { PlataformasDropDown } from "../../data/PlataformasDropDown.mock";
import { MasExperiencias } from "../../data/MasExperiencias.mock";
import { AcercaDeDropDown } from "../../data/AcercaDeDropDown.mock";
import { CompromisosDropDown } from "../../data/CompromisosDropDown.mock";
import { RecursosDropDown } from "../../data/RecursosDropDown.mock";
import Menu from "../Menu/Menu";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle(menuOpen);
  };
  const handleMenuClose = () => {
    setMenuOpen(false);
    document.body.classList.remove("menu-open");
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
      <ul className="nav">
        <Icono
          onClick={handleMenuToggle}
          esRedSocial={false}
          icono={<BsThreeDotsVertical />}
        />

      <div className="nav">
        <li onClick={handleMenuToggle}>
          <Icono esRedSocial={false} icono={<BsThreeDotsVertical />} />
        </li>
        <img
          src="/NavBar/ea-electronicsarts.svg"
          alt="Mi SVG"
          className="easvg"
          onClick={handleMenuClose}
        />

        <div className="DropDownSectionDemo">
          <Dropdown
            data={ExplorarJuegosDropDown}
            title={ExplorarJuegosDropDown[0].tittle}
            data2={PlataformasDropDown}
          />

          <Dropdown data={MasExperiencias} title={MasExperiencias[0].tittle} />

          <Dropdown
            data={AcercaDeDropDown}
            title={AcercaDeDropDown[0].tittle}
          />

          <Dropdown
            data={CompromisosDropDown}
            title={CompromisosDropDown[0].tittle}
          />

          <Dropdown
            doble={false}
            data={RecursosDropDown}
            title={RecursosDropDown[0].tittle}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
