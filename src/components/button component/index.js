import React from "react";
import "./style.scss";

export const Button = (props) => {
  const handleClick = () => {
    if (props.power === true) {
      const doc = document.querySelector(`audio[data-set="${props.keyCode}"]`);
      const doc2 = document.querySelector(`button[id="${props.keyCode}"]`);
      doc.currentTime = 0;
      doc.play();
      //add playing class to doc 2
      doc2.classList.add("playing");
      props.display();
    } else {
      return;
    }
  };
  return (
    <button onClick={() => handleClick()} id={props.keyCode}>
      {props.keyTrigger}
      <audio
        className="clip"
        data-set={props.keyCode}
        id={props.id}
        src={props.url}
      ></audio>
    </button>
  );
};
