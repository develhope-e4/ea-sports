import { useState } from "react";
import styles from "./Dropdown.module.scss";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import { GoChevronDown } from "react-icons/go";

function DropDown({ title, data, data2, className }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div
      className={`DropDownContenetor ${
        className === "first" && "DropDownContenetorFirst"
      }`}
      onMouseEnter={className === "first" ? handleMouseEnter : undefined}
      onMouseLeave={className === "first" ? handleMouseLeave : undefined}
    >
      <div
        className={className}
        onClick={className === "second" ? handleClick : undefined}
      >
        <div>
          <button className="DropDownButton">{title}</button>
        </div>
        <div className="DropDownContenetorSvg">
          <GoChevronDown />
        </div>
      </div>

      {isDropdownVisible && (
        <DropDownMenu data={data} data2={data2} className={className} />
      )}
    </div>
  );
}

export default DropDown;
