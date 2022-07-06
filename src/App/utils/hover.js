import React from "react";

const setHover = (status, caption = undefined) => {
  console.log(status, caption);
  if (status) return <div className="caption">{caption}</div>;
};

export default setHover;
