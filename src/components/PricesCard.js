import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "50px 50px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const blabla = props.pricesList;
  console.log("blabla ?", blabla);

  return (
    <Card className={props.style.card} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Presentation
        </Typography>
        <hr />
        {blabla.map(price => {
          return (
            <div>
              <Typography variant="body2" component="p">
                {price}
              </Typography>
              <hr />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
