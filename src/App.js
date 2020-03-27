import React from "react";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/login" component={LoginForm} />
      <Footer />
    </div>
  );
}

export default App;
