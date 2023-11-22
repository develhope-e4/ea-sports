import { useState, useEffect, useRef } from "react";
import styles from "./FooterDropdownSims4.module.scss";
import Icono from "../Icono/Icono";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FooterDropdownSims4 = ({ items = [], dropdownTitle }) => {
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
      const firstAnchor = dropdownListRef.current.querySelector("button");
      if (firstAnchor) {
        firstAnchor.focus();
      }
      document.addEventListener("mousedown", clickOutsideHandler);
    } else {
      document.removeEventListener("mousedown", clickOutsideHandler);
    }
  }, [isOpen]);  

  console.log(items);
  return (
    <div className={styles.dropdown_wrapper} onKeyUp={keyHandler}>
      <button
        className={styles.dropdown_activator}
        aria-haspopup="true"
        aria-controls={dropdownTitle}
        onClick={clickHandler}
        ref={activatorRef}
      >
        {dropdownTitle}
        {selectedItem && (
          <>
            <div className={styles.selected_item}>{selectedItem.anchor}</div>
          </>
        )}
        <div className={styles.flechaFooter}>
          {isOpen ? (
            <Icono icono={<IoIosArrowUp />} />
          ) : (
            <Icono icono={<IoIosArrowDown />} />
          )}
        </div>
      </button>
      <ul
        ref={dropdownListRef}
        className={`${"dropdown_item_list"} ${isOpen ? "active" : ""} `}
      >
        {items.map((item, index) => {
          return (
            <li className={styles.item_list} key={index}>
              <button
                onClick={() => handleItemClick(item)}
                className={styles.link_button}
              >
                {item.anchor}
              </button>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterDropdownSims4;
