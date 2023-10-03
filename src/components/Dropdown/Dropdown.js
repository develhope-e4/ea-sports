import { useState } from "react";
import "./Dropdown.scss";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import { GoChevronDown } from "react-icons/go";

function DropDown({ title, data, doble, data2 }) {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="DropDownSection">
      <div
        className="DropDown"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="DropDownButton">{title}</button>
        {isDropdownVisible && (
          <DropDownMenu data={data} doble={doble} data2={data2} />
        )}
      </div>
      <GoChevronDown />
    </div>
  );
}

export default DropDown;
