 
import { menuCardDestacadaData } from "../../data/MenuCardDestacada.mock";
import { MdClose } from "react-icons/md";
import CardDestacada from "../CardDestacada/CardDestacada";
import classes from "./Menu.module.scss";
const Menu = ({ menuOpen, handleMenuClose, handleMenuItemClick }) => {
  return (
    <>
      <nav className={classes.menu + menuOpen ? open : ""}>
        <div className="menu-header">
          <div className={classes.closeMenu} onClick={handleMenuClose}>
            <MdClose />
            <p onClick={handleMenuItemClick}>
              <a href="google.com" className={classes.menuLink}>
                Todos los juegos
              </a>
            </p>
          </div>
        </div>

        <div className={classes.sectionMenu}>
          {menuCardDestacadaData &&
            menuCardDestacadaData.map((card, index) => (
              <CardDestacada
                key={index}
                url="http://google.com"
                backgroundImage={card.bg}
                gameLogo={card.logo}
                className={index === 0 ? classes.firstImage : classes.otherImages}
                showText={false}
              />
            ))}
        </div>
      </nav>
      <div
        className={classes.menuOverlay + menuOpen ? classes.menuOverlayVisible : ""}
        onClick={handleMenuClose}
      />
    </>
  );
};

export default Menu;
