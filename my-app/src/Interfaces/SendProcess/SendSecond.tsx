import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "../../redux/store"; // setOption import 추가

function SendSecond() {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const selectedOption = useSelector((state: any) => state.selectedOption);
  const navigate = useNavigate();
  const handleToBefore = () => {
    navigate("/SendFirst");
  };
  const handleToAfter = () => {
    if (selectedOption === "전화번호") navigate("/Send1_1");
    else navigate("/Send2_1");
  };
  const handleAccountClick = (account: any) => {
    setSelectedAccount(account);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div>[{selectedOption}로 송금하기]</div>
      <div style={{ padding: "5px", fontWeight: "bold" }}>나의 전체계좌</div>
      <div>내 계좌 : 3개 </div>
      <div
        className={`send-box ${selectedAccount === 1 ? "selected" : ""}`}
        style={{ height: "150px", marginBottom: "10px" }}
        onClick={() => handleAccountClick(1)}
      >
        입출금
        <br />
        000-000000-00000
        <br />
        잔액 : 100,000,000원
      </div>
      <div
        className={`send-box ${selectedAccount === 2 ? "selected" : ""}`}
        style={{ height: "150px", marginBottom: "10px" }}
        onClick={() => handleAccountClick(2)}
      >
        입출금
        <br />
        000-000000-00000
        <br />
        잔액 : 100,000,000원
      </div>
      <div
        className={`send-box ${selectedAccount === 3 ? "selected" : ""}`}
        style={{ height: "150px", marginBottom: "10px" }}
        onClick={() => handleAccountClick(3)}
      >
        입출금
        <br />
        000-000000-00000
        <br />
        잔액 : 100,000,000원
      </div>
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
