import { useState } from "react";
import "./Dropdown.scss";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import { GoChevronDown } from "react-icons/go";

function DropDown({ title, data, data2 }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="DropDownButton">{title}</button>
      {isDropdownVisible && <DropDownMenu data={data} data2={data2} />}
      <GoChevronDown />
    </div>
  );
}

export default DropDown;
