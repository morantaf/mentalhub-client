import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import request from "superagent";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import MoodIcon from "@material-ui/icons/Mood";
import Button from "@material-ui/core/Button";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import SpecializationForm from "./SpecializationForm";

const baseUrl = "http://localhost:4000";
// const baseUrl = "https://hidden-falls-55871.herokuapp.com";

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function SpecializationsCard(props) {
  const classes = useStyles();
  const [specializations, setSpecializations] = useState(
    props.specializationsList
  );
  const [addForm, setAddForm] = useState(false);
  const auth = useSelector((state) => state.user.auth);

  const addSpecialization = async (data) => {
    try {
      const updatedSpecializations = specializations
        ? { specializations: [...specializations, data] }
        : { specializations: [data] };

      const updatedPractician = await request
        .put(`${baseUrl}/practicians/${props.loggedInPracticianId}`)
        .send(updatedSpecializations)
        .set("Authorization", `Bearer ${auth}`);

      setSpecializations(updatedPractician.body.specializations);

      setAddForm(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (specializationToDelete) => {
    try {
      const updatedSpecializationList = specializations.filter(
        (specialization) => specialization !== specializationToDelete
      );

      const listToSend = { specializations: updatedSpecializationList };

      const updatedPractician = await request
        .put(`${baseUrl}/practicians/${props.loggedInPracticianId}`)
        .send(listToSend)
        .set("Authorization", `Bearer ${auth}`);

      setSpecializations(updatedPractician.body.specializations);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className={props.style.card} variant="outlined">
      <CardContent>
        <Grid container>
          <MoodIcon className={props.style.cardIcon} />
          <Typography variant="h5" component="h2">
            Specializations
          </Typography>
        </Grid>
        <hr />
        {specializations
          ? specializations.map((specialization) => {
              const icon = <TagFacesIcon />;

              return props.loggedInPracticianId === props.practicianId ? (
                <Chip
                  label={specialization}
                  onDelete={() => handleDelete(specialization)}
                  className={classes.chip}
                />
              ) : (
                <Chip
                  label={specialization}
                  icon={icon}
                  className={classes.chip}
                />
              );
            })
          : null}
        {props.loggedInPracticianId === props.practicianId ? (
          <div>
            {addForm ? (
              <SpecializationForm addSpecialization={addSpecialization} />
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setAddForm(true)}
              >
                Add
              </Button>
            )}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
