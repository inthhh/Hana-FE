import React, { useEffect, useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanagirl from "../../imgs/hanaGirl.png";
import Hanaboy from "../../imgs/hanaBoy.png";
import "./product_style.css";
import learn from "../../imgs/learn.png";
import { useSelector } from "react-redux";
import { getSpeech } from "../../getSpeech";

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
              index: 8,
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
      <div style={{ display: "flex" }}>
        <img src={learn} width={"80px"} height={"80px"} style={{ margin: "auto 20px" }} alt="learn" />
        <div>
          <div style={{ paddingTop: "50px", fontSize: "35px" }}>금융지식을</div>
          <div style={{ paddingTop: "10px", fontSize: "35px", marginBottom: "30px" }}>배우고 싶다면</div>
        </div>
      </div>
      <div
        className="greenbtn"
        style={{ height: "100px", cursor: "pointer" }}
        onClick={() => handleLink("https://pf.kakao.com/_xdxaxeKK")}
      >
        광주에
        <br />
        거주하시나요?
      </div>
      <div
        className="greenbtn"
        style={{ height: "100px", background: "#EAEAEA", color: "black", cursor: "pointer" }}
        onClick={() => handleLink("https://www.bok.or.kr/portal/ecEdu/ecWordDicary/search.do?menuNo=200688")}
      >
        경제 용어 사전
      </div>
      <div
        className="greenbtn"
        style={{ height: "100px", background: "#EAEAEA", color: "black", cursor: "pointer" }}
        onClick={() => handleLink("https://www.bok.or.kr/portal/bbs/B0000273/list.do?menuNo=201037")}
      >
        경제 카드 뉴스 보기
      </div>
      <div className="counseling">상담하기</div>
      <div style={{ height: "80px" }}></div> {/* 스크롤 마진 영역 */}
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
