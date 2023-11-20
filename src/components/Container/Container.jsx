import "./Container.module.scss";
import classNames from "classnames";
const Container = ({ children, isCentered, paddingLG, paddingMD }) => {
  const className = classNames({
    "base-container": true,
    centered: isCentered,
    start: !isCentered,
    paddingLG: paddingLG,
    paddingMD: paddingMD,
  });
  return <div className={className}>{children}</div>;
};

export default Container;
