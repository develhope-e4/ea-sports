
import classes from "./Section.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(classes);

const Section = ({ children, imageUrl, backgroundColor }) => {
  const className = cx({
    section: true,
    withImage: imageUrl && true,
  });
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundColor: `var(${backgroundColor})`,
      }}
    >
      {children}
    </div>
  );
};

export default Section;
