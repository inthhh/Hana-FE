import React, { useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// Schedule.tsx
import { useParams } from "react-router-dom";

const Schedule: React.FC = () => {
  const { year, month, day } = useParams();

  const navigate = useNavigate();

  const handleToBefore = () => {
    navigate("/MainCalendar");
  };

  const getDayOfWeek = (year: string | undefined, month: string | undefined, day: string | undefined) => {
    const date = new Date(`${year}-${month}-${day}`);
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    return daysOfWeek[date.getDay()];
  };

  const dayOfWeek = getDayOfWeek(year, month, day);

  return (
    <div>
      <h2>
        {year}년 {month}월 {day}일 {dayOfWeek}요일
      </h2>
      <div className="buttonContainer">
        <div className="beforebtn" onClick={handleToBefore}>
          &lt; 이전
        </div>
      </div>
    </div>
  );
};

export default Schedule;
