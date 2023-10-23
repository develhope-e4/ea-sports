
import classes from "./Section.module.scss";
import classNames from "classnames";

const Section = ({ children, imageUrl, backgroundColor }) => {
  const className = classNames({
    section: true,
    withImage: imageUrl && true,
  });
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundColor: `${backgroundColor}`,
      }}
    >
      {children}
    </div>
  );
};

export default Section;
