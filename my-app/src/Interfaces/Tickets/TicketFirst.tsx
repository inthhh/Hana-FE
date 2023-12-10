import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";

function TicketFirst() {
  const navigate = useNavigate();
  const handleToBefore = () => {
    navigate("/");
  };
  const handleToAfter = () => {
    navigate("/Ticket1");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="title">번호표</div>
      <div style={{ display: "flex" }}>
        <div className="ticket-bigbox">
          <div>
            <div style={{ padding: "50px 0" }}>
              위치 사용을
              <br />
              허용하시겠습니까?
            </div>
            <div className="line-horizontal"></div>
            <div style={{ display: "flex" }}>
              <div className="before" onClick={handleToBefore}>
                아니오
              </div>
              <div className="line-vertical"></div>
              <div className="after" onClick={handleToAfter}>
                허용
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default TicketFirst;
