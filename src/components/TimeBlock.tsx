import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

interface TimeBlockProps {
  timeBlock: TimeBlock;
}

const useStyles = makeStyles({
  card: {
    backgroundColor: (timeBlock: TimeBlock) => timeBlock.color,
    width: '150px',
  }
});

export const TimeBlock: React.FC<TimeBlockProps> = ({ timeBlock }) => {
  const classes = useStyles(timeBlock);
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="body2">{timeBlock.minutes} min</Typography>
        <Typography variant="body2">{timeBlock.text}</Typography>
      </CardContent>
    </Card>
  );
};

/*
const useStyles = makeStyles({
  card: {
    backgroundColor: "white"
  }
});

export const TimeBlock: React.FC<TimeBlockProps> = ({ timeBlock }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} style={{ backgroundColor: timeBlock.color }}>
      <CardContent>
        <Typography variant="body1">{timeBlock.minutes} min</Typography>
        <Typography variant="body2">{timeBlock.text}</Typography>
      </CardContent>
    </Card>
  );
};
*/
