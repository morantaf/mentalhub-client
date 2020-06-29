import React from "react";
import PracticiansList from "./PracticiansList";
import SearchForm from "./SearchForm";
import { fetchPracticians } from "../store/actions/practicianAction";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "73vh",
  },
}));

function SearchPage({ fetchPracticians }) {
  const classes = useStyles();
  const searchPractician = (data) => {
    fetchPracticians(10, 0, data);
  };

  return (
    <div className={classes.root}>
      <SearchForm searchPractician={searchPractician} />
      <PracticiansList />
    </div>
  );
}

export default connect(null, { fetchPracticians })(SearchPage);
