import React from "react";
import NavbarContainer from "./components/NavbarContainer";
import { Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <Route exact path="/login" component={LoginForm} />
    </div>
  );
}

export default App;
