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
      </div>
    </div>
  );
};

export default DropDownMenu;
