import React, { useState } from "react";
import "./App.css";
import STT from "./STT";
import TTS from "./TTS";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Interfaces/Main";
import SendFirst from "./Interfaces/SendProcess/SendFirst";
import SendSecond from "./Interfaces/SendProcess/SendSecond";
import SendFinal from "./Interfaces/SendProcess/SendFinal";
import MainCal from "./Interfaces/Calendars/MainCal";
import ProductFirst from "./Interfaces/Products/ProductFirst";
import TicketFirst from "./Interfaces/Tickets/TicketFirst";

function App() {
  return (
    <Router>
      <div style={{ width: "100vw", height: "100vh", background: "gray", marginTop: "0px" }}>
        <div className="App">
          {/* <STT />
        <TTS /> */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/SendFirst" element={<SendFirst />} />
            <Route path="/SendSecond" element={<SendSecond />} />
            <Route path="/SendFinal" element={<SendFinal />} />
            <Route path="/MainCalendar" element={<MainCal />} />
            <Route path="/ProductFirst" element={<ProductFirst />} />
            <Route path="/TicketFirst" element={<TicketFirst />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
