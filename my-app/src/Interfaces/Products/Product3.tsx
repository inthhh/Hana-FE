import React, { useEffect, useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanagirl from "../../imgs/hanaGirl.png";
import Hanaboy from "../../imgs/hanaBoy.png";
import "./product_style.css";
import p1 from "../../imgs/p1.png";
import { useSelector } from "react-redux";
import { getSpeech } from "../../getSpeech";

function Product3() {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState("");

  const handleToBefore = () => {
    navigate("/ProductSecond");
  };
  const handleToAfter = () => {
    setSelectedClass("selected");
    navigate("/Product7");
  };

  const handleLink1 = () => {
    window.location.href = "https://www.kebhana.com/cont/mall/mall08/mall0801/mall080103/1455930_115188.jsp";
  };
  const handleLink2 = () => {
    window.location.href = "https://m.hanacard.co.kr/MKCDCM1000M.web?CD_PD_SEQ=15864";
  };
  const handleLink3 = () => {
    window.location.href = "https://m.hanacard.co.kr/MKCDCM1000M.web?CD_PD_SEQ=15860";
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
              index: 3,
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

  return (
    <div>
      <div style={{ paddingTop: "50px", fontSize: "35px" }}>생활비 할인을</div>
      <div style={{ paddingTop: "10px", fontSize: "35px" }}>받을 수 있는 카드를</div>
      <div style={{ paddingTop: "10px", fontSize: "35px", marginBottom: "30px" }}>추천해드릴게요.</div>
      <img src={p1} width={"100px"} />
      <div className="products" onClick={handleLink1}>
        주거래하나통장
      </div>
      <div className="products" onClick={handleLink2}>
        원더 LIVING 카드
      </div>
      <div className="products" onClick={handleLink3}>
        원더카드 FREE
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

export default Product3;
