import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "../../redux/store"; // setOption import 추가

function Warning() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [selectedOption, setSelectedOption] = useState(null);
  const selectedOption = useSelector((state: any) => state.selectedOption);
  const [accountNumber, setAccountNumber] = useState("");

  const handleToBefore = () => {
    navigate("/Sendhowmuch");
  };
  const handleToAfter = () => {
    navigate("/Sendpwd");
  };

  const handleOptionClick = (option: any) => {
    dispatch(setOption(option));
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="sub-title" style={{ height: "50px", marginTop: "20px" }}>
        손님의 안전한 <br />
        금융거래를 위한 유의사항
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

export default Warning;
