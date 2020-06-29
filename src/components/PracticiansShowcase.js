import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import PracticianCard from "./PracticianCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { fetchPracticians } from "../store/actions/practicianAction";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2%",
    marginBottom: "2%",
    backgroundColor: theme.palette.secondary.main,
  },
  list: {
    flexGrow: 1,
    justifyContent: "center",
    marginTop: "2%",
    marginBottom: "2%",
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const PracticiansShowcase = ({ fetchPracticians }) => {
  const classes = useStyles();
  const practiciansList = useSelector((state) => state.practician.list);
  useEffect(() => {
    fetchPracticians(3, 0);
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.text} align="center">
        Find your online psychotherapist
      </Typography>
      {practiciansList ? (
        <Grid container className={classes.list} spacing={4}>
          {practiciansList.map((practician) => {
            return (
              <Grid item>
                <PracticianCard
                  firstName={practician.user.firstName}
                  lastName={practician.user.lastName}
                  profilePicture={practician.user.profilePicture}
                  price={practician.prices}
                  id={practician.id}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : null}
      <Link to="/practicians">
        <Typography variant="h3" className={classes.text} align="center">
          Search for more
        </Typography>
      </Link>
    </div>
  );
};

export default connect(null, { fetchPracticians })(PracticiansShowcase);
