import React, { useEffect, useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "../../redux/store"; // setOption import 추가
import { getSpeech } from "../../getSpeech";
import { useRef } from "react";
import { setReceiveAccount } from "../../redux/store";

function Send2_2() {
  const dispatch = useDispatch();
  const receiveAccount = useSelector((state: any) => state.receiveAccount);
  const navigate = useNavigate();
  // const [selectedOption, setSelectedOption] = useState(null);
  const selectedOption = useSelector((state: any) => state.selectedOption);
  const [accountNumber, setAccountNumber] = useState("");
  const [voiceGuide, setVoiceGuide] = useState("");

  useEffect(() => {
    window.speechSynthesis.getVoices();
    console.log("getvoices");
  }, []);

  useEffect(() => {
    getSpeech(voiceGuide);
    console.log("speech");
  }, [voiceGuide]);

  const handleToBefore = () => {
    navigate("/Send2_1");
  };
  const handleToAfter = () => {
    console.log("계좌은행", receiveAccount);
    navigate("/Sendhowmuch");
  };

  const handleOptionClick = (option: any) => {
    dispatch(setOption(option));
  };

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

    // Call the API when the component mounts
    fetchData();
  }, [selectedOption]); // Dependency array to ensure the API call is triggered when selectedOption changes

  const inputRef = useRef(null);
  // Add this inside your component function
  const handlePasteFromClipboard = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      setAccountNumber(clipboardText);
    } catch (error) {
      console.error("Error pasting from clipboard:", error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="sub-title" style={{ height: "50px", marginTop: "20px" }}>
        누구에게 보낼까요?
      </div>
      <div className={`send-box-basic`} style={{ height: "200px", borderRadius: "50px" }}>
        <div>
          계좌번호 입력하기
          <div>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="입력"
              ref={inputRef}
              style={{
                backgroundColor: "lightgray",
                textAlign: "center",
                width: "80%",
                height: "50px",
                fontSize: "16px",
                margin: "10px auto",
              }}
            />
          </div>
          <div
            style={{
              width: "300px",
              background: "gray",
              color: "white",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
            }}
            onClick={handlePasteFromClipboard}
          >
            {" "}
            복사한 계좌번호 붙여넣기
          </div>
        </div>
      </div>

      <div className={`send-box-basic`} style={{ height: "180px", borderRadius: "50px", marginTop: "10px" }}>
        <div>
          은행 선택하기
          <div style={{ fontSize: "14px", marginTop: "5px" }}>예시: 하나, 농협, 기업</div>
          <input
            type="text"
            value={receiveAccount}
            onChange={(e) => dispatch(setReceiveAccount(e.target.value))}
            placeholder="은행 검색"
            style={{
              backgroundColor: "lightgray",
              textAlign: "center",
              width: "80%",
              height: "50px",
              fontSize: "16px",
              margin: "10px auto",
            }}
          />
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

export default Send2_2;
