import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { fetchPracticians } from "../store/actions/practicianAction";
import { PracticianListing } from "./PracticianListing";

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

const PracticiansList = ({ fetchPracticians }) => {
  const classes = useStyles();
  const practiciansList = useSelector((state) => state.practician.list);
  useEffect(() => {
    fetchPracticians(10, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      {practiciansList ? (
        <Grid container className={classes.list} direction="column" spacing={2}>
          {practiciansList.map((practician) => {
            return (
              <Grid item>
                <PracticianListing
                  firstName={practician.user.firstName}
                  lastName={practician.user.lastName}
                  profilePicture={practician.user.profilePicture}
                  price={practician.prices}
                  specializations={practician.specializations}
                  languages={practician.user.languages}
                  id={practician.id}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : null}
    </div>
  );
};

export default connect(null, { fetchPracticians })(PracticiansList);
