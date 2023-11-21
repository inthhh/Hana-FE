import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setReceiver } from "../../redux/store";
import { setReceiveAccount } from "../../redux/store";
import { setMoney } from "../../redux/store";
import Hanaicon from "../../imgs/hana_icon.jpeg";
import Delete from "../../imgs/delete_icon.png";

function Sendpwd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [selectedOption, setSelectedOption] = useState(null);
  const money = useSelector((state: any) => state.money);
  const receiveAccount = useSelector((state: any) => state.receiveAccount);
  const receiver = useSelector((state: any) => state.receiver);
  const [password, setPassword] = useState(""); // 비밀번호 상태 추가

  const handleToBefore = () => {
    navigate("/Warning");
  };
  const handleToAfter = () => {
    if (password.length === 4) {
      navigate("/SendFinal");
    } else {
      alert("비밀번호는 4자리 입니다.");
    }
  };
  const handleKeypadClick = (number: number) => {
    if (password.length < 4) {
      if (number > -1) {
        setPassword((prevPassword) => prevPassword + number.toString());
      }
    }
  };

  const handleDeleteClick = () => {
    setPassword((prevPassword) => prevPassword.slice(0, -1));
  };

  const renderPasswordCircles = () => {
    console.log("pwd circles"); // 안됨
    const circles = [];

    for (let i = 0; i < 4; i++) {
      circles.push(<div key={i} className={`password-circle ${i < password.length ? "filled" : ""}`}></div>);
    }

    return circles;
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
          계좌 비밀번호를
          <br />
          입력해주세요.
        </div>
      </div>
      <div style={{ fontSize: "20px" }}>
        <span>
          {receiveAccount}은행 {receiver}
        </span>
        님께 <br />
        <span>{money}원</span>을 이체합니다.
      </div>
      <div>
        <br />
        비밀번호 입력
      </div>
      <div style={{ marginTop: "5px", marginBottom: "20px" }}>
        {/* 비밀번호 입력창 */}
        <input
          type="password"
          value={password}
          readOnly
          style={{ width: "200px", height: "24px", fontSize: "30px", textAlign: "center" }}
        />
        {/* <div style={{ marginTop: "5px", marginBottom: "20px", display: "flex" }}>
          
          {renderPasswordCircles()}
        </div> */}
      </div>
      <div>
        {/* 키패드 생성 */}
        <div>
          {[1, 2, -1, 3].map((number) => (
            <button key={number} className="sendpwd-button" onClick={() => handleKeypadClick(number)}>
              {number === -1 ? <img src={Hanaicon} alt="Hana" className="keypad-image" /> : number}
            </button>
          ))}
        </div>
        <div>
          {[4, 5, -1, 6].map((number) => (
            <button key={number} className="sendpwd-button" onClick={() => handleKeypadClick(number)}>
              {number === -1 ? <img src={Hanaicon} alt="Hana" className="keypad-image" /> : number}
            </button>
          ))}
        </div>
        <div>
          {[7, 8, 9, 0].map((number) => (
            <button key={number} className="sendpwd-button" onClick={() => handleKeypadClick(number)}>
              {number}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "26px" }} onClick={handleDeleteClick}>
          <img src={Delete} height={"40px"} alt="Delete icon" />
        </div>
      </div>

      <div className="buttonContainer">
        <div className="beforebtn" onClick={handleToBefore}>
          &lt; 이전
        </div>
        <div className="afterbtn" onClick={handleToAfter}>
          확인 &gt;
        </div>
      </div>
    </div>
  );
}

export default Sendpwd;
