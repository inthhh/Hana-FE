import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanagirl from "../../imgs/hanaGirl.png";
import Hanaboy from "../../imgs/hanaBoy.png";
import "./product_style.css";
import p2 from "../../imgs/p2.png";

function Product4() {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState("");

  const handleToBefore = () => {
    navigate("/ProductSecond");
  };
  const handleToAfter = () => {
    setSelectedClass("selected");
    navigate("/Product7");
  };

  const handleLink = (url: string) => {
    window.location.href = url;
  };

  return (
    <div>
      <div style={{ paddingTop: "50px", fontSize: "35px" }}>목돈을 마련하는 것에</div>
      <div style={{ paddingTop: "10px", fontSize: "35px" }}>도움이 될 수 있는</div>
      <div style={{ paddingTop: "10px", fontSize: "35px", marginBottom: "30px" }}>상품을 추천해드릴게요.</div>
      <img src={p2} width={"100px"} />
      <div
        className="products"
        onClick={() => handleLink("https://www.kebhana.com/cont/mall/mall08/mall0801/mall080102/1452858_115157.jsp")}
      >
        (우대)도전365 적금
      </div>
      <div
        className="products"
        onClick={() => handleLink("https://www.kebhana.com/cont/mall/mall08/mall0801/mall080103/1420083_115188.jsp")}
      >
        증권저축계좌
      </div>
      <div className="products" onClick={() => handleLink("https://www.kebhana.com")}>
        <div>
          금리 걱정없는 펀드<p style={{ fontSize: "20px", color: "red", marginTop: "5px" }}>원금손실가능성있음</p>
        </div>
      </div>
      <div className="counseling">상담하기</div>
      <div style={{ height: "80px" }}></div> {/* 스크롤 마진 영역 */}
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

export default Product4;
