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
        <div className={styles.dropdown}>
          <button onClick={toggleDropdown1} className={styles.textoBoton}>
            Ayuda
          </button>
          {showDropdown1 && (
            <ul className={styles.dropdownOptions}>
              <li>Ayuda de EA</li>
              <li>Preguntas Frecuentes</li>
              <li>Foros de EA</li>
            </ul>
          )}
        </div>
        <div className={styles.dropdown}>
          <button onClick={toggleDropdown2} className={styles.textoBoton}>
            Cuenta
          </button>
          {showDropdown2 && (
            <ul className={styles.dropdownOptions}>
              <li>Crear una cuenta</li>
              <li>Iniciar sesión</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarSims4;
