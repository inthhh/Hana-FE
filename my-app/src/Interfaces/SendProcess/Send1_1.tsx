import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "../../redux/store"; // setOption import 추가
import HanaGirl from "../../imgs/효녀하나.png";

function Send1_1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [selectedOption, setSelectedOption] = useState(null);
  const selectedOption = useSelector((state: any) => state.selectedOption);
  const handleToBefore = () => {
    navigate("/SendSecond");
  };
  const handleToAfter = () => {
    navigate("/Send1_2");
  };

  const handleOptionClick = (option: any) => {
    dispatch(setOption(option));
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="title">누구에게 돈을 보낼까요?</div>
      <img src={HanaGirl} style={{ width: "200px" }} />
      <div
        className={`send-box ${selectedOption === "계좌번호" ? "selected" : ""}`}
        onClick={() => handleOptionClick("계좌번호")}
      >
        연락처에서 찾기
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

export default Send1_1;
