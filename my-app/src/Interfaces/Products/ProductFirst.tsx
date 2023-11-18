import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";

function ProductFirst() {
  const navigate = useNavigate();
  const handleToBefore = () => {
    navigate("/");
  };
  const handleToAfter = () => {
    navigate("/ProductSecond");
  };
  return (
    <div>
      <div>안녕하세요 손자/손녀에요!</div>
      <div>할머니/할아버지의 목돈 마련을 위한 상품 가입을 도와 드릴게요!</div>
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

export default ProductFirst;
