import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import request from "superagent";
s;
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import SubjectIcon from "@material-ui/icons/Subject";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

// const baseUrl = "http://localhost:4000";
const baseUrl = "https://hidden-falls-55871.herokuapp.com";

export default function PresentationCard(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.auth);
  const [editMode, setEditMode] = useState(false);
  const [presentation, setPresentation] = useState(props.presentation);
  const data = { presentation: presentation };

  const handleSubmit = (event) => {
    event.preventDefault();
    request
      .put(`${baseUrl}/practicians/${props.loggedInPracticianId}`)
      .send(data)
      .set("Authorization", `Bearer ${auth}`)
      .then((res) => {
        const action = { type: "UPDATE_PRESENTATION", payload: res.body };
        dispatch(action);
      });
    setEditMode(false);
  };
  console.log(editMode);
  return (
    <Card className={props.style.card} variant="outlined">
      <CardContent>
        <Grid container>
          <SubjectIcon className={props.style.cardIcon} />
          <Typography variant="h5" component="h2">
            Presentation
          </Typography>
        </Grid>
        <hr />
        {editMode ? (
          <div>
            <form onSubmit={handleSubmit} noValidate>
              <TextField
                name="presentation"
                variant="outlined"
                multiline
                fullWidth
                id="presentation"
                label="Write a short paragraphe about yourself"
                value={presentation}
                onChange={(e) => setPresentation(e.target.value)}
                autoFocus
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                // className={classes.submit}
              >
                Submit
              </Button>
            </form>
          </div>
        ) : (
          <div>
            <Typography variant="body2" component="p">
              {props.presentation}
            </Typography>
            {props.loggedInPracticianId === props.practicianId ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setEditMode(true)}
              >
                Edit
              </Button>
            ) : null}
          </div>
        )}

        {props.languages ? (
          <div>
            <hr />
            <Typography variant="body1" component="h2">
              <b>languages spoken:</b>
            </Typography>
            <ul>
              {props.languages.map((language) => (
                <li>{language}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
