import React from "react";
import { menuCardDestacadaData } from "../../data/MenuCardDestacada.mock";
import { MdClose } from "react-icons/md";
import CardDestacada from "../CardDestacada/CardDestacada";
import "./Menu.scss";
const Menu = ({ menuOpen, handleMenuClose, handleMenuItemClick }) => {
  return (
    <>
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
      <div
        className={`menu-overlay ${menuOpen ? "menu-overlay-visible" : ""}`}
        onClick={handleMenuClose}
      />
    </>
  );
};

export default Menu;
