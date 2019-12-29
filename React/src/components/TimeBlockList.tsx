import React from "react";
import { TimeBlock } from "./TimeBlock";

const timeBlocks: Array<TimeBlock> = [
  { minutes: 15, text: "breakfast", color: "lightblue" },
  { minutes: 45, text: "lunch", color: "lightgreen" }
];

export const TimeBlockList: React.FC = () => {
  return (
    <div>
      {timeBlocks.map((timeBlock, i) => (
        <TimeBlock timeBlock={timeBlock} key={i} />
      ))}
    </div>
  );
};
