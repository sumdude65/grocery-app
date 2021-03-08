import Tour from "./img/toursite.png";
import Quote from "./img/quote-machine.png";
import Markdown from "./img/markdown.png";
import Calculator from "./img/calculator.png";

export const projects = [
  {
    title: "Random Quote Machine",
    img: Quote,
    description:
      "This is a pretty cool quote machine I built with React that fetches quotes from an api and displays a random one as well as a random color. I also implemented the abillty to tweet the current quote on screen.",
    tech: ["Reactjs", "HTML", "CSS", "Git"],
    live: "https://my-quote-machine-app.netlify.app/",
    source: "https://github.com/sumdude65/quote-machine",
  },
  {
    title: "Vacation Tour App",
    img: Tour,
    description:
      "A simple website built with React displaying available tours of various places offered by a tour agency, as well as listing the prices of each available tour. A user has the ability to click 'uninterested' on a tour to remove it from the list",
    tech: ["Reactjs", "HTML", "CSS"],
    live: "https://mytoursite.netlify.app/",
    source: "N/A",
  },
  {
    title: "JavaScript Calculator",
    img: Calculator,
    description:
      "A simple Javascript calculator built with React, allows a user to perform basic mathematical operations.Implementing features like memory and ability to chain operators and have the calculations be performed in correct mathematial order",
    tech: ["Reactjs", "HTML", "CSS", "Git"],
    live: "https://javascript-calculator-10.netlify.app/",
    source: "https://github.com/sumdude65/javascript-calculator",
  },
  {
    title: "Markdown Previewer",
    img: Markdown,
    description:
      "A markdown previewer similar to one you would find on Github built with Reactjs, provides the user with an editor to write in and a previewer that automatically updates to a beautiful rendition of your markdown.",
    tech: ["Reactjs", "HTML", "CSS", "marked", "Git"],
    live: "https://markdown-previewer11.netlify.app/",
    source: "https://github.com/sumdude65/mark-down-previewer",
  },
];
