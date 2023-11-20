import classes from "./Container.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(classes);

const Container = ({ children, isCentered, paddingLG, paddingMD }) => {
  const className = cx({
    "base-container": true,
    centered: isCentered,
    start: !isCentered,
    paddingLG: paddingLG,
    paddingMD: paddingMD,
  });
  return <div className={className}>{children}</div>;
};

export default Container;
