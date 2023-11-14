import { useState } from "react";
import "./HamburgerMenu.scss"; // Estiliza este archivo según tus necesidades
import { FiMenu, FiXCircle } from "react-icons/fi";
import DropDown from "../Dropdown/Dropdown";

import Dropdown from "../Dropdown/Dropdown";
import { ExplorarJuegosDropDown } from "../../data/ExplorarJuegosDropDown.mock";
import { PlataformasDropDown } from "../../data/PlataformasDropDown.mock";
import { MasExperiencias } from "../../data/MasExperiencias.mock";
import { AcercaDeDropDown } from "../../data/AcercaDeDropDown.mock";
import { CompromisosDropDown } from "../../data/CompromisosDropDown.mock";
import { RecursosDropDown } from "../../data/RecursosDropDown.mock";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="HamburgerMenu">
      <button onClick={toggleMenu}>
        <div className="menuicon">
          <FiMenu />
        </div>
      </button>
      {menuOpen && (
        <div className={`HamburgerLinks ${menuOpen ? "open" : ""}`}>
          <div className="menuHamburguer">
            <div className="menuHamburguerAction">
              <img
                src="/NavBar/ea-electronicsarts.svg"
                alt="Mi SVG"
                className="easvg"
                onClick={""}
              />

              <button onClick={toggleMenu}>
                <FiXCircle />
              </button>
            </div>
            <div className="menuHamburguerMenu">
              <DropDown
                data={ExplorarJuegosDropDown}
                title={ExplorarJuegosDropDown[0].tittle}
                data2={PlataformasDropDown}
                className={"second"}
              />

              <div className="separator"></div>

              <DropDown
                data={MasExperiencias}
                title={MasExperiencias[0].tittle}
                className={"second"}
              />

              <div className="separator"></div>

              <Dropdown
                data={AcercaDeDropDown}
                title={AcercaDeDropDown[0].tittle}
                className={"second"}
              />
              <div className="separator"></div>

              <Dropdown
                data={CompromisosDropDown}
                title={CompromisosDropDown[0].tittle}
                className={"second"}
              />
              <div className="separator"></div>

              <Dropdown
                doble={false}
                data={RecursosDropDown}
                title={RecursosDropDown[0].tittle}
                className={"second"}
              />
              <div className="separator"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
