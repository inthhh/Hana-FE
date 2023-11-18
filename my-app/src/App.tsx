import React, { useState } from "react";
import "./App.css";
import STT from "./STT";
import TTS from "./TTS";
import Calendar from "./Calendar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Interfaces/Main";
import SendFirst from "./Interfaces/SendProcess/SendFirst";
import SendSecond from "./Interfaces/SendProcess/SendSecond";
import SendFinal from "./Interfaces/SendProcess/SendFinal";

function App() {
  const [currentYear, setCurrentYear] = useState(2023);
  const [currentMonth, setCurrentMonth] = useState(9); // + 1 (default)

  const handleChangeMonth = (newYear: number, newMonth: number) => {
    setCurrentYear(newYear);
    setCurrentMonth(newMonth);
  };
  return (
    <Router>
      <div style={{ width: "100vw", height: "100vh", background: "gray", marginTop: "0px" }}>
        <div className="App">
          {/* <Calendar year={currentYear} month={currentMonth} onChangeMonth={handleChangeMonth} /> */}
          {/* <STT />
        <TTS /> */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/SendFirst" element={<SendFirst />} />
            <Route path="/SendSecond" element={<SendSecond />} />
            <Route path="/SendFinal" element={<SendFinal />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
