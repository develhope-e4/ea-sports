import { useState } from "react";
import "./NavBarSims4.scss";

const NavbarSims4 = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  const navigateToPage = (url) => {
    window.location.href = url;
  };

  return (
    <div className="navBarSims4">
      <div className="logoSims4">Electronic Arts</div>
      <div className="dropdowns">
        <div className="dropdownAyuda">
          <button onClick={toggleDropdown1}>Ayuda</button>
          {showDropdown1 && (
            <ul className="dropdown-options">
              <li onClick={() => navigateToPage("https://help.ea.com/")}>
                Ayuda de EA
              </li>
              <li onClick={() => navigateToPage("https://answers.ea.com/")}>
                Preguntas Frecuentes
              </li>
              <li onClick={() => navigateToPage("https://answers.ea.com/")}>
                Foros de EA
              </li>
            </ul>
          )}
        </div>
        <div className="dropdownPerfil">
          <button onClick={toggleDropdown2}>
            Cuenta
          </button>
          {showDropdown2 && (
            <ul className="dropdown-options">
              <li
                onClick={() =>
                  navigateToPage(
                    "https://myaccount.ea.com/cp-ui/aboutme/index?gameId=ebisu"
                  )
                }
              >
                Ajustes de la cuenta
              </li>
              <li>Cierra sesión</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarSims4;
