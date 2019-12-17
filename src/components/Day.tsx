import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

interface DayProps {
  day: Day;
}

const useStyles = makeStyles({
  weekend: {
    color: "lightskyblue"
  },
  dayArea: {
    backgroundColor: "rgba(255, 255, 240, 0.9)",
    borderRadius: "4px",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    color: "grey",
    textAlign: "left",
    width: '150px'
  }
});

export const Day = (props: DayProps) => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        variant="h2"
        className={props.day.isWeekend ? classes.weekend : undefined}
      >
        {props.day.nameOfTheDayOfTheWeek}
      </Typography>
      <div className={classes.dayArea}>
        <div data-hour="seven">
          <Typography variant="body2">7:00-7:15</Typography>
        </div>
        <div data-hour="seven-fifteen">
          <Typography variant="body2">7:15-7:30</Typography>
        </div>
        <div data-hour="seven-thirty">
          <Typography variant="body2">7:30-7:45</Typography>
        </div>
        <div data-hour="seven-fortyfive">
          <Typography variant="body2">7:45-8:00</Typography>
        </div>
        <div data-hour="eight">
          <Typography variant="body2">8:00-8:15</Typography>
        </div>
        <div data-hour="eight-fifteen">
          <Typography variant="body2">8:15-8:30</Typography>
        </div>
        <div data-hour="eight-thirty">
          <Typography variant="body2">8:30-8:45</Typography>
        </div>
        <div data-hour="eight-fortyfive">
          <Typography variant="body2">8:45-9:00</Typography>
        </div>
      </div>
    </div>
  );
};

/*
export const Day: React.FC<DayProps> = ({ day }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        variant="h2"
        className={day.isWeekend ? classes.weekend : undefined}
      >
        {day.nameOfTheDayOfTheWeek}
      </Typography>
      <div className={classes.dayArea}></div>
    </div>
  );
};
*/
