import React, { useState } from "react";
import "./Main.css";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const handleSendClick = () => {
    navigate("/SendFirst");
  };

  const handleTicketClick = () => {
    navigate("/TicketFirst");
  };

  const handleCalendarClick = () => {
    navigate("/MainCalendar");
  };

  const handleProductClick = () => {
    navigate("/ProductFirst");
  };
  return (
    <div className="App">
      <div style={{ height: "59px", display: "flex", alignItems: "center", justifyContent: "center" }}>하나은행</div>
      <div style={{ display: "flex" }}>
        <div className="atmBox" style={{ background: "#008485", marginLeft: "14px" }} onClick={handleSendClick}>
          송금
        </div>
        <div className="atmBox" style={{ background: "#AD9A5F", marginLeft: "8px" }} onClick={handleTicketClick}>
          번호표 발급
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div
          className="atmBox"
          style={{ background: "rgba(50, 130, 58, 0.95)", marginLeft: "14px" }}
          onClick={handleCalendarClick}
        >
          캘린더
        </div>
        <div className="atmBox" style={{ background: "#F88F15", marginLeft: "8px" }} onClick={handleProductClick}>
          상품
          <br />
          가입
        </div>
      </div>
      <div className="bottomBox">&lt; 이전 화면으로 돌아가기</div>
    </div>
  );
}

export default Main;
