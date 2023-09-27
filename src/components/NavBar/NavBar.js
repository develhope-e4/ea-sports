import React, { useState } from "react";
import "./NavBar.scss";
import Icono from "../Icono/Icono";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import CardDestacada from "../CardDestacada/CardDestacada";
import { menuCardDestacadaData } from "../../data/MenuCardDestacada.mock";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle(menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleMenuItemClick = () => {
    handleMenuClose();
  };

  return (
    <div className="navbar-container">
      <nav className={`menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-header">
          <div className="close-menu" onClick={handleMenuClose}>
            <MdClose />
            <p onClick={handleMenuItemClick}>
              <a href="google.com" className="menu-link">
                Todos los juegos
              </a>
            </p>
          </div>
        </div>

        <div className="section-menu">
          {menuCardDestacadaData &&
            menuCardDestacadaData.map((card, index) => (
              <CardDestacada
                key={index}
                url="http://google.com"
                backgroundImage={card.bg}
                gameLogo={card.logo}
                className={index === 0 ? "first-image" : "other-images"}
                showText={false} 
              />
            ))}
        </div>
      </nav>

      <ul className="nav">
        <li onClick={handleMenuToggle}>
          <Icono esRedSocial={false} icono={<BsThreeDotsVertical />} />
        </li>

        <img
          src="/NavBar/ea-electronicsarts.svg"
          alt="Mi SVG"
          className="easvg"
        />
      </ul>

      <div
        className={`menu-overlay ${menuOpen ? "menu-overlay-visible" : ""}`}
        onClick={handleMenuClose}
      />
    </div>
  );
};

export default NavBar;
