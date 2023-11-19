import React, { useEffect, useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "../../redux/store"; // setOption import 추가

interface Account {
  accountCode: string;
  accountId: number;
  accountNumber: string;
  balance: number;
}

function SendSecond() {
  const [selectedAccount, setSelectedAccount] = useState<Account>();
  const selectedOption = useSelector((state: any) => state.selectedOption);
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState<Account[]>([]);
  // const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://with-pet-be.org/api/accounts")
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 200) {
          setAccounts(data.data.accountResponses);
          console.log(data.data.accountResponses);
        } else {
          console.error("Error fetching accounts:", data.message);
        }
      })
      .catch((error) => {
        // Handle network error
        console.error("Network error:", error);
      });
  }, []);

  const handleToBefore = () => {
    navigate("/SendFirst");
  };
  const handleToAfter = () => {
    if (selectedOption === "전화번호") navigate("/Send1_1");
    else navigate("/Send2_1");
  };
  const handleAccountClick = (account: any) => {
    console.log(selectedAccount);
    setSelectedAccount(account);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div>[{selectedOption}로 송금하기]</div>
      <div style={{ padding: "5px", fontWeight: "bold" }}>나의 전체계좌</div>
      <div>내 계좌 : {accounts.length}개 </div>
      {/* <div
        className={`send-box ${selectedAccount === 1 ? "selected" : ""}`}
        style={{ height: "150px", marginBottom: "10px" }}
        onClick={() => handleAccountClick(1)}
      >
        입출금
        <br />
        000-000000-00000
        <br />
        잔액 : 100,000,000원
      </div> */}
      {accounts.map((account) => (
        <div
          key={account.accountId}
          className={`send-box ${selectedAccount && selectedAccount.accountId === account.accountId ? "selected" : ""}`}
          style={{ height: "150px", marginBottom: "10px" }}
          onClick={() => handleAccountClick(account)}
        >
          {account.accountCode}
          <br />
          {account.accountNumber}
          <br />
          잔액 : {account.balance.toLocaleString()}원
        </div>
      ))}
      <div className="buttonContainer">
        <div className="beforebtn" onClick={handleToBefore}>
          &lt; 이전
        </div>
        <div className="afterbtn" onClick={handleToAfter}>
          보내기 &gt;
        </div>
      </div>
    </div>
  );
}

export default SendSecond;
