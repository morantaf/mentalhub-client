import React, { useState } from "react";
import { render } from "react-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton
} from "@devexpress/dx-react-scheduler-material-ui";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const theme = createMuiTheme({ palette: { type: "light", primary: blue } });

const useStyles = makeStyles({
  root: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: "20%",
    width: 800
  }
});

export default function Calendar() {
  const classes = useStyles();
  const [data, setData] = useState("");
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <Paper className={classes.root}>
      <Scheduler height={660}>
        <ViewState
          currentDate={currentDate}
          // onCurrentDateChange={this.currentDateChange}
        />
        <WeekView startDayHour={9} endDayHour={19} />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <Appointments />
      </Scheduler>
    </Paper>
  );
}
