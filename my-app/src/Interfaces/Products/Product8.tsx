import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanagirl from "../../imgs/hanaGirl.png";
import Hanaboy from "../../imgs/hanaBoy.png";
import "./product_style.css";
import learn from "../../imgs/learn.png";

function Product8() {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState("");

  const handleToBefore = () => {
    navigate("/Product7");
  };
  const handleToAfter = () => {
    setSelectedClass("selected");
    navigate("/");
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <img src={learn} width={"80px"} height={"80px"} style={{ margin: "auto 20px" }} alt="learn" />
        <div>
          <div style={{ paddingTop: "50px", fontSize: "35px" }}>금융지식을</div>
          <div style={{ paddingTop: "10px", fontSize: "35px", marginBottom: "30px" }}>배우고 싶다면</div>
        </div>
      </div>
      <div className="greenbtn" style={{ height: "100px" }}>
        광주에
        <br />
        거주하시나요?
      </div>
      <div className="greenbtn" style={{ height: "100px", background: "#EAEAEA", color: "black" }}>
        경제 용어 사전
      </div>
      <div className="greenbtn" style={{ height: "100px", background: "#EAEAEA", color: "black" }}>
        경제 카드 뉴스 보기
      </div>

      <div className="counseling">상담하기</div>

      <div className="buttonContainer">
        <div className="beforebtn" onClick={handleToBefore}>
          &lt; 이전
        </div>
        <div className="afterbtn" onClick={handleToAfter}>
          홈으로 &gt;
        </div>
      </div>
    </div>
  );
}

export default Product8;
