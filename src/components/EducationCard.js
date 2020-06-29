import React, { useState } from "react";
import { useSelector } from "react-redux";
import request from "superagent";
import EducationForm from "./EducationForm";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SchoolIcon from "@material-ui/icons/School";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

// const baseUrl = "http://localhost:4000";
const baseUrl = "https://hidden-falls-55871.herokuapp.com";

export default function EducationCard(props) {
  const [education, setEducation] = useState(props.education);
  const auth = useSelector((state) => state.user.auth);
  const [addForm, setAddForm] = useState(false);

  const addEducation = async (data) => {
    try {
      const updatedEducation = education
        ? { education: [...education, data] }
        : { education: [data] };

      const updatedPractician = await request
        .put(`${baseUrl}/practicians/${props.loggedInPracticianId}`)
        .send(updatedEducation)
        .set("Authorization", `Bearer ${auth}`);

      setEducation(updatedPractician.body.education);

      setAddForm(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (educationToDelete) => {
    try {
      const updatedEducationList = education.filter(
        (education) => education !== educationToDelete
      );

      const listToSend = { education: updatedEducationList };

      const updatedPractician = await request
        .put(`${baseUrl}/practicians/${props.loggedInPracticianId}`)
        .send(listToSend)
        .set("Authorization", `Bearer ${auth}`);

      setEducation(updatedPractician.body.education);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className={props.style.card} variant="outlined">
      <CardContent>
        <Grid container>
          <SchoolIcon className={props.style.cardIcon} />
          <Typography variant="h5" component="h2">
            Education
          </Typography>
        </Grid>
        <hr />
        {education
          ? props.education.map((education) => {
              return (
                <div>
                  <Typography variant="h6" component="h6">
                    <b>{education.diploma}</b>
                  </Typography>
                  <Typography variant="body1">
                    <b>{education.school}</b>
                  </Typography>
                  <Typography variant="body2">
                    Date : {education.date}
                  </Typography>
                  {props.loggedInPracticianId === props.practicianId ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleDelete(education)}
                    >
                      Delete
                    </Button>
                  ) : null}
                  <hr />
                </div>
              );
            })
          : null}
        {props.loggedInPracticianId === props.practicianId ? (
          <div>
            {addForm ? (
              <EducationForm addEducation={addEducation} />
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
