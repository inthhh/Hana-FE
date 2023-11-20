import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "../../redux/store"; // setOption import 추가
import Hanaicon from "../../imgs/hana_icon.jpeg";

function Sendpwd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [selectedOption, setSelectedOption] = useState(null);
  const selectedOption = useSelector((state: any) => state.selectedOption);
  const [password, setPassword] = useState(""); // 비밀번호 상태 추가
  const handleToBefore = () => {
    navigate("/Sendhowmuch");
  };
  const handleToAfter = () => {
    // if (selectedOption) {
    // 선택된 옵션이 있을 때만 다음 페이지로 이동
    console.log(selectedOption, password); // 선택된 옵션과 비밀번호 확인
    navigate("/SendFinal");
    // } else {
    //   // 선택된 옵션이 없으면 경고 메시지 또는 다른 처리를 수행
    //   alert("비밀번호를 입력해주세요");
    // }
  };

  const handleOptionClick = (option: any) => {
    dispatch(setOption(option));
  };
  const handleKeypadClick = (number: any) => {
    // 비밀번호 입력창에 숫자 추가
    setPassword((prevPassword) => prevPassword + number);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div>송금 비밀번호 입력</div>
      <div>
        {/* 비밀번호 입력창 */}
        <input type="password" value={password} readOnly />
      </div>
      <div>
        {/* 키패드 생성 */}
        <div>
          {[1, 2, 0, 3].map((number) => (
            <button key={number} className="sendpwd-button" onClick={() => handleKeypadClick(number)}>
              {number === 0 ? <img src={Hanaicon} alt="Hana" className="keypad-image" /> : number}
            </button>
          ))}
        </div>
        <div>
          {[4, 5, 0, 6].map((number) => (
            <button key={number} className="sendpwd-button" onClick={() => handleKeypadClick(number)}>
              {number === 0 ? <img src={Hanaicon} alt="Hana" className="keypad-image" /> : number}
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
