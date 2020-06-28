import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "inherit",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SpecializationForm(props) {
  const classes = useStyles();
  const [specialization, setSpecialization] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addSpecialization(specialization);
  };

  return (
    <Container component="div" maxWidth="xs">
      <CssBaseline />

      <Paper elevation={3} className={classes.paper}>
        <Typography component="h1" variant="h5">
          Specialization
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid>
              <TextField
                variant="outlined"
                fullWidth
                id="specializations"
                label="Specializations"
                name="specializations"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add
            </Button>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
