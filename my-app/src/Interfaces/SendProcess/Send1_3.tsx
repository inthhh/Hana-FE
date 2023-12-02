import React, { useEffect, useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "../../redux/store"; // setOption import 추가
import HanaBoy from "../../imgs/hanaBoy.png";
import { reverse } from "dns";
import { getSpeech } from "../../getSpeech";

function Send1_3() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [selectedOption, setSelectedOption] = useState(null);
  const selectedOption = useSelector((state: any) => state.selectedOption);
  const handleToBefore = () => {
    navigate("/Send1_2");
  };
  const handleToAfter = () => {
    console.log(selectedOption);
    navigate("/Sendhowmuch");
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
  // const handleOptionClick = (option: any) => {
  //   dispatch(setOption(option));
  // };

  const receiver = useSelector((state: any) => state.receiver);
  const receiveAccount = useSelector((state: any) => state.receiveAccount);

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

    // Call the API when the component mounts
    fetchData();
  }, [selectedOption]); // Dependency array to ensure the API call is triggered when selectedOption changes

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="sub-title">
        받는 사람과 은행을
        <br />
        확인해주세요.
      </div>
      <img src={HanaBoy} style={{ width: "160px" }} />
      <div style={{ marginTop: "40px", fontSize: "32px" }}>
        <div>
          성함 : <span>{receiver}</span>
        </div>
        <div>
          대표은행 : <span>{receiveAccount}은행</span>
        </div>
      </div>
      <div className="buttonContainer">
        <div className="beforebtn" onClick={handleToBefore}>
          &lt; 이전
        </div>
        <div className="afterbtn-flash" onClick={handleToAfter}>
          다음 &gt;
        </div>
      </div>
    </div>
  );
}

export default Send1_3;
