import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "../../redux/store"; // setOption import 추가

function Warning() {
  //   const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [selectedOption, setSelectedOption] = useState(null);

  const handleToBefore = () => {
    navigate("/Sendhowmuch");
  };
  const handleToAfter = () => {
    navigate("/Sendpwd");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="sub-title" style={{ marginTop: "20px" }}>
        <div>
          손님의 안전한 <br />
          금융거래를 위한 <span style={{ color: "red", fontWeight: "bold" }}>유의사항</span>
        </div>
      </div>
      <div className="warning-msg-box">
        <div className="warning-msg">
          1. 손님의 통장, 카드, 인감, 보안매체는
          <br /> 직접 관리하는 것이 안전해요.
        </div>
        <div className="warning-msg">
          2. 어떠한 경우라도 금융회사는 <br />
          전화로 비밀번호나 금융 거래를 묻지 않아요. <br />
          금융회사를 사칭하여 대출권유나
          <br />
          보안강화 조치를 요구하면 100% 사기이오니 <br />
          각별히 주의해주세요.
        </div>
        <div className="warning-msg">
          3. 의심스러운 경우에는 전화를 끊고 <br />
          반드시 금융회사에 확인하시어 <br />
          안전한 금융거래를 할 수 있도록 유의해주세요.
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

export default Warning;
