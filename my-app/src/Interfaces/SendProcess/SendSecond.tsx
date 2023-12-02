import React, { useEffect, useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAccountAmount } from "../../redux/store";
import { setSendAccount } from "../../redux/store";
import { getSpeech } from "../../getSpeech"; // Import the text-to-speech function

interface Account {
  accountCode: string;
  accountId: number;
  accountNumber: string;
  balance: number;
}

function SendSecond() {
  const [selectedAccount, setSelectedAccount] = useState<Account>();
  const selectedOption = useSelector((state: any) => state.selectedOption); //
  const accountAmount = useSelector((state: any) => state.accountAmount);
  const sendAccount = useSelector((state: any) => state.sendAccount);
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState<Account[]>([]);
  // const dispatch = useDispatch();
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
    fetch("https://with-pet-be.org/api/accounts")
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 200) {
          setAccounts(data.data.accountResponses);
          console.log(data.data.accountResponses);
          dispatch(setAccountAmount(0));
        } else {
          console.error("Error fetching accounts:", data.message);
        }
      })
      .catch((error) => {
        // Handle network error
        console.error("Network error:", error);
      });
  }, []);

  const dispatch = useDispatch();

  const handleToBefore = () => {
    navigate("/SendFirst");
  };
  const handleToAfter = () => {
    if (selectedOption === "전화번호" && accountAmount && accountAmount > 0) {
      navigate("/Send1_1");
    } else if (selectedOption === "계좌번호" && accountAmount && accountAmount > 0) {
      navigate("/Send2_1");
    } else {
      alert("송금 가능한 계좌를 선택해주세요");
    }
  };

  const [selectedClass, setSelectedClass] = useState("");
  const [afterbtnflash, setafterbtnflash] = useState("afterbtn");

  const handleAccountClick = (account: Account) => {
    setSelectedAccount(account);
    // Dispatch the selected account's balance to the Redux store
    dispatch(setAccountAmount(account.balance));
    dispatch(setSendAccount(account.accountId));
    console.log(accountAmount);
    console.log(sendAccount);
    setSelectedClass("none");
    setafterbtnflash("afterbtn-flash");
    console.log(afterbtnflash);
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

    // Call the API when the component mounts
    fetchData();
  }, [selectedOption]); // Dependency array to ensure the API call is triggered when selectedOption changes

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ paddingTop: "10px", color: "#008485" }}>[{selectedOption}로 송금하기]</div>

      {/* <div className="sub-title"> */}
      <div style={{ fontSize: "30px", padding: "16px 0", fontWeight: "bold" }}>나의 전체계좌</div>
      <div style={{ fontSize: "20px" }}>내 계좌 : {accounts.length}개 </div>
      {/* </div> */}

      {accounts.map((account) => (
        <div
          key={account.accountId}
          className={`account-box ${
            selectedAccount && selectedAccount.accountId === account.accountId ? "selected" : selectedClass
          }`}
          style={{ height: "150px", marginBottom: "10px" }}
          onClick={() => handleAccountClick(account)}
        >
          <div>
            {account.accountCode}
            <br />
            {account.accountNumber}
            <br />
            {/* <div style={{color:"#008485"}}> */}
            <div>
              잔액 : <span>{account.balance.toLocaleString()}원</span>
              {/* </div> */}
            </div>
          </div>
        </div>
      ))}
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

export default SendSecond;
