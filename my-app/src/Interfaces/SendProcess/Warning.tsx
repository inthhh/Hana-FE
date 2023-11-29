import React, { useState, useEffect } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "../../redux/store"; // setOption import 추가

import { getSpeech } from "../../getSpeech";

function Warning() {
  //   const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToBefore = () => {
    navigate("/Sendhowmuch");
  };
  const handleToAfter = () => {
    navigate("/Sendpwd");
  };

  // useEffect(() => {
  //   // Run on component mount
  //   console.log("Warning component mounted");

  //   window.speechSynthesis.getVoices();

  //   const textToRead =
  //     "손님의 안전한 금융거래를 위한 유의사항을 안내해드리겠습니다. " +
  //     "첫째, 손님의 통장, 카드, 인감, 보안매체는 직접 관리하는 것이 안전합니다. " +
  //     "둘째, 금융회사를 사칭하여, 대출 권유나 보안강화 조치를 요구하면, 100% 사기이오니, 각별히 주의해주시기 바랍니다. " +
  //     "셋째, 의심스러운 경우에는, 전화를 끊고, 반드시 금융회사에 확인하시기 바랍니다. " +
  //     "이상이 없으시면, '다음' 버튼을 눌러 진행해주세요.";
  //   getSpeech(textToRead);
  //   return () => {
  //     console.log("Unmounting Warning component");
  //   };
  // }, []);

  const selectedOption = useSelector((state: any) => state.selectedOption);
  const [voiceGuide, setVoiceGuide] = useState(""); // Added state for voiceGuide

  useEffect(() => {
    const fetchData = async () => {
      try {
        const remitCode = selectedOption === "계좌번호" ? "ACCOUNT" : "PHONE";
        const indexnum = selectedOption === "계좌번호" ? 6 : 7;
        console.log(remitCode);
        const response = await fetch("https://with-pet-be.org/api/voice/guide", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            voiceCode: "REMIT",
            remitCode: remitCode,
            index: indexnum,
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
      <div className="sub-title" style={{ marginTop: "20px" }}>
        <div>
          손님의 안전한 <br />
          금융거래를 위한 <span style={{ color: "red", fontWeight: "bold" }}>유의사항</span>
        </div>
      </div>

      <div className="warning-msg-box">
        <div className="warning-msg">
          1. 손님의 <span style={{ color: "red", fontWeight: "bold" }}>통장, 카드, 인감, 보안매체</span>는
          <br /> <span style={{ color: "red", fontWeight: "bold" }}>직접 관리</span>하는 것이 안전해요.
        </div>
        <div className="warning-msg">
          2. 어떠한 경우라도 금융회사는 <br />
          전화로 비밀번호나 금융 거래를 묻지 않아요. <br />
          <span style={{ color: "red", fontWeight: "bold" }}>
            금융회사를 사칭하여 대출권유나
            <br />
            보안강화 조치를 요구하면 100% 사기
          </span>
          이오니 <br />
          각별히 주의해주세요.
        </div>
        <div className="warning-msg">
          3. 의심스러운 경우에는 전화를 끊고 <br />
          <span style={{ color: "red", fontWeight: "bold" }}>반드시 금융회사에 확인</span>하시어 <br />
          안전한 금융거래를 할 수 있도록 유의해주세요.
        </div>
        <div
          className="
              warning-msg"
          style={{ fontWeight: "bold" }}
        >
          이상이 없으시면,
          <br /> '다음' 버튼을 눌러 진행해주세요.
        </div>
      </div>

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

export default Warning;
