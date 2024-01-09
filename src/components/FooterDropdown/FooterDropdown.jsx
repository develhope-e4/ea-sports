import { useState, useEffect, useRef } from "react";
import classes from "./FooterDropdown.module.scss";
import Icono from "../Icono/Icono";
import { HiOutlineChevronUp, HiOutlineChevronDown } from "react-icons/hi";
import { useLanguage } from '../LanguageContext/LanguageContext'; 

const FooterDropdown = ({ items = [], dropdownTitle }) => {
  const { changeLanguage } = useLanguage(); 
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
    if (dropdownListRef.current && !dropdownListRef.current.contains(event.target) && !activatorRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    changeLanguage(item.anchor); 
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      dropdownListRef.current.querySelector("a").focus();
      document.addEventListener("mousedown", clickOutsideHandler);
    } else {
      document.removeEventListener("mousedown", clickOutsideHandler);
    }
  }, [isOpen]);

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
        {selectedItem && <div className={classes.selected_item}>{selectedItem.anchor}</div>}
        <div className={classes.flechaFooter}>
          {isOpen ? <Icono icono={<HiOutlineChevronUp />} /> : <Icono icono={<HiOutlineChevronDown />} />}
        </div>
      </button>
      {isOpen && (
        <ul ref={dropdownListRef} className={classes.dropdown_item_list}>
          {items.map((item, index) => (
            <li className={classes.item_list} key={index} onClick={() => handleItemClick(item)}>
              {item.flag && <img src={item.flag} alt="" className={classes.flag} />}
              <a href="#">{item.anchor}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FooterDropdown;
