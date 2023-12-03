import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanagirl from "../../imgs/hanaGirl.png";
import Hanaboy from "../../imgs/hanaBoy.png";
import "./product_style.css";
import learn from "../../imgs/learn.png";

function Product7() {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState("");

  const handleToBefore = () => {
    navigate("/ProductSecond");
  };
  const handleToAfter = () => {
    setSelectedClass("selected");
    navigate("/Product8");
  };
  return (
    <div>
      <div style={{ paddingTop: "50px", fontSize: "35px" }}>선택하신 상품에 대한</div>
      <div style={{ paddingTop: "10px", fontSize: "35px" }}>자세한 설명을 문자로</div>
      <div style={{ paddingTop: "10px", fontSize: "35px", marginBottom: "30px" }}>받아보시겠어요?</div>
      <div style={{ display: "flex" }}>
        <div className="yesno">예</div>
        <div className="yesno">아니오</div>
      </div>
      <div className="greenbtn">
        <div>
          금융지식 더 배우기
          <img src={learn} width={"80px"} style={{ marginTop: "10px" }} />
        </div>
      </div>
      <div className="counseling" style={{ height: "100px" }}>
        상담원
        <br />
        전화 연결하기
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

export default Product7;
