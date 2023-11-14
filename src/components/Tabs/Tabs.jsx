 
import classes from "./Tabs.module.scss";
import cardData from "../../data/CardData.mock";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);



const Tabs = ({ tabNames, handleTabClick, activeTab }) => {
  const tabs = cx({
  tab: true,
  active : activeTab,
  })
  return (
    <div className={classes.tabs}>
      {Object.keys(cardData).map((tab, index) => (
        <div
          key={index}
          className={tabs}
          onClick={() => handleTabClick(tab)}
        >
          {tabNames[tab]} 
        </div>
      ))}
    </div>
  );
};

export default Tabs;
