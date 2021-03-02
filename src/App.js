import React, { useState } from "react";
import "./style.scss";
// import mathjs library
import { create, all } from "mathjs";
const config = {};

const math = create(all, config);

export const App = () => {
  const [display, setDisplay] = useState("");
  //allows me to keep track of the current number being entered
  const [number, setNumber] = useState("");

  //handles button presses
  const handleClick = (i) => {
    const displayCopy = display.toString().slice();
    // checks for multiple periods(.) in thesame number and prevents it
    if (number.indexOf(".") > -1) {
      let dotRef = number.concat(i).indexOf(".");
      let nextDot = number.concat(i).lastIndexOf(".");
      if (nextDot !== dotRef) {
        return;
      }
    }
    //checks if an operand has been entered into the display and resets number state
    if (
      number.concat(i).indexOf("+") > -1 ||
      number.concat(i).indexOf("-") > -1 ||
      number.concat(i).indexOf("*") > -1 ||
      number.concat(i).indexOf("/") > -1
    ) {
      setNumber("");
    } else {
      setNumber(number.concat(i));
    }
    //tests for consecutive periods
    const regex = /\.\./g;

    //checks for invalid math sign placement like */ etc
    const regex2 = /\+\+|\+\/|\+\*|-\/|-\*|-\+|\*\/|\/\*/g;
    if (regex.test(displayCopy.concat(i))) {
      return;
    }
    if (regex2.test(displayCopy.concat(i))) {
      return;
    }

    //prevents a number starting with multiple zeroes
    if (displayCopy === "0" && i === 0) {
      return;
    }
    //changes the 0 to the input number when a new calculation is started
    if (displayCopy === "0" && i !== 0) {
      setDisplay(i.toString());
      return;
    }

    setDisplay(displayCopy.concat(i));
  };

  // handles calculation
  const handleSubmit = () => {
    const displayCopy = display.slice();
    setDisplay(math.evaluate(displayCopy).toString());
    setNumber("");
  };
  //resets entire calculator
  const handleClear = () => {
    setDisplay("0");
    setNumber("");
  };
  return (
    <div className="calculator">
      <Display id="display" display={display} />
      <div className="row">
        <Button id="clear" value="AC" handleClick={() => handleClear()} />
        <Button id="divide" value="/" handleClick={() => handleClick("/")} />
      </div>
      <div className="row">
        <Button id="seven" value="7" handleClick={() => handleClick(7)} />
        <Button id="eight" value="8" handleClick={() => handleClick(8)} />
        <Button id="nine" value="9" handleClick={() => handleClick(9)} />
        <Button id="multiply" value="*" handleClick={() => handleClick("*")} />
      </div>
      <div className="row">
        <Button id="four" value="4" handleClick={() => handleClick(4)} />
        <Button id="five" value="5" handleClick={() => handleClick(5)} />
        <Button id="six" value="6" handleClick={() => handleClick(6)} />
        <Button id="subtract" value="-" handleClick={() => handleClick("-")} />
      </div>

      <div className="row">
        <Button id="one" value="1" handleClick={() => handleClick(1)} />
        <Button id="two" value="2" handleClick={() => handleClick(2)} />
        <Button id="three" value="3" handleClick={() => handleClick(3)} />
        <Button id="add" value="+" handleClick={() => handleClick("+")} />
      </div>
      <div className="row">
        <Button id="zero" value="0" handleClick={() => handleClick(0)} />
        <Button id="decimal" value="." handleClick={() => handleClick(".")} />
        <Button id="equals" value="=" handleClick={() => handleSubmit()} />
      </div>
    </div>
  );
};

const Display = (props) => {
  return (
    <div id={props.id} className="display">
      <h1>{props.display}</h1>
    </div>
  );
};

const Button = (props) => {
  const value = props.value;

  return (
    <button id={props.id} onClick={() => props.handleClick()}>
      {value}
    </button>
  );
};
