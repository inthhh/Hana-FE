import React from "react";
import logo from "./logo.svg";
import "./App.css";
import STT from "./STT";
import TTS from "./TTS";
import Calendar from "./Calendar";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "gray", marginTop: "0px" }}>
      <div className="App">
        <div>
          <Calendar year={2023} month={9} /> {/* 2023년 10월 */}
          <STT />
          <TTS />
        </div>
      </div>
    </div>
  );
}

export default App;
