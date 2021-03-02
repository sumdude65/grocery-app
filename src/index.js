import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
import { App } from "./App";

const CalculatorApp = () => {
  return (
    <main className="bg">
      <App />
      <Footer />
    </main>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      Coded by{" "}
      <a href="https://twitter.com/imadeosaretin_">Imade Osaretin Frank</a>
    </div>
  );
};
ReactDOM.render(<CalculatorApp />, document.getElementById("root"));
