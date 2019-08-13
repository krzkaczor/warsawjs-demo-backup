import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
