import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    height: 250,
    overflow: "hidden",
    backgroundImage: "linear-gradient(#4791db, #00bfff)",
    flexDirection: "column",
    placeContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <Typography variant="h3" className={classes.text} align="center">
          Improve your mental health
          <br /> without leaving the comfort of your home
        </Typography>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}
