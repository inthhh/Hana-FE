import React, { useEffect, useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanagirl from "../../imgs/hanaGirl.png";
import Hanaboy from "../../imgs/hanaBoy.png";
import "./product_style.css";
import p2 from "../../imgs/p2.png";
import { useSelector } from "react-redux";
import { getSpeech } from "../../getSpeech";

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

  const [voiceGuide, setVoiceGuide] = useState("");
  const isGuideTrue = useSelector((state: any) => state.isGuideTrue);

  useEffect(() => {
    window.speechSynthesis.getVoices();
    console.log("getvoices");
  }, []);

  useEffect(() => {
    getSpeech(voiceGuide);
    console.log("speech");
  }, [voiceGuide]);

  useEffect(() => {
    console.log("SendFirst component mounted");
    if (isGuideTrue) {
      const fetchData = async () => {
        try {
          const response = await fetch("https://with-pet-be.org/api/voice/guide", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              voiceCode: "ITEM",
              remitCode: "NOTDECIDE",
              index: 4,
            }),
          });

          if (response.ok) {
            const result = await response.json();
            console.log("API Response:", result);

            setVoiceGuide(result.data.guide);
          } else {
            console.error("API Error:", response.statusText);
          }
        } catch (error) {
          console.error("API Error");
        }
      };

      fetchData();
    }
  }, []);

  const [selectedProduct, setSelectedProduct] = useState("");
  const isSelected = (productName: string) => selectedProduct === productName;
  const handleSelect1 = () => {
    setSelectedProduct("우대 적금");
  };
  const handleSelect2 = () => {
    setSelectedProduct("증권저축계좌");
  };
  const handleSelect3 = () => {
    setSelectedProduct("금리 걱정없는 펀드");
  };

  return (
    <div>
      <div style={{ paddingTop: "50px", fontSize: "35px" }}>목돈을 마련하는 것에</div>
      <div style={{ paddingTop: "10px", fontSize: "35px" }}>도움이 될 수 있는</div>
      <div style={{ paddingTop: "10px", fontSize: "35px", marginBottom: "30px" }}>상품을 추천해드릴게요.</div>
      <img src={p2} width={"100px"} />
      <div className={`products ${isSelected("우대 적금") && "selected"}`}>
        <div style={{ marginTop: "5px" }}>
          (우대)도전365 적금
          <div className="p-horizontal"></div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px" }}>
            <div
              style={{ margin: "0 auto" }}
              onClick={() =>
                handleLink("https://www.kebhana.com/cont/mall/mall08/mall0801/mall080102/1452858_115157.jsp")
              }
            >
              상세설명 보기
            </div>
            <div className="p-vertical"></div>
            <div style={{ margin: "0 auto", padding: "0 5px" }} onClick={handleSelect1}>
              선택
            </div>
          </div>
        </div>
      </div>
      <div className={`products ${isSelected("증권저축계좌") && "selected"}`}>
        <div style={{ marginTop: "5px" }}>
          증권저축계좌
          <div className="p-horizontal"></div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px" }}>
            <div
              style={{ margin: "0 auto" }}
              onClick={() =>
                handleLink("https://www.kebhana.com/cont/mall/mall08/mall0801/mall080103/1420083_115188.jsp")
              }
            >
              상세설명 보기
            </div>
            <div className="p-vertical"></div>
            <div style={{ margin: "0 auto", padding: "0 5px" }} onClick={handleSelect2}>
              선택
            </div>
          </div>
        </div>
      </div>
      <div className={`products ${isSelected("금리 걱정없는 펀드") && "selected"}`}>
        <div style={{ marginTop: "5px" }}>
          <div>
            금리 걱정없는 펀드<p style={{ fontSize: "20px", color: "red", marginTop: "5px" }}>원금손실가능성있음</p>
          </div>
          <div className="p-horizontal"></div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px" }}>
            <div style={{ margin: "0 auto" }} onClick={() => handleLink("https://www.kebhana.com")}>
              상세설명 보기
            </div>
            <div className="p-vertical"></div>
            <div style={{ margin: "0 auto", padding: "0 5px" }} onClick={handleSelect3}>
              선택
            </div>
          </div>
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
