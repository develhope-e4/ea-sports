
import classes from "./Container.module.scss";
import classNames from "classnames";
const Container = ({ children, isCentered }) => {
  const className = classNames({
    "base-container": true,
    centered: isCentered,
    start: !isCentered,
  });
  return <div className={className}>{children}</div>;
};

export default Container;
