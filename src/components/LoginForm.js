import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../store/actions/userActions";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 24
  },
  form: {
    marginTop: theme.spacing(3)
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
    <div>
      <Container component="main" maxWidth="sm">
        <Paper className={classes.paper} elevation={3}>
          <h1>Login</h1>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  label="Email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  label="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Grid>
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default connect(null, { login })(LoginForm);
