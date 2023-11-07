import { useState } from "react";
import styles from "./NavBarSims4.module.scss";

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
    <div className={styles.navBarSims4}>
      <div className={styles.empresa}>Electronic Arts</div>
      <div className={styles.dropdowns}>
        <div className={styles.dropdownAyuda}>
          <button onClick={toggleDropdown1}>Ayuda</button>
          {showDropdown1 && (
            <ul className={styles.dropdownOptions}>
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
        <div className={styles.dropdownPerfil}>
          <button onClick={toggleDropdown2}>
            Cuenta
          </button>
          {showDropdown2 && (
            <ul className={styles.dropdownOptions}>
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
