import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../store/actions/userActions";
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

function LoginForm({ login }) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log("submit");
    login(email, password);
  };

  console.log("email ?", email);
  return (
    <Paper elevation={3}>
      <div className={classes.root}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            label="Email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <TextField
            required
            label="password"
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </Paper>
  );
}

export default connect(null, { login })(LoginForm);
