import React, { useState, useEffect } from "react";
import request from "superagent";
import { connect, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import PresentationCard from "./PresentationCard";
import PricesCard from "./PricesCard";
import SpecializationsCard from "./SpecializationsCard";
import EducationCard from "./EducationCard";
import ContactCard from "./ContactCard";
import { singlePractician } from "../store/actions/practicianAction";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const baseUrl = "http://localhost:4000";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    flexDirection: "column"
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  },
  card: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: "20%",
    width: 500
  },
  cardIcon: {
    alignSelf: "center",
    marginRight: 10
  },
  background: {
    backgroundColor: "azure"
  },
  top: {
    height: 300,
    backgroundColor: "lightsteelblue"
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
    <div className={classes.background}>
      <div className={classes.top} />
      {practician ? (
        <Grid container className={classes.root} spacing={2}>
          <PresentationCard
            description={practician.presentation}
            languages={practician.user.languages}
            style={classes}
          />
          <PricesCard pricesList={practician.prices} style={classes} />
          <SpecializationsCard
            specializationsList={practician.specializations}
            style={classes}
          />
          <EducationCard education={practician.education} style={classes} />
          <ContactCard
            style={classes}
            email={practician.user.email}
            phoneNumber={practician.user.whatsAppNumber}
          />
        </Grid>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default connect(null)(PracticianProfile);
