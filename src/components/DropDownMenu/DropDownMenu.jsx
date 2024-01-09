import { useState } from "react";
import styles from "./DropDownMenu.module.scss";
import { FiX } from "react-icons/fi";
import { useLanguage } from '../../components/LanguageContext/LanguageContext'; 
import enUK from '../../data/Translate/en.mock'; 
import it from '../../data/Translate/it.mock'; 
import es from '../../data/Translate/es.mock'; 

const DropDownMenu = ({ data, data2, className }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const [isDropdownVisibleSecond, setDropdownVisibleSecond] = useState(false);

  const handleClickSecond = () => {
    setDropdownVisibleSecond(!isDropdownVisibleSecond);
  };

  const { language } = useLanguage();

  let translations;
  switch (language) {
    case "United Kingdoms":
      translations = enUK;
      break;
    case "Italia":
      translations = it;
      break;
    case "España":
    default:
      translations = es;
  }

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
          {data2 && className === "first" && <h3>{translations.explorarJuegosTitle}</h3>}
          {data2 && className === "second" && (
            <div className={styles.dropDownMenuButtonHamburguer}>
              <div className={styles.dropDownMenuButtonHamburguerAction}>
                <button onClick={handleClick}>
                  {translations.explorarJuegosTitle}
                </button> <FiX /> </div>
            </div>
          )}

          {(className === "first" || className === "second") && (
            <div className={styles.DropDownMenuMenu}>
              {data.map((data, index) => (
                <li key={index}>
                  <div>
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
                <li key={index}>
                  <div>
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
            <h3>{translations.plataformastitle}</h3>
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
                  <button onClick={handleClickSecond}> {translations.plataformastitle}</button>
                  <FiX />
                </div>
              </div>
            )}

            {className === "second" && isDropdownVisibleSecond === true && (
              <div>
                {data2.map((data, index) => (
                  <li key={index}>
                    <div>
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
