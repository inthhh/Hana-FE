import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanagirl from "../../imgs/hanaGirl.png";
import Hanaboy from "../../imgs/hanaBoy.png";
import "./product_style.css";

function Product5() {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState("");

  const handleToBefore = () => {
    navigate("/ProductSecond");
  };
  const handleToAfter = () => {
    setSelectedClass("selected");
    navigate("/Product7");
  };
  return (
    <div>
      <div style={{ paddingTop: "50px", fontSize: "35px" }}>연금을 받는 것에</div>
      <div style={{ paddingTop: "10px", fontSize: "35px", marginBottom: "30px" }}>도움이 될 수 있는</div>
      <div style={{ paddingTop: "10px", fontSize: "35px", marginBottom: "30px" }}> 상품을 추천해드릴게요.</div>

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

export default Product5;
