import { useState } from "react";
import logoSims4Color from "../../../public/NavBarSims4Dos/logoSims4Color.png";
import styles from "./NavBarSims4Dos.module.scss";

const NavBarSims4Dos = () => {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);

  const toggleDropdown1 = () => {
    setShowDropdown1(!showDropdown1);
  };

  const toggleDropdown2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  const toggleDropdown3 = () => {
    setShowDropdown3(!showDropdown3);
  };

  return (
    <div className={styles.navBarSims4Dos}>
      <img
        src={logoSims4Color}
        className={styles.logoSims4}
        alt="Sims 4 Logo"
      />
      <div className={styles.estilosNavBarSims4Dos}>
        <div className={styles.dropdown}>
          <button onClick={toggleDropdown1} className={styles.textoBoton}>
            Tienda
          </button>
          {showDropdown1 && (
            <ul className={styles.dropdownOptions}>
              <li>Descubra</li>
              <li>Explorar todos</li>
              <li>Packs de expansión</li>
              <li>Packs de contenidos</li>
              <li>Packs de accesorios</li>
              <li>Kits</li>
              <li>Colección</li>
            </ul>
          )}
        </div>
        <div className={styles.textoBoton}>Novedades y actualizaciones</div>
        <div className={styles.textoBoton}>Galería</div>
        <div className={styles.textoBoton}>Acerca de</div>
        <div className={styles.dropdown}>
          <button onClick={toggleDropdown2} className={styles.textoBoton}>
            Ayuda
          </button>
          {showDropdown2 && (
            <ul className={styles.dropdownOptions}>
              <li>Trucos</li>
              <li>Preguntas Frecuentes</li>
              <li>Trucos y consejos</li>
            </ul>
          )}
        </div>
      </div>
      <div className={styles.estilosNavBarSims4DosDer}>
        <div className={styles.textoBoton}>Foro</div>
        <div className={styles.dropdown}>
          <button onClick={toggleDropdown3} className={styles.textoBotonAzul}>
            Jugar Gratis*
          </button>
          {showDropdown3 && (
            <ul className={styles.dropdownOptions}>
              <li>EA app para Windows</li>
              <li>Origin para Mac</li>
              <li>PlayStation</li>
              <li>Xbox</li>
              <li>Steam</li>
              <li>Epic Games</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBarSims4Dos;
