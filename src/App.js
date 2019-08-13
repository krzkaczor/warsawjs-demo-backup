import React from "react";
import { upperCase } from "lodash";

import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello WarsawJS!</p>
        
        <button onClick={onClickHandler}>Click me!</button>
      </header>
    </div>
  );
}

function onClickHandler() {
  alert(upperCase("warsaw js!"));
}

export default App;
