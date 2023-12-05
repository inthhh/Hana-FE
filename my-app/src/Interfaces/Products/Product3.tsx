import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanagirl from "../../imgs/hanaGirl.png";
import Hanaboy from "../../imgs/hanaBoy.png";
import "./product_style.css";
import p1 from "../../imgs/p1.png";

function Product3() {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState("");

  const handleToBefore = () => {
    navigate("/ProductSecond");
  };
  const handleToAfter = () => {
    setSelectedClass("selected");
    navigate("/Product7");
  };

  const handleLink1 = () => {
    window.location.href = "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080103/1455930_115188.jsp";
  };
  const handleLink2 = () => {
    window.location.href = "https://m.hanacard.co.kr/MKCDCM1000M.web?CD_PD_SEQ=15864";
  };
  const handleLink3 = () => {
    window.location.href = "https://m.hanacard.co.kr/MKCDCM1000M.web?CD_PD_SEQ=15860";
  };
  return (
    <div>
      <div style={{ paddingTop: "50px", fontSize: "35px" }}>생활비 할인을</div>
      <div style={{ paddingTop: "10px", fontSize: "35px" }}>받을 수 있는 카드를</div>
      <div style={{ paddingTop: "10px", fontSize: "35px", marginBottom: "30px" }}>추천해드릴게요.</div>
      <img src={p1} width={"100px"} />
      <div className="products" onClick={handleLink1}>
        주거래하나통장
      </div>
      <div className="products" onClick={handleLink2}>
        원더 LIVING 카드
      </div>
      <div className="products" onClick={handleLink3}>
        원더카드 FREE
      </div>
      <div className="counseling">상담하기</div>
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

export default Product3;
