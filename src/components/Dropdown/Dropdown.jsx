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





  

  const containerClassNames = `${styles.container} ${styles[className]}`;

  const buttonClassNames = `${styles.DropDownButton} ${className === "first" ? styles.firstButton : ""}`;




  

  const containerClassNames = `${styles.container} ${styles[className]}`;

  const buttonClassNames = `${styles.DropDownButton} ${className === "first" ? styles.firstButton : ""}`;

  return (
    <div
       className={`${containerClassNames} ${className === "first" ? "DropDownContentorFirst" : ""}`}
  
      onMouseEnter={className === "first" ? handleMouseEnter : undefined}
      onMouseLeave={className === "first" ? handleMouseLeave : undefined}
     
    >
      <div className={`${styles[className]}`}
       onClick={handleClick}
      >
        <button className={buttonClassNames}>{title}</button>
        <div className={styles.DropDownContenetorSvg}>
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
