import React, { useEffect, useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";

interface CalendarProps {
  year: number;
  month: number;
  onChangeMonth: (newYear: number, newMonth: number) => void;
}

const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();

const Calendar: React.FC<CalendarProps> = ({ year, month, onChangeMonth }) => {
  console.log("calendar loading...");
  const numDays = daysInMonth(year, month);
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const weeks = Math.ceil((numDays + firstDayOfWeek) / 7);
  const [calendarData, setCalendarData] = useState<any>(null);

  useEffect(() => {
    // API 호출
    const fetchData = async () => {
      try {
        const response = await fetch(`https://with-pet-be.org/api/calendar/date?year=${year}&month=${month + 1}`);
        if (response.ok) {
          const result = await response.json();
          console.log("API Response:", result);
          setCalendarData(result.data);
        } else {
          console.error("API Error:", response.statusText);
        }
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, [year, month]);

  const renderDays = () => {
    const days = [];
    if (!calendarData) {
      return null;
    }

    for (let i = 1; i <= numDays; i++) {
      const dayData = calendarData.calendarDateResponses.find((data: any) => data.day === i);
      const hasEvent = dayData && dayData.check;
      // console.log(hasEvent);
      days.push(
        <div key={i} className={`day`} onClick={() => handleDateClick(i)}>
          <span className="date">{i}</span>
          <div className={`${hasEvent ? "events" : "noevent"}`}>&nbsp;</div>
        </div>
      );
    }
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.unshift(<div key={`empty-${i}`} className="empty-day" />);
    }
    return days;
  };

  const navigate = useNavigate();

  const handleDateClick = (day: number) => {
    // 클릭한 날짜의 경로를 동적으로 생성하여 페이지 이동
    navigate(`/schedule/${year}/${month + 1}/${day}`);
  };

  const handlePrevMonth = () => {
    let newYear = year;
    let newMonth = month - 1;
    if (newMonth < 0) {
      newYear = year - 1;
      newMonth = 11; // 12월로 설정
    }
    console.log(newMonth);
    console.log(newYear);
    onChangeMonth(newYear, newMonth);
  };

  const handleNextMonth = () => {
    let newYear = year;
    let newMonth = month + 1;
    if (newMonth > 11) {
      newYear = year + 1;
      newMonth = 0; // 1월로 설정
    }
    console.log(newMonth);
    console.log(newYear);
    onChangeMonth(newYear, newMonth);
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <span>
          {year}년 {month + 1}월
        </span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="days">
        <div className="day-label" style={{ color: "red" }}>
          일
        </div>
        <div className="day-label">월</div>
        <div className="day-label">화</div>
        <div className="day-label">수</div>
        <div className="day-label">목</div>
        <div className="day-label">금</div>
        <div className="day-label" style={{ color: "blue" }}>
          토
        </div>
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendar;
