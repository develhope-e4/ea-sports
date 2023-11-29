import classes from "./TabsGames.module.scss"
const TabsGames = ({ tabs, onTabChange, activeTab }) => {
  return (
    <div className={classes.tabsGames}>
      <div className={classes.tabsGames__list}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={tab.url === activeTab ? classes.tabsGames__itemActive : null}
            onClick={() => onTabChange(tab.url)}
          >
            <a href={tab.url}>{tab.text}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabsGames;
