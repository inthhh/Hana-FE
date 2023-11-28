import React, { useState, useEffect } from "react";
import "../Main.css";
import HanaGirl from "../../imgs/hanaGirl.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOption, setSendAccount } from "../../redux/store";

function SendFinal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToAfter = () => {
    navigate("/");
  };

  const money = useSelector((state: any) => state.money);
  const receiveAccount = useSelector((state: any) => state.receiveAccount);
  const receiver = useSelector((state: any) => state.receiver);
  const selectedOption = useSelector((state: any) => state.selectedOption);
  const sendAccount = useSelector((state: any) => state.sendAccount);

  useEffect(() => {
    // API 호출
    if (selectedOption === "계좌번호") {
      console.log("돈 빠져나가는 계좌", sendAccount);
      const requestData = {
        accountId: sendAccount,
        accountNumber: 0,
        bankCode: "HANA",
        amount: money,
      };

      fetch("https://with-pet-be.org/api/remit/account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.code === 200) {
            console.log("송금 성공");
          } else {
            console.error("송금 실패", data.message);
          }
        })
        .catch((error) => {
          console.error("API 호출 오류", error);
        });
    } else {
      console.log("돈 빠져나가는 계좌(전화번호ver)", sendAccount);
      const requestData = {
        toAccountNumber: 0,
        accountId: sendAccount,
        amount: money,
      };

      fetch("https://with-pet-be.org/api/remit/number", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.code === 200) {
            console.log("송금 성공");
          } else {
            console.error("송금 실패", data.message);
          }
        })
        .catch((error) => {
          console.error("API 호출 오류", error);
        });
    }
  }, [selectedOption, receiveAccount, money]);

  return (
    <div>
      <div className="sub-title">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "80px",
            width: "390px",
            background: "rgba(0, 132, 133, 0.10)",
          }}
        >
          송금을 완료했어요.
        </div>
      </div>
      <img src={HanaGirl} style={{ width: "200px" }} />
      <div style={{ fontSize: "30px", fontWeight: "500", marginTop: "20px" }}>
        <span style={{ fontWeight: "bold" }}>{receiver}</span>
        님에게 <br />
        <span style={{ fontWeight: "bold" }}>{money}원</span>
        <br />
        보내기 완료
      </div>
      <div className="buttonContainer">
        <div className="afterbtn" onClick={handleToAfter} style={{ width: "100%" }}>
          홈으로 &gt;
        </div>
      </div>
    </div>
  );
}

export default SendFinal;
