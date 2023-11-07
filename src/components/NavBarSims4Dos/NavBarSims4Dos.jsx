import { useState } from "react";
import logoSims4 from "../../../public/NavBarSims4/logoSims4.png";
import styles from "../NavBarSims4Dos/NavBarSims4Dos.module.scss";

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

  const navigateToPage = (url) => {
    window.location.href = url;
  };

  return (
    <div className={styles.navBarSims4Dos}>
      <img src={logoSims4} className="logoSims4" alt="Sims 4 Logo" />
      <div className="dropdownTienda">
        <button onClick={toggleDropdown1}>Tienda</button>
        {showDropdown1 && (
          <ul className="dropdown-options">
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
      <div className="dropdownAyuda">
        <button onClick={toggleDropdown2}>Ayuda</button>
        {showDropdown2 && (
          <ul className="dropdown-options">
            <li>Trucos</li>
            <li>Preguntas Frecuentes</li>
            <li>Trucos y consejos</li>
          </ul>
        )}
      </div>
      <div className="dropdownJugarGratis">
        <button onClick={toggleDropdown3}>Jugar Gratis*</button>
        {showDropdown3 && (
          <ul className="dropdown-options">
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
  );
};

export default NavBarSims4Dos;
