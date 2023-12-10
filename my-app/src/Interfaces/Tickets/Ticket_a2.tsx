import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanaboy from "../../imgs/hanaBoy.png";

function Ticket_a2() {
  const navigate = useNavigate();
  const handleToBefore = () => {
    navigate("/Ticket_a1");
  };
  const handleToAfter = () => {
    navigate("/Ticket_ok");
  };

  const handleToAnother = () => {
    navigate("/Ticket_a1");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div>
        선택하신 지점은
        <br />~ 입니다.
      </div>
      <div style={{ display: "flex" }}>
        <div className="ticket_yesno" onClick={handleToBefore}>
          아니오
        </div>
        <div className="ticket_yesno" onClick={handleToAfter}>
          예
        </div>
      </div>
      <img src={Hanaboy} width={"150px"} />
      <div className="buttonContainer">
        {/* <div className="beforebtn" onClick={handleToBefore}>
          &lt; 이전
        </div> */}
        <div className="afterbtn" onClick={handleToAnother} style={{ width: "100%" }}>
          다른 지점 선택하기
        </div>
      </div>
    </div>
  );
}

export default Ticket_a2;
