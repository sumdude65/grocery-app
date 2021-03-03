import React, { useState, useEffect } from "react";
import { Button } from "./components/button component/index";
import { bankOne, bankTwo } from "./components/Data/data";
import { Slider } from "./components/slider component/index";
import { PowerSwitch } from "./components/switch component/index";
import "./style.scss";

export const App = () => {
  // handles power state
  const [power, setPower] = useState(true);
  // handles data bank
  const [data, setData] = useState(bankOne);
  //handles display
  const [display, setDisplay] = useState("");

  //changes display
  const changeDisplay = (i) => {
    setDisplay(i);
  };

  //handes power
  const togglePower = () => {
    setPower(!power);
  };
  //handle switch between audiobanks
  const handleClick = () => {
    data === bankOne ? setData(bankTwo) : setData(bankOne);
  };
  //handle keyboard events
  const handleEvent = (e) => {
    if (power) {
      const doc = document.querySelector(`audio[data-set="${e.keyCode}"]`);
      if (!doc) {
        return;
      } else {
        const text = doc.id;
        const doc2 = document.querySelector(`button[id="${e.keyCode}"]`);
        doc.currentTime = 0;
        doc.play();
        //add playing class to doc2
        doc2.classList.add("playing");
        setDisplay(text);
      }
    } else {
      return;
    }
  };
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDisplay(null);
    }, 3500);
    document.addEventListener("keydown", handleEvent);
    const playingTimeOut = setInterval(() => {
      const playing = document.querySelector(`button[class='playing']`);
      if (playing) {
        playing.classList.remove("playing");
      }
    }, 200);

    return () => {
      clearTimeout(timeOutId);
      clearInterval(playingTimeOut);
    };
  });

  const handleChange = (i) => {
    setDisplay(i * 100);
  };
  return (
    <div className="drum" id="drum-machine">
      <div className="left">
        {data.map((obj, idx) => {
          return (
            <Button
              key={idx}
              power={power}
              url={obj.url}
              id={obj.id}
              keyTrigger={obj.keyTrigger}
              keyCode={obj.keyCode}
              display={() => changeDisplay(obj.id)}
            />
          );
        })}
      </div>
      <div className="right">
        <PowerSwitch
          id="Power"
          power={power}
          handleClick={() => togglePower()}
        />
        <Slider handleChange={handleChange} />
        <div id="display" className="display">
          <h2>{display}</h2>
        </div>
        <PowerSwitch id="Bank" power={data} handleClick={() => handleClick()} />
      </div>
    </div>
  );
};
