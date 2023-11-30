import classes from "./Container.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Container = ({ children, isCentered, paddingLG, paddingMD, subscription }) => {
  const className = cx({
    baseContainer: true,
    centered: isCentered,
    start: !isCentered,
    paddingLG: paddingLG,
    paddingMD: paddingMD,
    subscriptionAlignItems: subscription
  });
  return <div className={className}>{children}</div>;
};

export default Container;
