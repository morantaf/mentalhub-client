import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
    display: "flex",
    alignItems: "center",
    maxWidth: "600px",
    margin: "auto",
  },
  submit: {
    margin: theme.spacing(3, 1, 2),
    height: "45px",
  },
}));

export default function SearchForm(props) {
  const [search, setSearch] = useState("");
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchPractician(search);
  };

  const handleClick = (e) => {
    props.searchPractician();
  };

  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <TextField
          variant="outlined"
          fullWidth
          id="search"
          label="Search the specialization you need"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Search
        </Button>
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={handleClick}
          className={classes.submit}
        >
          See all
        </Button>
      </form>
    </div>
  );
}
