import "./Tag.css";
import React from "react";

export const Tag = ({ type }) => {
  return (
    <div className={"tag__container--common"} style={{ backgroundColor: `var(--pokemon__type--${type}` }}>
      <article className="tag__name">{type}</article>
    </div>
  );
};
