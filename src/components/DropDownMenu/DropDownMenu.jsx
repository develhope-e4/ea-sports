import { useState } from "react";
import "./DropDownMenu.scss";
import { FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
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
    <div className="DropDownMenu">
      <div className={className}>
        <ul>
          {data2 && className === "first" && <h3>Explorar juegos</h3>}
          {data2 && className === "second" && (
            <div className="dropDownMenuButtonHamburguer">
              {" "}
              <button onClick={handleClick}>
                Explorar juegos{" "}
              </button> <FiX />{" "}
            </div>
          )}

          {(className === "first") | (className === "second") && (
            <div className="DropDownMenuMenu">
              {data.map((data, index) => (
                <div>
                  <li key={index}>
                    <NavLink to={data.url}>{data.text}</NavLink>
                  </li>
                  <div className="separator"></div>
                </div>
              ))}
            </div>
          )}

          {className === "second" && data2 && isDropdownVisible === true && (
            <div>
              {data.map((data, index) => (
                <div>
                  <li key={index}>
                    <a href={data.url}>{data.text}</a>
                  </li>
                  <div className="separator"></div>
                </div>
              ))}
            </div>
          )}
        </ul>

        {data2 && className === "first" && (
          <ul>
            <h3>Plataformas</h3>
            {data2.map((data, index) => (
              <li key={index}>
                <a href={data.url}>{data.text}</a>
              </li>
            ))}
          </ul>
        )}

        {data2 && className === "second" && (
          <ul>
            {data2 && className === "second" && (
              <div className="dropDownMenuButtonHamburguer">
                {" "}
                <button onClick={handleClickSecond}> Plataformas</button>{" "}
                <FiX />
              </div>
            )}

            {className === "second" && isDropdownVisibleSecond === true && (
              <div>
                {data2.map((data, index) => (
                  <div>
                    <li key={index}>
                      <a href={data.url}>{data.text}</a>
                    </li>
                    <div className="separator"></div>
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
