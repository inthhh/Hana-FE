import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "../../redux/store"; // setOption import 추가

function Sendhowmuch() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [selectedOption, setSelectedOption] = useState(null);
  const selectedOption = useSelector((state: any) => state.selectedOption);
  const handleToBefore = () => {
    navigate("/Send1_3");
  };
  const handleToAfter = () => {
    if (selectedOption) {
      // 선택된 옵션이 있을 때만 다음 페이지로 이동
      console.log(selectedOption);
      navigate("/Sendpwd");
    } else {
      // 선택된 옵션이 없으면 경고 메시지 또는 다른 처리를 수행
      alert("선택해주세요.");
    }
  };

  const handleOptionClick = (option: any) => {
    dispatch(setOption(option));
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div>금액을 선택해주세요.</div>
      <div>얼마를 보낼까요?</div>
      <div>
        <div>1만</div>
        <div>5만</div>
        <div>10만</div>
      </div>
      <div>
        <div>100만</div>
        <div>전액</div>
        <div>직접 입력</div>
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
