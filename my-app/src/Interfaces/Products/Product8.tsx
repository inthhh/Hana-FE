import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanagirl from "../../imgs/hanaGirl.png";
import Hanaboy from "../../imgs/hanaBoy.png";
import "./product_style.css";

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
      <div style={{ paddingTop: "50px", fontSize: "35px" }}>금융지식을</div>
      <div style={{ paddingTop: "10px", fontSize: "35px", marginBottom: "30px" }}>배우고 싶다면</div>

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
