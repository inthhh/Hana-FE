import React, { useState } from "react";
import "./Main.css";
import "../App.css";
import { useNavigate } from "react-router-dom";
import Calendarimg from "../imgs/calendar_img.png";
import Productimg from "../imgs/product_img.png";
import Sendimg from "../imgs/send_img.png";
import Ticketimg from "../imgs/ticket_img.png";
import hanaicon from "../imgs/hana_icon.jpeg";
import STT from "../STT";

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
        <img src={hanaicon} width={"20px"} style={{ marginRight: "2px" }} />
        하나은행
        <STT />
      </div>
      <div style={{ display: "flex" }}>
        <div className="atmBox" style={{ background: "#3F7E76", marginLeft: "14px" }} onClick={handleSendClick}>
          <div>
            돈 보내기
            <img src={Sendimg} width={"80px"} style={{ marginTop: "10px" }} />
          </div>
        </div>
        <div className="atmBox" style={{ background: "#529793", marginLeft: "8px" }} onClick={handleTicketClick}>
          <div>
            번호표
            <br />
            발급
            <br />
            <img src={Ticketimg} width={"80px"} style={{ marginTop: "10px" }} />
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="atmBox" style={{ background: "#58AAAA", marginLeft: "14px" }} onClick={handleCalendarClick}>
          <div>
            캘린더
            <img src={Calendarimg} width={"80px"} style={{ marginTop: "10px" }} />
          </div>
        </div>
        <div className="atmBox" style={{ background: "#7DBABA", marginLeft: "8px" }} onClick={handleProductClick}>
          <div>
            상품
            <br />
            가입
            <br />
            <img src={Productimg} width={"80px"} style={{ marginTop: "10px" }} />
          </div>
        </div>
      </div>
      <div className="bottomBox">&lt; 이전 화면으로 돌아가기</div>
    </div>
  );
}

export default Main;
