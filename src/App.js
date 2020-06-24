import React from "react";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";
import SignupForm from "./components/SignupForm";
import PracticianProfile from "./components/PracticianProfile";
import PracticiansList from "./components/PracticiansShowcase";
import PracticianForm from "./components/PracticianForm";
import Homepage from "./components/Homepage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import SearchPage from "./components/SearchPage";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4791db",
      light: "#00bfff",
    },
    secondary: {
      main: "#eef2f6",
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue"',
  },
});

const useStyles = makeStyles({
  root: {
    backgroundColor: "#eef2f6",
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <main className={classes.root}>
        <Navbar />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/practicians/:id" component={PracticianProfile} />
        <Route path="/practician-form" component={PracticianForm} />
        <Route exact path="/practicians" component={SearchPage} />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
