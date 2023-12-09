import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";

function Ticket_ok() {
  const navigate = useNavigate();
  const handleToBefore = () => {
    navigate("/");
  };
  const handleToAfter = () => {
    navigate("/Ticket1");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* <div className="buttonContainer">
        <div className="beforebtn" onClick={handleToBefore}>
          &lt; 이전
        </div>
        <div className="afterbtn" onClick={handleToAfter}>
          다음 &gt;
        </div>
      </div> */}
    </div>
  );
}

export default Ticket_ok;
