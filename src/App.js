import React from "react";
import {Provider} from "react-redux";
// local styles
import "./index.css";
// Store
import store from "./Data/Store";

// Components

import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import RedirectToTop from "./components/RedirectToTop";

// bootstrap js
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Header />
      <Portfolio />
      <AboutMe />
      <Skills />
      <Contact />
      <RedirectToTop />
    </Provider>
  );
}

export default App;
