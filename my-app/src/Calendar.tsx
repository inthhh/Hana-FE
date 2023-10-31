import React, { useState } from "react";
import "./App.css";

interface CalendarProps {
  year: number;
  month: number;
}

const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();

const Calendar: React.FC<CalendarProps> = ({ year, month }) => {
  console.log("calendar loading...");
  const numDays = daysInMonth(year, month);
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const weeks = Math.ceil((numDays + firstDayOfWeek) / 7);

  const renderDays = () => {
    const days = [];
    for (let i = 1; i <= numDays; i++) {
      days.push(
        <div key={i} className="day">
          {i}
        </div>
      );
    }
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.unshift(<div key={`empty-${i}`} className="empty-day" />);
    }
    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
        <span>
          {year}년 {month + 1}월
        </span>
      </div>
      <div className="days">
        <div className="day-label">일</div>
        <div className="day-label">월</div>
        <div className="day-label">화</div>
        <div className="day-label">수</div>
        <div className="day-label">목</div>
        <div className="day-label">금</div>
        <div className="day-label">토</div>
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
