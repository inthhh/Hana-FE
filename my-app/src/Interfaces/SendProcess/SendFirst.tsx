import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";

function SendFirst() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const handleToBefore = () => {
    navigate("/");
  };
  const handleToAfter = () => {
    if (selectedOption) {
      // 선택된 옵션이 있을 때만 다음 페이지로 이동
      navigate("/SendSecond");
    } else {
      // 선택된 옵션이 없으면 경고 메시지 또는 다른 처리를 수행
      alert("돈 보내실 방법을 선택해주세요.");
    }
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="title">돈 보내실 방법을 선택해주세요.</div>
      <div
        className={`send-box ${selectedOption === "전화번호" ? "selected" : ""}`}
        onClick={() => handleOptionClick("전화번호")}
      >
        전화번호로 돈 보내기
      </div>
      <div
        className={`send-box ${selectedOption === "계좌번호" ? "selected" : ""}`}
        onClick={() => handleOptionClick("계좌번호")}
      >
        계좌번호로 돈 보내기
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

export default SendFirst;
