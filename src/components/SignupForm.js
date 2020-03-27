import React from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16)
    }
  }
}));

export default function UserForm(props) {
  const classes = useStyles();

  return (
    <Paper elevation={3}>
      <div className={classes.root}>
        <h1>Signup</h1>
        <form onSubmit={props.onSubmit}>
          <TextField
            required
            label="Email"
            name="email"
            value={props.values.email}
            onChange={props.onChange}
          />
          <TextField
            required
            label="Username"
            name="username"
            value={props.values.username}
            onChange={props.onChange}
          />

          <TextField
            required
            label="password"
            name="password"
            type="password"
            value={props.values.password}
            onChange={props.onChange}
          />

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </Paper>
  );
}
