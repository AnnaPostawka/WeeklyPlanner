import React from "react";
import { DayList } from "./components/DayList";
import { TimeBlockList } from "./components/TimeBlockList";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  App: {
    backgroundImage:
      "linear-gradient(to bottom right, #FF8E53 10%, #FE6B8B 70%)",
    minHeight: "100vh"/*
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white"*/
  },
  title: {
    fontSize: '4rem',
    color: 'white',
    padding: '1rem',
    marginBottom: '1rem',
    //borderBottom: '2px dotted white',
    textAlign: 'center'
  }
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <CssBaseline>
      <div className={classes.App}>
        <Typography className={classes.title} variant="h1">Weekly planner</Typography>
        <TimeBlockList />
        <DayList />
      </div>
    </CssBaseline>
  );
};

export default App;
