import React from "react";
import logo from "./logo.svg";
import "./App.css";
import STT from "./STT";
import TTS from "./TTS";

function App() {
  return (
    <div style={{ width: "100%", height: "100%", background: "gray" }}>
      <div className="App">
        <STT />
        <TTS />
      </div>
    </div>
  );
}

export default App;
