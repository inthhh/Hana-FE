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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="title">번호표</div>
      <div style={{ display: "flex" }}>
        <div className="ticket-bigbox">번호표</div>
        {/* <div style={{ marginLeft: "20px" }}>
          <div
            className="ticket-smallbox"
            style={{
              background: "rgba(50, 130, 58, 0.95)",
              marginBottom: "20px",
            }}
          >
            예금/적금
            <br />
            번호표
          </div>
          <div className="ticket-smallbox" style={{ background: "#B5B5B5", marginBottom: "20px" }}>
            대출/외환/투자
            <br />
            번호표
          </div>
          <div className="ticket-smallbox" style={{ background: "#AD9A5F", marginBottom: "20px" }}>
            화상 상담
            <br />
            번호표
          </div>
        </div> */}
      </div>

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
