import React, { useEffect, useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { setOption } from "../../redux/store"; // setOption import 추가
import HanaGirl from "../../imgs/hanaGirl.png";
import Phone from "../../imgs/phone.png";
import { getSpeech } from "../../getSpeech"; // Import the text-to-speech function

function Send1_1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [selectedOption, setSelectedOption] = useState(null);
  // const selectedOption = useSelector((state: any) => state.selectedOption);
  const [option, setOption] = useState("");
  const selectedOption = useSelector((state: any) => state.selectedOption);

  const handleToBefore = () => {
    navigate("/SendSecond");
  };
  const handleToAfter = () => {
    navigate("/Send1_2");
  };

  const [selectedClass, setSelectedClass] = useState("");
  const [afterbtnflash, setafterbtnflash] = useState("afterbtn");

  const handleClick = (n: any) => {
    setOption(n);
    setSelectedClass("none");
    setafterbtnflash("afterbtn-flash");
    console.log(afterbtnflash);
  };

  const [voiceGuide, setVoiceGuide] = useState("");

  useEffect(() => {
    window.speechSynthesis.getVoices();
    console.log("getvoices");
  }, []);

  useEffect(() => {
    getSpeech(voiceGuide);
    console.log("speech");
  }, [voiceGuide]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const remitCode = selectedOption === "계좌번호" ? "ACCOUNT" : "PHONE";
        console.log(remitCode);
        const response = await fetch("https://with-pet-be.org/api/voice/guide", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            voiceCode: "REMIT",
            remitCode: remitCode,
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

    // Call the API when the component mounts
    fetchData();
  }, [selectedOption]); // Dependency array to ensure the API call is triggered when selectedOption changes

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="sub-title">누구에게 보낼까요?</div>
      <img src={HanaGirl} style={{ width: "180px" }} />
      <div className={`send-box ${option === "find" ? "selected" : ""}`} onClick={() => handleClick("find")}>
        <div>
          <div className="btn-text"> 연락처에서 찾기</div>
          <img src={Phone} width={"70px"} style={{ marginTop: "10px" }} />
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

export default Send1_1;
