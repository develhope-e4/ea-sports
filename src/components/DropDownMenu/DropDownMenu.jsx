import { useState } from "react";
import classes from "./DropDownMenu.module.scss";
import { FiX } from "react-icons/fi";
const DropDownMenu = ({ data, data2, className }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const [isDropdownVisibleSecond, setDropdownVisibleSecond] = useState(false);

  const handleClickSecond = () => {
    setDropdownVisibleSecond(!isDropdownVisibleSecond);
  };

  return (
    <div className={classes.DropDownMenu}>
      <div className={className}>
        <ul>
          {data2 && className === classes.first && <h3>Explorar juegos</h3>}
          {data2 && className === classes.second && (
            <div className={classes.dropDownMenuButtonHamburguer}>
              {" "}
              <button onClick={handleClick}>
                Explorar juegos{" "}
              </button> <FiX />{" "}
            </div>
          )}

          {(className === classes.first) | (className === classes.second) && (
            <div className={classes.DropDownMenuMenu}>
              {data.map((data, index) => (
                <div>
                  <li key={index}>
                    <a href={data.url}>{data.text}</a>
                  </li>
                  <div className={classes.separator}></div>
                </div>
              ))}
            </div>
          )}

          {className === classes.second && data2 && isDropdownVisible === true && (
            <div>
              {data.map((data, index) => (
                <div>
                  <li key={index}>
                    <a href={data.url}>{data.text}</a>
                  </li>
                  <div className={classes.separator}></div>
                </div>
              ))}
            </div>
          )}
        </ul>

        {data2 && className === classes.first && (
          <ul>
            <h3>Plataformas</h3>
            {data2.map((data, index) => (
              <li key={index}>
                <a href={data.url}>{data.text}</a>
              </li>
            ))}
          </ul>
        )}

        {data2 && className === classes.second && (
          <ul>
            {data2 && className === classes.second && (
              <div className="dropDownMenuButtonHamburguer">
                {" "}
                <button onClick={handleClickSecond}> Plataformas</button>{" "}
                <FiX />
              </div>
            )}

            {className === classes.second && isDropdownVisibleSecond === true && (
              <div>
                {data2.map((data, index) => (
                  <div>
                    <li key={index}>
                      <a href={data.url}>{data.text}</a>
                    </li>
                    <div className={classes.separator}></div>
                  </div>
                ))}
              </div>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDownMenu;
