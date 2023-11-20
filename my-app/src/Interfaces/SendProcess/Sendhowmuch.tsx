import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMoney } from "../../redux/store";

function Sendhowmuch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [selectedOption, setSelectedOption] = useState(null);
  const selectedOption = useSelector((state: any) => state.selectedOption);
  const money = useSelector((state: any) => state.money);
  const accountAmount = useSelector((state: any) => state.accountAmount);

  const handleToBefore = () => {
    if (selectedOption === "전화번호") navigate("/Send1_3");
    else navigate("/Send2_2");
  };
  const handleToAfter = () => {
    if (money > 0) {
      // 선택된 옵션이 있을 때만 다음 페이지로 이동
      navigate("/Sendpwd");
    } else {
      alert("금액을 입력하거나 선택해주세요.");
    }
  };

  const handleOptionClick = (option: any) => {
    console.log(option);
    if (option === "전액") {
      dispatch(setMoney(accountAmount)); // 전액
    } else dispatch(setMoney(option)); // 선택한 금액
  };

  const handleDirectInputClick = () => {
    dispatch(setMoney(0));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (!isNaN(Number(inputValue))) {
      dispatch(setMoney(Number(inputValue)));
    } else {
      console.error("Invalid input. Please enter a valid number.");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
          금액을 선택해주세요.
        </div>
      </div>
      <div style={{ fontSize: "20px" }}>얼마를 보낼까요?</div>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          value={money}
          onChange={handleInputChange}
          placeholder="금액"
          style={{ left: "20px", margin: "20px 0", width: "240px", height: "50px", fontSize: "30px" }}
        />
        <div style={{ marginTop: "30px", marginLeft: "10px", height: "50px", fontSize: "30px" }}>원</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="amountButton" onClick={() => handleOptionClick(10000)}>
          1만
        </div>
        <div className="amountButton" onClick={() => handleOptionClick(50000)}>
          5만
        </div>
        <div className="amountButton" onClick={() => handleOptionClick(100000)}>
          10만
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="amountButton" onClick={() => handleOptionClick(1000000)}>
          100만
        </div>
        <div className="amountButton" onClick={() => handleOptionClick("전액")}>
          전액
        </div>
        <div className="amountButton" onClick={handleDirectInputClick}>
          직접 입력
        </div>
      </div>

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

export default Sendhowmuch;
