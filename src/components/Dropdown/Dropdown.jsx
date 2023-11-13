import { useState } from "react";
import classes from "./Dropdown.module.scss";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import { GoChevronDown } from "react-icons/go";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

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

  const DropdownContenedor = cx({
    DropDownContenetor: true,
    first: className,
    DropdownContenedorFirst: className
  })

  return (
    <div
      className={DropdownContenedor /* ${
        className === classes.first && classes.DropDownContenetorFirst
      } */}
      onMouseEnter={className === classes.first ? handleMouseEnter : undefined}
      onMouseLeave={className === classes.first ? handleMouseLeave : undefined}
    >
      <div
        className={className}
        onClick={className === classes.second ? handleClick : undefined}
      >
        <div>
          <button className={classes.DropDownButton}>{title}</button>
        </div>
        <div className={classes.DropDownContenetorSvg}>
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
