import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";

function TicketFirst() {
  const navigate = useNavigate();
  const handleToBefore = () => {
    navigate("/");
  };
  const handleToAfter = () => {
    navigate("/TicketSecond");
  };
  return (
    <div>
      <div>번호표</div>

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

export default TicketFirst;
