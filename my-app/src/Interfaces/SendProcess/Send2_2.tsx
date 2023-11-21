import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "../../redux/store"; // setOption import 추가

function Send2_2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [selectedOption, setSelectedOption] = useState(null);
  const selectedOption = useSelector((state: any) => state.selectedOption);
  const [accountNumber, setAccountNumber] = useState("");

  const handleToBefore = () => {
    navigate("/Send2_1");
  };
  const handleToAfter = () => {
    navigate("/Sendhowmuch");
  };

  const handleOptionClick = (option: any) => {
    dispatch(setOption(option));
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div className="sub-title" style={{ height: "50px", marginTop: "20px" }}>
        누구에게 보낼까요?
      </div>
      <div className={`send-box`} style={{ height: "200px", borderRadius: "50px" }}>
        <div>
          계좌번호 입력하기
          <div>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              placeholder="입력"
              style={{
                backgroundColor: "lightgray",
                textAlign: "center",
                width: "80%",
                height: "50px",
                fontSize: "16px",
                margin: "10px auto",
              }}
            />
          </div>
          <div
            style={{
              width: "300px",
              background: "gray",
              color: "white",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
            }}
          >
            {" "}
            복사한 계좌번호 붙여넣기
          </div>
        </div>
      </div>

      <div className={`send-box`} style={{ height: "180px", borderRadius: "50px", marginTop: "10px" }}>
        <div>
          은행 선택하기
          <input
            type="text"
            // value={accountNumber}
            // onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="은행 검색"
            style={{
              backgroundColor: "lightgray",
              textAlign: "center",
              width: "80%",
              height: "50px",
              fontSize: "16px",
              margin: "10px auto",
            }}
          />
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

export default Send2_2;
