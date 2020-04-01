import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import SchoolIcon from "@material-ui/icons/School";
import Grid from "@material-ui/core/Grid";

export default function EducationCard(props) {
  const education = props.education;

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
        {education.map(education => {
          return (
            <div>
              <p>
                <b>{education}</b>
              </p>
              <hr />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
