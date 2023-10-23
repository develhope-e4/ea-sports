import { useState, useEffect, useRef } from "react";
import classes from "./FooterDropdown.module.scss";
import Icono from "../Icono/Icono";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";

const FooterDropdown = ({ items = [], dropdownTitle }) => {
  const activatorRef = useRef(null);
  const dropdownListRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0] || null); 

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

  console.log(items);
  return (
    <div className={classes.dropdown_wrapper} onKeyUp={keyHandler}>
      <button
        className={classes.dropdown_activator}
        aria-haspopup="true"
        aria-controls={dropdownTitle}
        onClick={clickHandler}
        ref={activatorRef}
      >
        {dropdownTitle}
        {selectedItem && (
          <>
            <div className={classes.selected_item}>{selectedItem.anchor}</div>
          </>
        )}
        <div className={classes.flechaFooter}>
          {isOpen ? (
            <Icono icono={<HiOutlineChevronUp />} />
          ) : (
            <Icono icono={<HiOutlineChevronDown />} />
          )}
        </div>
      </button>
      <ul
        ref={dropdownListRef}
        className={`${classes.dropdown_item_list} ${isOpen ? classes.active : ""} `}
      >
        {items.map((item, index) => {
          return (
            <li className={classes.item_list} key={index}>
              {item.flag && <img src={item.flag} className={classes.flag} />}
              <a onClick={() => handleItemClick(item)}>{item.anchor}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterDropdown;
