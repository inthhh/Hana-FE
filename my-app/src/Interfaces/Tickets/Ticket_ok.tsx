import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";

function Ticket_ok() {
  const navigate = useNavigate();
  //   const handleToBefore = () => {
  //     navigate("/");
  //   };
  const handleToAfter = () => {
    navigate("/");
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div>발급되었습니다!</div>
      <div>예상 대기시간</div>
      <div>9분 59초</div>
      <div>번호표</div>
      <div>7번</div>
      <div>재등록 가능 횟수</div>
      <div>(1회 / 3회)</div>
      <div className="buttonContainer">
        {/* <div className="beforebtn" onClick={handleToBefore}>
          &lt; 이전
        </div> */}
        <div className="afterbtn" onClick={handleToAfter} style={{ width: "100%" }}>
          홈으로 &gt;
        </div>
      </div>
    </div>
  );
}

export default Ticket_ok;
