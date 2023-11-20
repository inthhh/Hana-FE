import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "../../redux/store"; // setOption import 추가
import HanaBoy from "../../imgs/hanaBoy.png";
import { reverse } from "dns";

function Send1_3() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [selectedOption, setSelectedOption] = useState(null);
  const selectedOption = useSelector((state: any) => state.selectedOption);
  const handleToBefore = () => {
    navigate("/Send1_2");
  };
  const handleToAfter = () => {
    if (selectedOption) {
      // 선택된 옵션이 있을 때만 다음 페이지로 이동
      console.log(selectedOption);
      navigate("/Sendhowmuch");
    } else {
      // 선택된 옵션이 없으면 경고 메시지 또는 다른 처리를 수행
      alert("선택해주세요.");
    }
  };

  // const handleOptionClick = (option: any) => {
  //   dispatch(setOption(option));
  // };

  const receiver = useSelector((state: any) => state.receiver);
  const receiveAccount = useSelector((state: any) => state.receiveAccount);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="sub-title">
        받는 사람과 은행을
        <br />
        확인해주세요.
      </div>
      <img src={HanaBoy} style={{ width: "160px" }} />
      <div style={{ marginTop: "40px", fontSize: "32px" }}>
        <div>
          성함 : <span>{receiver}</span>
        </div>
        <div>
          대표은행 : <span>{receiveAccount}은행</span>
        </div>
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

export default Send1_3;
