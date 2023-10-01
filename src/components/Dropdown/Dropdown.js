import { useState } from "react";
import "./DropDown.scss";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import { GoChevronDown } from "react-icons/go";

function DropDown({ title, data, doble, h3, data2, h32 }) {
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
          <DropDownMenu
            data={data}
            doble={doble}
            h3={h3}
            data2={data2}
            h32={h32}
          />
        )}
      </div>
      <GoChevronDown />
    </div>
  );
}

export default DropDown;
