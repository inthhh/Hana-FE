import React, { useState } from "react";
import "../Main.css";
import HanaGirl from "../../imgs/hanaGirl.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function SendFinal() {
  const navigate = useNavigate();
  const handleToAfter = () => {
    navigate("/");
  };

  const money = useSelector((state: any) => state.money);
  const receiveAccount = useSelector((state: any) => state.receiveAccount);
  const receiver = useSelector((state: any) => state.receiver);

  return (
    <div>
      <div className="sub-title">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80px",
            width: "390px",
            background: "rgba(0, 132, 133, 0.10)",
          }}
        >
          송금을 완료했어요.
        </div>
      </div>
      <img src={HanaGirl} style={{ width: "200px" }} />
      <div style={{ fontSize: "30px", fontWeight: "500", marginTop: "20px" }}>
        <span style={{ fontWeight: "bold" }}>{receiver}</span>
        님에게 <br />
        <span style={{ fontWeight: "bold" }}>{money}원</span>
        <br />
        보내기 완료
      </div>
      <div className="buttonContainer">
        <div className="afterbtn" onClick={handleToAfter} style={{ width: "100%" }}>
          홈으로 &gt;
        </div>
      </div>
    </div>
  );
}

export default SendFinal;
