import { useState } from "react";
import logoSims4 from "../../../public/NavBarSims4/logoSims4.png";
import "../NavBarSims4Dos/NavBarSims4Dos.scss";

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
    <div className="navBarSims4Dos">
      <img src={logoSims4} className="logoSims4" alt="Sims 4 Logo" />
      <div className="dropdownTienda">
        <button onClick={toggleDropdown1}>Tienda</button>
        {showDropdown1 && (
          <ul className="dropdown-options">
            <li
              onClick={() =>
                navigateToPage(
                  "https://www.ea.com/es/games/the-sims/the-sims-4/store"
                )
              }
            >
              Descubra
            </li>
            <li
              onClick={() =>
                navigateToPage(
                  "https://www.ea.com/es/games/the-sims/the-sims-4/store/browse"
                )
              }
            >
              Explorar todos
            </li>
            <li
              onClick={() =>
                navigateToPage(
                  "https://www.ea.com/es/games/the-sims/the-sims-4/store/browse"
                )
              }
            >
              Packs de expansión
            </li>
            <li
              onClick={() =>
                navigateToPage(
                  "https://www.ea.com/es/games/the-sims/the-sims-4/store/categories/game-packs"
                )
              }
            >
              Packs de contenidos
            </li>
            <li
              onClick={() =>
                navigateToPage(
                  "https://www.ea.com/es/games/the-sims/the-sims-4/store/categories/stuff-packs"
                )
              }
            >
              Packs de accesorios
            </li>
            <li
              onClick={() =>
                navigateToPage(
                  "https://www.ea.com/es/games/the-sims/the-sims-4/store/categories/stuff-packs"
                )
              }
            >
              Kits
            </li>
            <li
              onClick={() =>
                navigateToPage(
                  "https://www.ea.com/es/games/the-sims/the-sims-4/store/categories/bundle-packs"
                )
              }
            >
              Colección
            </li>
          </ul>
        )}
      </div>
      <div className="dropdownAyuda">
        <button onClick={toggleDropdown2}>Ayuda</button>
        {showDropdown2 && (
          <ul className="dropdown-options">
            <li
              onClick={() =>
                navigateToPage("https://www.ea.com/games/the-sims/cheats")
              }
            >
              Trucos
            </li>
            <li
              onClick={() =>
                navigateToPage("https://www.ea.com/games/the-sims/cheats")
              }
            >
              Preguntas Frecuentes
            </li>
            <li
              onClick={() =>
                navigateToPage(
                  "https://www.ea.com/games/the-sims/tips-and-tricks"
                )
              }
            >
              Trucos y consejos
            </li>
          </ul>
        )}
      </div>
      <div className="dropdownJugarGratis">
        <button onClick={toggleDropdown3}>Jugar Gratis*</button>
        {showDropdown3 && (
          <ul className="dropdown-options">
            <li
              onClick={() =>
                navigateToPage(
                  "https://www.ea.com/es/games/the-sims/the-sims-4/download"
                )
              }
            >
              EA app para Windows
            </li>
            <li
              onClick={() =>
                navigateToPage(
                  "https://www.ea.com/es/games/the-sims/the-sims-4/download"
                )
              }
            >
              Origin para Mac
            </li>
            <li
              onClick={() =>
                navigateToPage("https://lnk.to/the-sims-4-base-game")
              }
            >
              PlayStation
            </li>
            <li
              onClick={() =>
                navigateToPage("https://lnk.to/the-sims-4-base-game")
              }
            >
              Xbox
            </li>
            <li
              onClick={() =>
                navigateToPage("https://lnk.to/the-sims-4-base-game-steam")
              }
            >
              Steam
            </li>
            <li
              onClick={() =>
                navigateToPage("https://store.epicgames.com/p/the-sims-4")
              }
            >
              Epic Games
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBarSims4Dos;
