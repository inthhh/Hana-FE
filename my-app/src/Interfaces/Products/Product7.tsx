import React, { useEffect, useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanagirl from "../../imgs/hanaGirl.png";
import Hanaboy from "../../imgs/hanaBoy.png";
import "./product_style.css";
import learn from "../../imgs/learn.png";
import { getSpeech } from "../../getSpeech";
import { useSelector } from "react-redux";

function Product7() {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState("");

  const handleToBefore = () => {
    navigate("/ProductSecond");
  };
  const handleToAfter = () => {
    setSelectedClass("selected");
    navigate("/Product8");
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
              index: 7,
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

  const handleMsg = () => {
    alert("상품 안내 문자가 전송되었습니다.(예시)");
  };

  return (
    <div>
      <div style={{ paddingTop: "50px", fontSize: "35px" }}>선택하신 상품에 대한</div>
      <div style={{ paddingTop: "10px", fontSize: "35px" }}>자세한 설명을 문자로</div>
      <div style={{ paddingTop: "10px", fontSize: "35px", marginBottom: "30px" }}>받아보시겠어요?</div>
      <div style={{ display: "flex" }}>
        <div className="yesno" onClick={handleMsg}>
          예
        </div>
        <div className="yesno">아니오</div>
      </div>
      <div className="greenbtn" onClick={handleToAfter}>
        <div>
          금융지식 더 배우기
          <img src={learn} width={"80px"} style={{ marginTop: "10px" }} />
        </div>
      </div>
      <div className="counseling" style={{ height: "100px" }}>
        상담원
        <br />
        전화 연결하기
      </div>
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

export default Product7;
