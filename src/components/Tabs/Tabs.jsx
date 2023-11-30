
import classes from "./Tabs.module.scss";
import cardData from "../../data/CardDataEs.mock";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

const Tabs = ({ tabNames, handleTabClick , activeTab, activeClass}) => {
  return (
    <div className={classes.tabs}>
      {Object.keys(cardData).map((tab, index) => {
        const tabs = cx({
          [classes.tab]: true,
          [classes.active]: tab === activeTab,
        });

        return (
          <div
            key={index}
            className={tabs}
            onClick={() => handleTabClick(tab)}
          >
            {tabNames[tab]}
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
