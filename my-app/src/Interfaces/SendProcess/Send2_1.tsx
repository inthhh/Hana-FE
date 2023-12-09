import React, { useState, useEffect } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { setOption } from "../../redux/store";
import { setSendAccount } from "../../redux/store";
import Accountimg from "../../imgs/account.png";
import { getSpeech } from "../../getSpeech"; // Import the text-to-speech function

interface Account {
  accountCode: string;
  accountId: number;
  accountNumber: string;
  balance: number;
}

function Send2_1() {
  const [voiceGuide, setVoiceGuide] = useState("");

  useEffect(() => {
    window.speechSynthesis.getVoices();
    console.log("getvoices");
  }, []);

  useEffect(() => {
    getSpeech(voiceGuide);
    console.log("speech");
  }, [voiceGuide]);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [selectedOption, setSelectedOption] = useState(null);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const selectedOption = useSelector((state: any) => state.selectedOption);
  const sendAccount = useSelector((state: any) => state.sendAccount);
  const [selectedAccountInfo, setSelectedAccountInfo] = useState<Account | null>(null);

  const handleToBefore = () => {
    navigate("/SendSecond");
  };
  const handleToAfter = () => {
    // console.log(selectedOption);
    navigate("/Send2_2");
  };

  useEffect(() => {
    fetch("https://with-pet-be.org/api/accounts")
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 200) {
          setAccounts(data.data.accountResponses);

          console.log("2-1", data.data.accountResponses);
        } else {
          console.error("Error fetching accounts:", data.message);
        }
      })
      .catch((error) => {
        // Handle network error
        console.error("Network error:", error);
      });
  }, []);

  useEffect(() => {
    console.log(sendAccount);
    const selectedAccount = accounts.find((account) => account.accountId === sendAccount);
    console.log(selectedAccount);
    if (selectedAccount) {
      setSelectedAccountInfo(selectedAccount);
      console.log(selectedAccount);
    }
  }, [sendAccount, accounts]);

  const isGuideTrue = useSelector((state: any) => state.isGuideTrue);
  useEffect(() => {
    console.log("SendFirst component mounted");
    if (isGuideTrue) {
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
    }
  }, [selectedOption]); // Dependency array to ensure the API call is triggered when selectedOption changes

  const [selectedClass, setSelectedClass] = useState("");
  const [selectedClass2, setSelectedClass2] = useState("");
  const [afterbtnflash, setafterbtnflash] = useState("afterbtn");

  const handleClick = (option: any) => {
    // console.log(option);
    setSelectedClass("selected");
    setSelectedClass2("none");
    setafterbtnflash("afterbtn-flash");
    console.log(afterbtnflash);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="sub-title" style={{ height: "50px", marginTop: "20px" }}>
        이하나
      </div>
      <div
        className="send-box-basic"
        // onClick={() => handleOptionClick("계좌번호")}
      >
        <div>
          내 계좌
          {selectedAccountInfo && (
            <>
              <div>계좌번호: {selectedAccountInfo.accountNumber}</div>
              <div>잔액: {selectedAccountInfo.balance.toLocaleString()}원</div>
            </>
          )}
        </div>
      </div>
      <div
        className={`send-box ${selectedClass}`}
        style={{
          background: "#C5DFDF",
          borderRadius: "10px",
          width: "330px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
          color: "#008485",
          fontWeight: "bold",
        }}
        onClick={handleClick}
      >
        돈 보내기
      </div>
      <div className={`send-box ${selectedClass2}`} style={{ height: "100px" }} onClick={handleToBefore}>
        다른 계좌에서
        <br />
        돈 보내기
        <img src={Accountimg} width={"90px"} style={{ marginLeft: "20px" }} />
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

export default Send2_1;
