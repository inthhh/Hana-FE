import React, { useState } from "react";
import "../../App.css";
import Calendar from "./Calendar";

function MainCal() {
  const [currentYear, setCurrentYear] = useState(2023);
  const [currentMonth, setCurrentMonth] = useState(9); // + 1 (default)

  const handleChangeMonth = (newYear: number, newMonth: number) => {
    setCurrentYear(newYear);
    setCurrentMonth(newMonth);
  };
  return (
    <div>
      <Calendar year={currentYear} month={currentMonth} onChangeMonth={handleChangeMonth} />
    </div>
  );
}
export default MainCal;
