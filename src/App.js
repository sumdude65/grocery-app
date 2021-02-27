import React, { useState } from "react";
import "./style.scss";
import { text } from "./text";
const marked = require("marked");
marked.setOptions({
  breaks: true,
});

export const App = () => {
  const [value, setValue] = useState(text);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const markedup = () => {
    return {
      __html: marked(value),
    };
  };
  return (
    <div className="app">
      <div id="EDITOR" className="editor">
        <h1>Editor</h1>
        <textarea
          name="text"
          id=""
          cols="40"
          rows="20"
          value={value}
          onChange={handleChange}
          id="editor"
        ></textarea>
      </div>
      <div className="preview">
        <h1 className="h1">Preview</h1>
        <div id="preview" dangerouslySetInnerHTML={markedup()}></div>
      </div>
      <footer>
        Made with love by
        <a href="https://twitter.com/imadeosaretin_"> Imade Osaretin Frank</a>
      </footer>
    </div>
  );
};
