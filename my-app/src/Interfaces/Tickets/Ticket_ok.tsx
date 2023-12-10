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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "35px" }}>
      <div className="ticketTop">
        <p style={{ color: "#008485" }}>발급</p>되었습니다!
      </div>
      <div>예상 대기시간</div>
      <div className="greenfont">9분 59초</div>
      <div className="greenline"></div>
      <div>번호표</div>
      <div className="greenfont">7번</div>
      <div className="greenline"></div>
      <div>재등록 가능 횟수</div>
      <div className="greenfont" style={{ color: "black", display: "flex", alignItems: "center" }}>
        (<p style={{ color: "#008485" }}>1</p>회 / 3회)
      </div>
      <div className="greenline"></div>

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
