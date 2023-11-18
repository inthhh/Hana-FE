import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";

function SendSecond() {
  const navigate = useNavigate();
  const handleToBefore = () => {
    navigate("/SendFirst");
  };
  const handleToAfter = () => {
    navigate("/SendFinal");
  };
  return (
    <div>
      <div>금액을 선택해주세요.</div>
      <div>얼마를 보낼까요?</div>
      <div className="buttonContainer">
        <div className="beforebtn" onClick={handleToBefore}>
          &lt; 이전
        </div>
        <div className="afterbtn" onClick={handleToAfter}>
          보내기 &gt;
        </div>
      </div>
    </div>
  );
}

export default SendSecond;
