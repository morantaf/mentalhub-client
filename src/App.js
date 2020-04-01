import React from "react";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";
import SignupForm from "./components/SignupForm";
import PracticianProfile from "./components/PracticianProfile";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/practicians/:id" component={PracticianProfile} />
      <Footer />
    </div>
  );
}

export default App;
