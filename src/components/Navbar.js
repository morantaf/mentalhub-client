import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const auth = useSelector((state) => state.user.auth);
  const practicianId = useSelector((state) => state.user.practicianId);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Mentalhub
          </Typography>
          <Button color="inherit" component={Link} to="/practicians">
            List of practicians
          </Button>
          {!auth ? (
            <div>
              <Button color="inherit" component={Link} to="/login">
                LOGIN
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                SIGNUP
              </Button>
            </div>
          ) : (
            <div>
              {practicianId ? (
                <Button
                  color="inherit"
                  component={Link}
                  to={`/practicians/${practicianId}`}
                >
                  MY PROFILE
                </Button>
              ) : null}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
