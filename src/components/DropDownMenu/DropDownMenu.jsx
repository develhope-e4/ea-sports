import "./DropDownMenu.scss";
const DropDownMenu = ({ data, data2, className }) => {
  return (
    <div className="DropDownMenu">
      <div className={className}>



        <ul>
          {data2 && className === "first" && <h3>Explorar juegos</h3>}
          {data.map((data, index) => (
            <div>            <li key={index}>
              <a href={data.url}>{data.text}</a>

            </li>
            <div className="separator"></div>
            </div>


          ))}
        </ul>




        {data2 && className === "first" && (
          <ul>
            <h3>Plataformas</h3>
            {data2.map((data, index) => (
              <li key={index}>
                <a href={data.url}>{data.text}</a>
              </li>
            ))}

            {className === "second" && (




              <div>
                {data2.map((data, index) => (
                  <li key={index}>
                    <a href={data.url}>{data.text}</a>
                  </li>





                ))}
              </div>
            )}
          </ul>
        )}

        {data2 && className === classes.second && (
          <ul>
            {data2 && className === "second" && (
              <div className={styles.dropDownMenuButtonHamburguer}>
                <div className={styles.dropDownMenuButtonHamburguerAction}>
                  <button onClick={toggleSecondDropdown}> Plataformas</button>
                  <FiX />
                </div>
                <div className={styles.separatorsecond}></div>
              </div>
            )}

            {className === classes.second && isDropdownVisibleSecond === true && (
              <div>
                {data2.map((data, index) => (
                  <div>
                    <li key={index}>
                      <a href={data.url}>{data.text}</a>
                    </li>
                    <div className={styles.separator}></div>
                  </div>
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
