import React, { useState } from "react";
import "./NavBar.scss";
import Icono from "../Icono/Icono";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);

    // Habilita/deshabilita el desplazamiento en la página principal
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto"; // Restaura el desplazamiento
  };

  const handleMenuItemClick = () => {
    handleMenuClose();
    // Aquí puedes agregar más lógica si es necesario
  };

  const handleImageHover = (index) => {
    console.log(`Hover en la imagen ${index}`);
  };

  return (
    <nav className="navbar">
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

      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-header">
          <div className="close-menu" onClick={handleMenuClose}>
            <MdClose />
          <p onClick={handleMenuItemClick}>
            <a href="#" className="menu-link">
              Todos los juegos
            </a>
          </p>
          </div>
        </div>

        <div className="menu-main-image">
          <img
            src="/NavBar/imagengrande.png"
            alt="Imagen grande"
            className="main-image"
          />
        </div>

        <div className="menu-images">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <img
              key={index}
              src={`/NavBar/imagen${index}.jpg`}
              alt={`Imagen ${index}`}
              className="menu-image"
              onMouseEnter={() => handleImageHover(index)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
