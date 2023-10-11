 
import "./Tabs.scss";
import cardData from "../../data/CardData.mock";
const Tabs = ({ tabNames, handleTabClick, activeTab }) => {
  return (
    <div className="tabs">
      {Object.keys(cardData).map((tab, index) => (
        <div
          key={index}
          className={`tab ${activeTab === tab ? "active" : ""}`}
          onClick={() => handleTabClick(tab)}
        >
          {tabNames[tab]} {/* Utilizamos el nombre personalizado aquí */}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
