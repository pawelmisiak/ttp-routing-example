import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Users />
        <Contact />
      </header>
    </div>
  );
}

export default App;
