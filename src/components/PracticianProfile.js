import React, { useState, useEffect } from "react";
import request from "superagent";
import { connect, useDispatch } from "react-redux";
import { singlePractician } from "../store/actions/practicianAction";
import { useSelector } from "react-redux";
import InformationCard from "./InformationCard";
import PricesCard from "./PricesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const baseUrl = "http://localhost:4000";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  },
  card: {
    marginBottom: 25,
    marginTop: 25
  }
}));

function PracticianProfile(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const practician = useSelector(state => state.practician.displayedPractician);
  console.log(practician);
  useEffect(() => {
    const id = props.match.params.id;
    async function fetchPractician(id) {
      const practician = await request.get(`${baseUrl}/practicians/${id}`);
      const action = singlePractician(practician.body);
      dispatch(action);
    }
    fetchPractician(id);
  }, []);
  return (
    <div>
      {practician ? (
        <Grid container className={classes.root} spacing={2}>
          <InformationCard
            description={practician.presentation}
            style={classes}
          />
          <PricesCard pricesList={practician.prices} style={classes} />
        </Grid>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default connect(null)(PracticianProfile);
