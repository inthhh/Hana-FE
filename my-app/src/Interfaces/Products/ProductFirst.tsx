import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanagirl from "../../imgs/hanaGirl.png";
import Hanaboy from "../../imgs/hanaBoy.png";

function ProductFirst() {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState("");

  const handleToBefore = () => {
    navigate("/");
  };
  const handleToAfter = () => {
    setSelectedClass("selected");
    navigate("/ProductSecond");
  };
  return (
    <div>
      <div style={{ paddingTop: "40px", fontSize: "35px" }}>안녕하세요</div>
      <div style={{ paddingTop: "10px", fontSize: "35px", marginBottom: "30px" }}>손자/손녀에요!</div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src={Hanaboy} width={"120px"} height={"160px"} style={{ marginLeft: "10px" }} />
        <img src={Hanagirl} width={"170px"} height={"170px"} style={{ paddingTop: "10px" }} />
      </div>
      {/* <div>손님께 적합한 상품 가입을 도와드릴게요!</div> */}
      <div style={{ paddingTop: "20px", fontSize: "35px" }}>손님께 적합한</div>
      <div style={{ paddingTop: "10px", fontSize: "35px" }}>상품 가입을</div>
      <div style={{ paddingTop: "10px", fontSize: "35px", marginBottom: "30px" }}>도와드릴게요!</div>
      <div
        className={`send-box ${selectedClass}`}
        style={{
          background: "#C5DFDF",
          borderRadius: "10px",
          width: "330px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
          color: "#008485",
          fontWeight: "bold",
          margin: "auto",
        }}
        onClick={handleToAfter}
      >
        상품 가입하기
      </div>
      <div style={{ height: "120px" }}></div> {/* 스크롤 마진 영역 */}
      <div className="buttonContainer">
        <div className="beforebtn" onClick={handleToBefore} style={{ width: "100%" }}>
          &lt; 이전 화면으로
        </div>
        {/* <div className="afterbtn" onClick={handleToAfter}></div> */}
      </div>
    </div>
  );
}

export default ProductFirst;
