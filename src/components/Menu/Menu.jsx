import { menuCardDestacadaData } from "../../data/MenuCardDestacada.mock";
import { MdClose } from "react-icons/md";
import CardDestacada from "../CardDestacada/CardDestacada";
import classes from "../CardDestacada/CardDestacada.module.scss";
import classNames from "classnames/bind";

import { useLanguage } from '../../components/LanguageContext/LanguageContext';


import enUK from '../../data/Translate/en.mock';
import it from '../../data/Translate/it.mock';
import es from '../../data/Translate/es.mock';

const cx = classNames.bind(classes);
const Menu = ({ menuOpen, handleMenuClose, handleMenuItemClick }) => {
  const classNames = cx({
    menu: true,
    open: menuOpen,
  });

  const overlay = cx({
    menuOverlay: true,
    menuOverlayVisible: menuOpen,
  });


  const { language } = useLanguage(); 


  let translations;
  switch (language) {
    case "United Kingdoms":
      translations = enUK;
      break;
    case "Italia":
      translations = it;
      break;
    case "España":
    default:
      translations = es;
  }


  return (
    <>
      <nav className={classNames}>
        <div>
          <div className={classes.closeMenu} onClick={handleMenuClose}>
            <MdClose />
            <p onClick={handleMenuItemClick}>
              <a href="google.com" className={classes.menuLink}>
                {translations.todosLosJuegos}
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
                firstImg={
                  index === 0 ? true : false
                }
                otherimg={
                  index === 0  ? false : true
                }
                showText={false}
              />
            ))}
        </div>
      </nav>
      <div className={overlay} onClick={handleMenuClose} />
    </>
  );
};

export default Menu;
