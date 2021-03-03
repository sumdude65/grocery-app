import React, { useState } from "react";

//power switch
export const PowerSwitch = (props) => {
  const [toggle, setToggle] = useState(true);
  const style = {
    transform: "translateX(100%)",
  };
  const chain = () => {
    props.handleClick();
    setToggle(!toggle);
  };
  return (
    <div className="container">
      <h1>{props.id}</h1>
      <div onClick={() => chain()} className="power">
        <span style={toggle === true ? style : {}}></span>
      </div>
    </div>
  );
};
