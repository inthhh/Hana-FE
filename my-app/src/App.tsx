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
import Send1_1 from "./Interfaces/SendProcess/Send1_1";
import Send1_2 from "./Interfaces/SendProcess/Send1_2";
import Send1_3 from "./Interfaces/SendProcess/Send1_3";
import Send2_1 from "./Interfaces/SendProcess/Send2_1";
import Send2_2 from "./Interfaces/SendProcess/Send2_2";
import Sendhowmuch from "./Interfaces/SendProcess/Sendhowmuch";
import Sendpwd from "./Interfaces/SendProcess/Sendpwd";

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
            <Route path="/Send1_1" element={<Send1_1 />} />
            <Route path="/Send1_2" element={<Send1_2 />} />
            <Route path="/Send1_3" element={<Send1_3 />} />
            <Route path="/Sendhowmuch" element={<Sendhowmuch />} />
            <Route path="/Sendpwd" element={<Sendpwd />} />
            <Route path="/Send2_1" element={<Send2_1 />} />
            <Route path="/Send2_2" element={<Send2_2 />} />
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
