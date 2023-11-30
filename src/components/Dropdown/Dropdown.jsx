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


  let containerClassName = `${styles.DropDownContenetor}`;
  if (className === 'first') {
    containerClassName += ` ${styles.first} `;
  } else if (className === 'second') {
    containerClassName += ` ${styles.second} `;
  }


  let firstOrSecondClassName = "";
  if (className === 'first') {
    firstOrSecondClassName += ` ${styles.first}`;
  } else if (className === 'second') {
    firstOrSecondClassName += ` ${styles.second}`;
  }

  return (
    <div
    className={containerClassName}

    onMouseEnter={className === 'first' ? handleMouseEnter : undefined}
    onMouseLeave={className === 'first' ? handleMouseLeave : undefined}
    >
      <div
        className={firstOrSecondClassName}
        onClick={className === 'second' ? handleClick : undefined}
      >
        <div>
          <button className={styles.DropDownButton}>{title}</button>
        </div>
        <div className= {styles.DropDownContenetorSvg}>
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
