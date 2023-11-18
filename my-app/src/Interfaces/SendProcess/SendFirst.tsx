import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";

function SendFirst() {
  const navigate = useNavigate();
  const handleToBefore = () => {
    navigate("/");
  };
  const handleToAfter = () => {
    navigate("/SendSecond");
  };
  return (
    <div>
      <div>누구에게 보낼까요?</div>
      <div>연락처에서 찾기</div>
      <div>대상과 은행을 확인해주세요</div>
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

export default SendFirst;
