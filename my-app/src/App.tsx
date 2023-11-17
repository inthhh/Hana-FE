import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import STT from "./STT";
import TTS from "./TTS";
import Calendar from "./Calendar";
import Main from "./Interfaces/Main";

function App() {
  const [currentYear, setCurrentYear] = useState(2023);
  const [currentMonth, setCurrentMonth] = useState(9); // + 1 (default)

  const handleChangeMonth = (newYear: number, newMonth: number) => {
    setCurrentYear(newYear);
    setCurrentMonth(newMonth);
  };
  return (
    <div style={{ width: "100vw", height: "100vh", background: "gray", marginTop: "0px" }}>
      <div className="App">
        {/* <Calendar year={currentYear} month={currentMonth} onChangeMonth={handleChangeMonth} /> */}
        {/* <STT />
        <TTS /> */}
        <Main />
      </div>
    </div>
  );
}

export default App;
