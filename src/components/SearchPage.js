import React from "react";
import PracticiansList from "./PracticiansList";
import SearchForm from "./SearchForm";
import { fetchPracticians } from "../store/actions/practicianAction";
import { connect } from "react-redux";

function SearchPage({ fetchPracticians }) {
  const searchPractician = (data) => {
    fetchPracticians(data);
  };

  return (
    <div>
      <SearchForm searchPractician={searchPractician} />
      <PracticiansList />
    </div>
  );
}

export default connect(null, { fetchPracticians })(SearchPage);
