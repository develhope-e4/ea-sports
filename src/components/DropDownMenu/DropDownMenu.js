import React from "react";
import "./DropDownMenu.scss";
const DropDownMenu = ({ data, doble, h3, data2, h32 }) => {
  const className = doble ? "doble" : "simple";
  return (
    <div>
      <div className="DropDownMenuHole"></div>
      <div className="DropDownPadre">
        <div className="DropDownMenu">
          <div className={className}>
            <h3>{h3}</h3>
          </div>
          <ul>
            {data.map((data, index) => (
              <li key={index}>
                <a href={data.url}>{data.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={className}>
          <div className={className}>
            <h3>{h32}</h3>
          </div>
          <ul>
            {data2.map((data, index) => (
              <li key={index}>
                <a href={data.url}>{data.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDownMenu;

/* 

 <div className="DropDownMenu2">
        <div className={className}>
        <h3>{h32}</h3>
        <hr/>
        </div>
        <ul>
          {data2.map((data, index) => (
            <li key={index}>
              <a href={data.url}>{data.text}</a>
            </li>
          ))}
        </ul>
      </div>

*/
