import classes from './BasePage.module.scss'
const BasePage = ({ children }) => {
  return <div className={classes.basePage}>{children}</div>;
};

export default BasePage;
