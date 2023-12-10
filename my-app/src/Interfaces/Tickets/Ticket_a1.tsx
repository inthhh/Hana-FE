import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanagirl from "../../imgs/hanaGirl.png";

function Ticket_a1() {
  const navigate = useNavigate();
  const handleToBefore = () => {
    navigate("/Ticket1");
  };
  const handleToAfter = () => {
    navigate("/Ticket_a2");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div>
        원하시는 지점을
        <br />
        입력해주세요
      </div>
      <input />
      <img src={Hanagirl} width={"180px"} />
      <div className="buttonContainer">
        <div className="beforebtn" onClick={handleToBefore}>
          &lt; 이전
        </div>
        <div className="afterbtn" onClick={handleToAfter}>
          다음 &gt;
        </div>
      </div>
    </div>
  );
}

export default Ticket_a1;
