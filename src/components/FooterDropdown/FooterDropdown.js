import React, { useState, useEffect, useRef } from "react";
import "./FooterDropdown.scss";
import Icono from "../Icono/Icono";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";


const FooterDropdown = ({ items = [], dropdownTitle }) => {
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0] || null); // Elemento seleccionado inicialmente

  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  const keyHandler = (event) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  const clickOutsideHandler = (event) => {
    if (dropdownListRef.current) {
      if (
        dropdownListRef.current.contains(event.target) ||
        activatorRef.current.contains(event.target)
      ) {
        return;
      }

      setIsOpen(false);
    }
  };

  // Función para manejar la selección de un elemento
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      dropdownListRef.current.querySelector("a").focus();
      document.addEventListener("mousedown", clickOutsideHandler);
    } else {
      document.removeEventListener("mousedown", clickOutsideHandler); // Remueve el evento cuando se cierra el dropdown
    }
  }, [isOpen]);

  return (
    <div className={"dropdown_wrapper"} onKeyUp={keyHandler}>
      <button
        className={"dropdown_activator"}
        aria-haspopup="true"
        aria-controls={dropdownTitle}
        onClick={clickHandler}
        ref={activatorRef}
      >
        {dropdownTitle}
        {selectedItem && (
          <>
            <div className="selected_item">{selectedItem.anchor}</div>
          </>
        )}
        <div className="flechaFooter">
        {isOpen ? (
          <Icono icono={<HiOutlineChevronUp />} />
        ) : (
          <Icono  icono={<HiOutlineChevronDown />} />
        )}
        </div>
      </button>
      <ul
        ref={dropdownListRef}
        className={`${"dropdown_item_list"} ${isOpen ? "active" : ""} `}
      >
        {items.map((item, index) => {
          return (
            <li className={"item_list"} key={index}>
              <image src={item.imagen} />
              <a onClick={() => handleItemClick(item)}>{item.anchor}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterDropdown;