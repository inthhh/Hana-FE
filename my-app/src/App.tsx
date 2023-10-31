import React from "react";
import logo from "./logo.svg";
import "./App.css";
import STT from "./STT";
import TTS from "./TTS";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "gray", marginTop: "0px" }}>
      <div className="App">
        <div>
          <STT />
          <TTS />
        </div>
      </div>
    </div>
  );
}

export default App;
