import "./TabsGames.scss"
const TabsGames = ({ tabs, onTabChange, activeTab }) => {
  return (
    <div className="tabs-games">
      <div className="tabs-games__list">
        {tabs.map((tab, index) => (
          <div 
            key={index}
            className={tab.url === activeTab ? "tabs-games__item--active" : ""}
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
