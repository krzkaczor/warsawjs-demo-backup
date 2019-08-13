import React from "react";

import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="app-logo"/>

        <p>Hello WarsawJS!</p>

        <button onClick={onClickHandler}>Click me!</button>
      </header>
    </div>
  );
}

function onClickHandler() {
  alert("warsaw js!");
}

export default App;
