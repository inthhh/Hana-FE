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
      <div className="title" style={{ marginLeft: "20px" }}>
        하나은행
      </div>
      <div style={{ display: "flex" }}>
        <div className="atmBox" style={{ background: "#3F7E76", marginLeft: "14px" }} onClick={handleSendClick}>
          돈 보내기
        </div>
        <div className="atmBox" style={{ background: "#529793", marginLeft: "8px" }} onClick={handleTicketClick}>
          번호표 발급
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="atmBox" style={{ background: "#58AAAA", marginLeft: "14px" }} onClick={handleCalendarClick}>
          캘린더
        </div>
        <div className="atmBox" style={{ background: "#7DBABA", marginLeft: "8px" }} onClick={handleProductClick}>
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
