import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import STT from "./STT";
import TTS from "./TTS";
import Calendar from "./Calendar";

function App() {
  const [currentMonth, setCurrentMonth] = useState(9); // 기본값: 10월 (0부터 시작)

  const handleChangeMonth = (newMonth: number) => {
    setCurrentMonth(newMonth);
  };
  return (
    <div style={{ width: "100vw", height: "100vh", background: "gray", marginTop: "0px" }}>
      <div className="App">
        <div>
          <Calendar year={2023} month={currentMonth} onChangeMonth={handleChangeMonth} />
          <STT />
          <TTS />
        </div>
      </div>
    </div>
  );
}

export default App;
