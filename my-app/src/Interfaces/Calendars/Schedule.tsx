import React, { useEffect, useState } from "react";
import "../Main.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

interface ScheduleItem {
  houseName: string;
  receiptEndDate: string;
  address: string;
}

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

  const [scheduleData, setScheduleData] = useState<ScheduleItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://with-pet-be.org/api/calendar?year=${year}&month=${month}&day=${day}`);
        const data = await response.json();
        setScheduleData(data.data);
      } catch (error) {
        console.error("Error fetching schedule data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>
        {year}년 {month}월 {day}일 {dayOfWeek}요일
      </h2>
      {/* api에서 불러온 정보 리스트*/}
      {scheduleData?.map((item, index) => (
        <div className="send-box" key={index}>
          <div>
            <p>{item.houseName}</p>
            <p>{item.receiptEndDate}</p>
            <p>{item.address}</p>
          </div>
        </div>
      ))}
      <div className="send-box" style={{ height: "50px", background: "rgba(0, 132, 133, 0.20)", fontWeight: "bold" }}>
        <span style={{ fontWeight: "bold" }}>복지서비스&nbsp;</span> 알아보기
      </div>
      <div className="buttonContainer">
        <div className="beforebtn" onClick={handleToBefore}>
          &lt; 이전
        </div>
      </div>
    </div>
  );
};

export default Schedule;
