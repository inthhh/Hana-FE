import React, { useState } from "react";
import "../Main.css";
import HanaGirl from "../../imgs/효녀하나.png";
import { useNavigate } from "react-router-dom";

function SendFinal() {
  const navigate = useNavigate();
  const handleToAfter = () => {
    navigate("/");
  };
  return (
    <div>
      <div>송금을 완료했어요.</div>
      <img src={HanaGirl} style={{ width: "200px" }} />
      <div>
        OOO님에게
        <br />
        OOO원 보내기 완료
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
