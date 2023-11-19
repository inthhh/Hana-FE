import React, { useEffect, useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "../../redux/store"; // setOption import 추가

interface Number {
  toCustomerId: number;
  accountNumber: string;
  bankCode: string;
  phoneNumber: string;
  numberName: string;
}

// 연락처 조회 함수
function Send1_2() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [selectedOption, setSelectedOption] = useState(null);
  const selectedOption = useSelector((state: any) => state.selectedOption);

  const [numbers, setNumbers] = useState<Number[]>([]);
  useEffect(() => {
    fetch("https://with-pet-be.org/api/numbers")
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 200) {
          setNumbers(data.data);
          console.log(data.data);
        } else {
          console.error("Error fetching accounts:", data.message);
        }
      })
      .catch((error) => {
        // Handle network error
        console.error("Network error:", error);
      });
  }, []);

  const handleToBefore = () => {
    navigate("/Send1_1");
  };
  const handleToAfter = () => {
    if (selectedOption) {
      // 선택된 옵션이 있을 때만 다음 페이지로 이동
      console.log(selectedOption);
      navigate("/Send1_3");
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
      <div>연락처</div>
      {numbers.map((number, index) => (
        <div key={index} className="send-box" style={{ height: "150px", marginBottom: "10px" }}>
          {number.numberName}
          <br />
          {number.phoneNumber}
        </div>
      ))}
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

export default Send1_2;
