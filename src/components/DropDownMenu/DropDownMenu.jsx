import classes from "./DropDownMenu.module.scss";
const DropDownMenu = ({ data, data2 }) => {
  return (
    <div className={classes.DropDownPadre}>
      <div className={classes.DropDownMenu}>
        <ul>
          {data2 && <h3>Explorar juegos</h3>}
          {data.map((data, index) => (
            <li key={index}>
              <a href={data.url}>{data.text}</a>
            </li>
          ))}
        </ul>
        {data2 && (
          <ul>
            <h3>Plataformas</h3>
            {data2.map((data, index) => (
              <li key={index}>
                <a href={data.url}>{data.text}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDownMenu;
