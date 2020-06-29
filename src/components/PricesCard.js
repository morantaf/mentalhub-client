import React, { useState } from "react";
import { useSelector } from "react-redux";
import request from "superagent";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import EuroIcon from "@material-ui/icons/Euro";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PriceForm from "./PriceForm";

// const baseUrl = "http://localhost:4000";
const baseUrl = "https://hidden-falls-55871.herokuapp.com";

const useStyles = makeStyles({
  section: {
    display: "flex",
  },
  sectionTitle: {
    flex: 1,
  },
});

export default function PricesCard(props) {
  const classes = useStyles();
  const auth = useSelector((state) => state.user.auth);
  const pricesList = props.pricesList;
  const [prices, setPrices] = useState(pricesList);
  const [addForm, setAddForm] = useState(false);

  const addPrice = (data) => {
    const updatedPrice = prices
      ? { prices: [...prices, data] }
      : { prices: [data] };

    request
      .put(`${baseUrl}/practicians/${props.loggedInPracticianId}`)
      .send(updatedPrice)
      .set("Authorization", `Bearer ${auth}`)
      .then((res) => {
        setPrices(res.body.prices);
      });

    setAddForm(false);
  };

  const deletePrice = (priceToDelete) => {
    const updatedPriceList = prices.filter((price) => price !== priceToDelete);

    const priceListToSend = { prices: updatedPriceList };

    request
      .put(`${baseUrl}/practicians/${props.loggedInPracticianId}`)
      .send(priceListToSend)
      .set("Authorization", `Bearer ${auth}`)
      .then((res) => {
        setPrices(res.body.prices);
      });
  };

  return (
    <Card className={props.style.card} variant="outlined">
      <CardContent>
        <Grid container>
          <EuroIcon className={props.style.cardIcon} />
          <Typography variant="h5" component="h2">
            Prices
          </Typography>
        </Grid>
        <hr />
        {prices
          ? prices.map((price) => {
              return (
                <div>
                  <div className={classes.section}>
                    <p className={classes.sectionTitle}>{Object.keys(price)}</p>
                    <p>
                      <b>{Object.values(price)} €</b>
                    </p>
                  </div>
                  {props.loggedInPracticianId === props.practicianId ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => deletePrice(price)}
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
              <PriceForm addPrice={addPrice} />
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
