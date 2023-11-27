import React, { useState } from "react";
import "../../App.css";
import Calendar from "./Calendar";
import { useNavigate } from "react-router-dom";

function MainCal() {
  const [currentYear, setCurrentYear] = useState(2023);
  const [currentMonth, setCurrentMonth] = useState(11); // + 1 (default)

  const handleChangeMonth = (newYear: number, newMonth: number) => {
    setCurrentYear(newYear);
    setCurrentMonth(newMonth);
  };

  const navigate = useNavigate();

  const handleToBefore = () => {
    navigate("/SendFirst");
  };
  return (
    <div>
      <Calendar year={currentYear} month={currentMonth} onChangeMonth={handleChangeMonth} />
      <div className="buttonContainer">
        <div className="beforebtn" onClick={handleToBefore}>
          &lt; 이전
        </div>
      </div>
    </div>
  );
}
export default MainCal;
