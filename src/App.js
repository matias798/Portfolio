import React, { useState } from "react";
import { Provider } from "react-redux";
import Loader from "react-loader-spinner"; // spinner package

// local styles
import "./styles/Loader.css";

// bootstrap js
import "bootstrap/dist/js/bootstrap.min.js";

// Store
import store from "./Data/Store";

// Components
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  /* State for changing the loading component from true to false */
  const [isLoading, setIsLoading] = useState(true);

  /* function changes state of loading */
  setTimeout(function () {
    setIsLoading(false);
  }, 1000);

  /* if loading is true we get the losading component */
  if (isLoading)
    return (
      <div id="Loader">
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      </div>
    );

  /* If component is false it renders the following components*/
  return (
    <Provider store={store}>
      <Header />
      <Portfolio />
      <AboutMe />
      <Skills />
      <Contact />
    </Provider>
  );
}

export default App;
