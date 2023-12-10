import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";

function Ticket1() {
  const navigate = useNavigate();
  const handleToBefore = () => {
    navigate("/");
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
        가장 가까운 지점은
        <br />
        여의도점 입니다.
      </div>
      <div>
        번호표를
        <br />
        발급하시겠습니까?
      </div>
      <div style={{ display: "flex" }}>
        <div className="ticket_yesno" onClick={handleToAfter}>
          예
        </div>
        <div className="ticket_yesno" onClick={handleToBefore}>
          아니오
        </div>
      </div>

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

export default Ticket1;
