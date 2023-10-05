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
        <img
          src="/NavBar/ea-electronicsarts.svg"
          alt="Mi SVG"
          className="easvg"
          onClick={handleMenuClose}
        />

        <div className="DropDownSectionDemo">
          <div className="juegosDropDown">
            <Dropdown
              doble={true}
              data={ExplorarJuegosDropDown}
              title={ExplorarJuegosDropDown[0].tittle}
              data2={PlataformasDropDown}
            />
          </div>

          <div className="MasExperiencias">
            <Dropdown
              doble={false}
              data={MasExperiencias}
              title={MasExperiencias[0].tittle}
              data2={MasExperiencias}
            />
          </div>

          <div className="AcercaDeDropDown">
            <Dropdown
              doble={false}
              data={AcercaDeDropDown}
              title={AcercaDeDropDown[0].tittle}
              data2={AcercaDeDropDown}
            />
          </div>

          <div className="CompromisosDropDown">
            <Dropdown
              doble={false}
              data={CompromisosDropDown}
              title={CompromisosDropDown[0].tittle}
              data2={CompromisosDropDown}
            />
          </div>

          <div className="RecursosDropDown">
            <Dropdown
              doble={false}
              data={RecursosDropDown}
              title={RecursosDropDown[0].tittle}
              data2={RecursosDropDown}
            />
          </div>
        </div>
      </ul>

      
    </div>
  );
};

export default NavBar;
