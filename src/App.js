import React from "react";
import NavbarContainer from "./components/NavbarContainer";
import { Route } from "react-router-dom";
import LoginFormContainer from "./components/LoginFormContainer";

function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <Route exact path="/login" component={LoginFormContainer} />
    </div>
  );
}

export default App;
