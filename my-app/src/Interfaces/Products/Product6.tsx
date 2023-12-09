import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanagirl from "../../imgs/hanaGirl.png";
import Hanaboy from "../../imgs/hanaBoy.png";
import "./product_style.css";
import p4 from "../../imgs/p4.png";

function Product6() {
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
      <div style={{ paddingTop: "50px", fontSize: "35px" }}>집 구매하는 것에</div>
      <div style={{ paddingTop: "10px", fontSize: "35px" }}>도움이 될 수 있는</div>
      <div style={{ paddingTop: "10px", fontSize: "35px", marginBottom: "30px" }}> 상품을 추천해드릴게요.</div>
      <img src={p4} width={"100px"} />
      <div
        className="products"
        onClick={() => handleLink("https://www.kebhana.com/cont/mall/mall08/mall0801/mall080102/1419695_115157.jsp")}
      >
        주택청약종합저축
      </div>
      <div
        className="products"
        onClick={() => handleLink("https://www.kebhana.com/cont/mall/mall08/mall0801/mall080102/1450446_115157.jsp")}
      >
        내집마련 더블업적금
      </div>
      <div
        className="products"
        onClick={() =>
          handleLink("https://www.kebhana.com/cont/mall/mall08/mall0802/mall080203/1489881_115198.jsp?_menuNo=98786")
        }
      >
        주거안정 주택구입자금대출
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

export default Product6;
