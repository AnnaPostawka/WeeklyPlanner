import React from "react";
import { Day } from "./Day";

const days: Array<Day> = [
  { nameOfTheDayOfTheWeek: "Monday", isWeekend: false }/*,
  { nameOfTheDayOfTheWeek: "Tuesday", isWeekend: false },
  { nameOfTheDayOfTheWeek: "Wednesday", isWeekend: false },
  { nameOfTheDayOfTheWeek: "Thursday", isWeekend: false },
  { nameOfTheDayOfTheWeek: "Friday", isWeekend: false },
  { nameOfTheDayOfTheWeek: "Saturday", isWeekend: true },
  { nameOfTheDayOfTheWeek: "Sunday", isWeekend: true }*/
];

export const DayList: React.FC = () => {
  return (
    <div>
      {days.map((day, i) => (
        <Day day={day} key={i} />
      ))}
    </div>
  );
};
