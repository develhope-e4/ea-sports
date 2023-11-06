
import classes from "./Container.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);
const Container = ({ children, isCentered }) => {
  const className = cx({
    baseContainer: true,
    centered: isCentered,
    start: !isCentered,
  });
  return <div className={className}>{children}</div>;
};

export default Container;
