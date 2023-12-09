import React, { useEffect, useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "../../redux/store";
import Phone from "../../imgs/phone.png";
import Account from "../../imgs/account.png";
import { getSpeech } from "../../getSpeech"; // Import the text-to-speech function
import { useLocation } from "react-router-dom";

function SendFirst() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedOption = useSelector((state: any) => state.selectedOption);
  const [voiceGuide, setVoiceGuide] = useState("");

  useEffect(() => {
    window.speechSynthesis.getVoices();
    console.log("getvoices");
  }, []);

  useEffect(() => {
    getSpeech(voiceGuide);
    console.log("speech");
  }, [voiceGuide]);

  const isGuideTrue = useSelector((state: any) => state.isGuideTrue);
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
              voiceCode: "REMIT",
              remitCode: "NOTDECIDE",
              index: 1,
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

  const handleToBefore = () => {
    navigate("/");
  };

  // console.log(textToSpeechInitiated);
  const handleToAfter = () => {
    if (selectedOption) {
      navigate("/SendSecond");
    } else {
      alert("돈 보내실 방법을 선택해주세요.");
    }
  };
  const [selectedClass, setSelectedClass] = useState("");

  const [flashing, setFlashing] = useState(false);
  const [afterbtnflash, setafterbtnflash] = useState("afterbtn");

  const handleOptionClick = (option: any) => {
    dispatch(setOption(option));
    setSelectedClass("none");
    setafterbtnflash("afterbtn-flash");
    console.log(afterbtnflash);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="sub-title">
        돈 보내실 방법을
        <br />
        선택해주세요.
      </div>
      <div
        className={`send-box ${selectedOption === "전화번호" ? "selected" : selectedClass}`}
        onClick={() => handleOptionClick("전화번호")}
        style={{ display: "flex" }}
      >
        <div className="btn-text" style={{ display: "flex" }}>
          <div style={{ marginRight: "20px", paddingTop: "12px" }}>
            전화번호로
            <br />돈 보내기
          </div>
          <img src={Phone} width={"100px"} alt="phone-icon" />
        </div>
      </div>
      <div
        className={`send-box ${selectedOption === "계좌번호" ? "selected" : selectedClass}`}
        onClick={() => handleOptionClick("계좌번호")}
      >
        <div className="btn-text" style={{ display: "flex" }}>
          <div style={{ marginRight: "20px", paddingTop: "12px" }}>
            계좌번호로 <br />돈 보내기
          </div>
          <img src={Account} width={"100px"} alt="account-icon" />
        </div>
      </div>
      <div className="buttonContainer">
        <div className="beforebtn" onClick={handleToBefore}>
          &lt; 이전
        </div>
        <div className={afterbtnflash} onClick={handleToAfter}>
          다음 &gt;
        </div>
      </div>
    </div>
  );
}

export default SendFirst;
