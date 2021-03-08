import React from "react";
import ReactDOM from "react-dom";
import { NavBar } from "./components/Navbar/index";
import { Home, ProjectList } from "./App";
import { About } from "./components/About me/index";
import { Footer } from "./App";

const App = () => {
  return (
    <main className="App">
      <NavBar />
      <Home />
      <About />
      <ProjectList />
      <Footer />
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
