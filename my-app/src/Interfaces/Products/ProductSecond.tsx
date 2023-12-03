import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanagirl from "../../imgs/hanaGirl.png";
import Hanaboy from "../../imgs/hanaBoy.png";
import "./product_style.css";

function ProductSecond() {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedItem, setSelectedItem] = useState(3);

  const handleToBefore = () => {
    navigate("/ProductFirst");
  };
  const handleToAfter = () => {
    setSelectedClass("selected");
    navigate(`/Product${selectedItem}`);
  };

  const handleBoxClick = (index: number) => {
    setSelectedItem(index + 3); // 클릭한 항목의 인덱스를 상태에 저장
    console.log(index + 3);
  };
  return (
    <div>
      <div style={{ paddingTop: "50px", fontSize: "35px" }}>관심있는 혜택을</div>
      <div style={{ paddingTop: "10px", fontSize: "35px", marginBottom: "30px" }}>선택해주세요</div>

      <div className="container">
        <div className={`box ${selectedItem === 0 ? "selected" : ""}`} onClick={() => handleBoxClick(0)}>
          생활비
          <br />
          할인
        </div>

        <div className={`box ${selectedItem === 1 ? "selected" : ""}`} onClick={() => handleBoxClick(1)}>
          목돈
          <br />
          만들기
        </div>
      </div>
      <div className="container">
        <div className={`box ${selectedItem === 2 ? "selected" : ""}`} onClick={() => handleBoxClick(2)}>
          연금
          <br />
          받기
        </div>

        <div className={`box ${selectedItem === 3 ? "selected" : ""}`} onClick={() => handleBoxClick(3)}>
          집<br />
          구매하기
        </div>
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

export default ProductSecond;
