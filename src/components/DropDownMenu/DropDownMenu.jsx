import { useState } from "react";
import styles from "./DropDownMenu.module.scss";
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


  
  let containerClassName = "";
  if (className === 'first') {
    containerClassName += ` ${styles.first} first`;
  } else if (className === 'second') {
    containerClassName += ` ${styles.second} second`;
  }

  return (
    <div className={styles.DropDownMenu} style={className === 'first' ? { height: '10px' } : {}}>
      <div className={containerClassName}>
        <ul>
          {data2 && className === "first" && <h3>Explorar juegos</h3>}
          {data2 && className === "second" && (
            <div className= {styles.dropDownMenuButtonHamburguer}>
              <div className={styles.dropDownMenuButtonHamburguerAction}>
                 
               
        
              <button onClick={handleClick}>
                Explorar juegos
              </button> <FiX /> </div>
            </div>
          )}

          {(className === "first") | (className === "second") && (
            <div className={styles.DropDownMenuMenu}>
              {data.map((data, index) => (
                <li>
                  <div key={index}>
                    <a href={data.url}>{data.text}</a>
                  </div>
                  <div className={styles.separator}></div>
                </li>
              ))}
            </div>
          )}

          {className === "second" && data2 && isDropdownVisible === true && (
            <div>
              {data.map((data, index) => (
                <li>
                  <div key={index}>
                    <a href={data.url}>{data.text}</a>
                  </div>
                  <div className={styles.separator}></div>
                </li>
              ))}
            </div>
          )}
        </ul>

        {data2 && className === "first" && (
          <ul>
            <h3>Plataformas</h3>
            <div className={styles.DropDownMenuMenu}>
            {data2.map((data, index) => (
              <li key={index} >
                <a href={data.url}>{data.text}</a>
              </li>
            ))}
            </div>
          </ul>
        )}


        {data2 && className === "second" && (
          <ul>
            {data2 && className === "second" && (
              <div className={styles.dropDownMenuButtonHamburguer}>
                <div className={styles.dropDownMenuButtonHamburguerAction}>
                  <button onClick={handleClickSecond}> Plataformas</button>
                  <FiX />
                </div>

              </div>
            )}

            {className === "second" && isDropdownVisibleSecond === true && (
              <div >
                {data2.map((data, index) => (
                  <li>
                    <div key={index}>
                      <a href={data.url}>{data.text}</a>
                    </div>
                    <div className={styles.separator}></div>
                  </li>
                ))}
              </div>
            )}
          </ul>
        )}
      </div>{" "}
      {/* div principal*/}
    </div> /* div principal*/
  );
};

export default DropDownMenu;
