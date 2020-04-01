import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import request from "superagent";
import PracticianCard from "./PracticianCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const baseUrl = "http://localhost:4000";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    marginTop: "5%",
    marginBottom: "5%"
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

const PracticiansList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const practiciansList = useSelector(state => state.practician.list);
  console.log("practiciansList ?", practiciansList);
  useEffect(() => {
    async function fetchPracticians() {
      try {
        const practicians = await request.get(`${baseUrl}/practicians`);
        const action = {
          type: "FETCH_PRACTICIANS",
          payload: practicians.body
        };
        dispatch(action);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPracticians();
  }, []);

  return (
    <div>
      {practiciansList ? (
        <Grid container className={classes.root} spacing={4}>
          {practiciansList.map(practician => {
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
    </div>
  );
};

export default connect(null)(PracticiansList);
