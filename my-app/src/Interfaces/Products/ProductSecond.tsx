import React, { useEffect, useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import Hanagirl from "../../imgs/hanaGirl.png";
import Hanaboy from "../../imgs/hanaBoy.png";
import "./product_style.css";
import p1 from "../../imgs/p1.png";
import p2 from "../../imgs/p2.png";
import p3 from "../../imgs/p3.png";
import p4 from "../../imgs/p4.png";
import { getSpeech } from "../../getSpeech";
import { useSelector } from "react-redux";

function ProductSecond() {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedItem, setSelectedItem] = useState(-1);

  const handleToBefore = () => {
    navigate("/ProductFirst");
  };
  const handleToAfter = () => {
    if (selectedItem < 0) {
      alert("상품을 선택해주세요.");
    } else {
      setSelectedClass("selected");
      navigate(`/Product${selectedItem + 3}`);
    }
  };

  const handleBoxClick = (index: number) => {
    setSelectedItem(index); // 클릭한 항목의 인덱스를 상태에 저장
    console.log(index);
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
              index: 2,
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
      <div style={{ paddingTop: "50px", fontSize: "35px" }}>관심있는 혜택을</div>
      <div style={{ paddingTop: "10px", fontSize: "35px", marginBottom: "30px" }}>선택해주세요</div>
      <div className="container">
        <div className={`box ${selectedItem === 0 ? "selected" : ""}`} onClick={() => handleBoxClick(0)}>
          <div style={{ margin: "12px 0" }}>
            생활비
            <br />
            할인
            <br />
          </div>
          <img src={p1} width={"80px"} />
        </div>

        <div className={`box ${selectedItem === 1 ? "selected" : ""}`} onClick={() => handleBoxClick(1)}>
          <div style={{ margin: "12px 0" }}>
            목돈
            <br />
            만들기
            <br />
          </div>
          <img src={p2} width={"80px"} />
        </div>
      </div>
      <div className="container">
        <div className={`box ${selectedItem === 2 ? "selected" : ""}`} onClick={() => handleBoxClick(2)}>
          <div style={{ margin: "12px 0" }}>
            연금
            <br />
            받기
            <br />
          </div>
          <img src={p3} width={"80px"} />
        </div>

        <div className={`box ${selectedItem === 3 ? "selected" : ""}`} onClick={() => handleBoxClick(3)}>
          <div style={{ margin: "12px 0" }}>
            집<br />
            구매하기
            <br />
          </div>
          <img src={p4} width={"80px"} />
        </div>
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

export default ProductSecond;
