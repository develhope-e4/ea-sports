 
import classes from "./Tabs.module.scss";
import cardData from "../../data/CardData.mock";
const Tabs = ({ tabNames, handleTabClick, activeTab }) => {
  return (
    <div className={classes.tabs}>
      {Object.keys(cardData).map((tab, index) => (
        <div
          key={index}
          className={classes.tab + activeTab === tab ? classes.active : ""}
          onClick={() => handleTabClick(tab)}
        >
          {tabNames[tab]} {/* Utilizamos el nombre personalizado aquí */}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
