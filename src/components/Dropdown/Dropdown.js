import React, { useState, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import './DropDown.scss';

const DropDown = () => {
  const options = [
    {
      text: "Ultimos juegos",
      url: "https://www.google.com/",
    },
    {
      text: "Proximamente",
      url: "https://www.google.com/",
    },
    {
      text: "Juegos gratuitos",
      url: "https://www.google.com/",
    },
  ];

  const [dropdown, setDropdown] = useState({
    open: false,
    optionSelected: options[0].text,
  });

  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setDropdown({ ...dropdown, open: true });
  };

  const handleMouseLeave = () => {
    // Check if the mouse is over the dropdown or the button
    if (!dropdownRef.current.contains(document.activeElement)) {
      setDropdown({ ...dropdown, open: false });
    }
  };

  const handleOptionClick = (option) => {
    window.location.href = option.url;
  };

  return (
    <div className="container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='dropdown' ref={dropdownRef}>
        <div className={dropdown.open ? "first-option-open" : "first-option-close"}>
          <span>{dropdown.optionSelected}</span>
          <GoChevronDown />
        </div>
        {dropdown.open && (
          <div className='options'>
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionClick(option)}
                className={option.text === dropdown.optionSelected ? "orderSelected" : "order"}
              >
                {option.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
