import React from "react";
import "./Section.scss";
import classNames from "classnames";

const Section = ({ children, imageUrl }) => {
  const className = classNames({
    section: true,
    withImage: imageUrl && true,
  });
  return (
    <div className={className} style={{ backgroundImage: `url(${imageUrl})` }}>
      {children}
    </div>
  );
};

export default Section;
