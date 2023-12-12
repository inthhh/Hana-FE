import React, { useEffect, useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanagirl from "../../imgs/hanaGirl.png";
import Hanaboy from "../../imgs/hanaBoy.png";
import "./product_style.css";
import p3 from "../../imgs/p3.png";
import { useSelector } from "react-redux";
import { getSpeech } from "../../getSpeech";

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
              index: 5,
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
    setSelectedProduct("1");
  };
  const handleSelect2 = () => {
    setSelectedProduct("2");
  };
  const handleSelect3 = () => {
    setSelectedProduct("3");
  };

  return (
    <div>
      <div style={{ paddingTop: "50px", fontSize: "35px" }}>연금을 받는 것에</div>
      <div style={{ paddingTop: "10px", fontSize: "35px" }}>도움이 될 수 있는</div>
      <div style={{ paddingTop: "10px", fontSize: "35px", marginBottom: "30px" }}> 상품을 추천해드릴게요.</div>
      <img src={p3} width={"100px"} />
      <div className={`products ${isSelected("1") && "selected"}`}>
        <div style={{ marginTop: "5px" }}>
          연금하나 월복리 적금
          <div className="p-horizontal"></div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px" }}>
            <div
              style={{ margin: "0 auto" }}
              onClick={() =>
                handleLink("https://www.kebhana.com/cont/mall/mall08/mall0801/mall080102/1455928_115157.jsp")
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
      <div className={`products ${isSelected("2") && "selected"}`}>
        <div style={{ marginTop: "5px" }}>
          연금하나 통장
          <div className="p-horizontal"></div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px" }}>
            <div
              style={{ margin: "0 auto" }}
              onClick={() =>
                handleLink("https://www.kebhana.com/cont/mall/mall08/mall0801/mall080103/1455931_115188.jsp")
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
      <div className={`products ${isSelected("3") && "selected"}`}>
        <div style={{ marginTop: "5px" }}>
          <div>
            연금저축계좌<p style={{ fontSize: "20px", color: "red", marginTop: "5px" }}>원금손실가능성있음</p>
          </div>
          <div className="p-horizontal"></div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px" }}>
            <div
              style={{ margin: "0 auto" }}
              onClick={() => handleLink("https://www.hanaw.com/main/finance/trade/FP_030806_P.cmd")}
            >
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

export default Product5;
