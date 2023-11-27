import React, { useState, useEffect } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { setOption } from "../../redux/store";
import { setSendAccount } from "../../redux/store";
import Accountimg from "../../imgs/account.png";

interface Account {
  accountCode: string;
  accountId: number;
  accountNumber: string;
  balance: number;
}

function Send2_1() {
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
          // console.log(data.data.accountResponses);
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
    const selectedAccount = accounts.find((account) => account.accountNumber === sendAccount);

    if (selectedAccount) {
      setSelectedAccountInfo(selectedAccount);
      console.log(selectedAccount);
    }
  }, [sendAccount, accounts]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="sub-title" style={{ height: "50px", marginTop: "20px" }}>
        이하나
      </div>
      <div
        className="send-box"
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
        style={{
          background: "#D4D4D4",
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
      >
        돈 보내기
      </div>
      <div className="send-box" style={{ height: "100px" }} onClick={handleToBefore}>
        다른 계좌에서
        <br />
        돈 보내기
        <img src={Accountimg} width={"90px"} style={{ marginLeft: "20px" }} />
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

export default Send2_1;
