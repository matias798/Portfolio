import React from "react";
// local styles
import "./index.css";

// Components

import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Header from "./components/Header";

// bootstrap js
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
