import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Chip from "@material-ui/core/Chip";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "70%",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  gridItem: {
    alignSelf: "center",
  },
}));

export const PracticianListing = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container direction="row" spacing={2}>
          <Grid item>
            <ButtonBase
              className={classes.image}
              component={Link}
              to={`/practicians/${props.id}`}
            >
              {props.profilePicture ? (
                <img className={classes.img} src={props.profilePicture} />
              ) : (
                <img
                  className={classes.img}
                  src="https://www.kindpng.com/picc/m/22-223965_no-profile-picture-icon-circle-member-icon-png.png"
                />
              )}
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="row" spacing={2}>
              <Grid item className={classes.gridItem} xs>
                <Typography gutterBottom variant="subtitle1">
                  {props.firstName} {props.lastName}
                </Typography>
              </Grid>
              <Grid item className={classes.gridItem} xs>
                <Typography gutterBottom variant="subtitle1">
                  <b>Specializations </b>:
                </Typography>
                {props.specializations
                  ? props.specializations.map((specialization) => {
                      const icon = <TagFacesIcon />;

                      return props.loggedInPracticianId ===
                        props.practicianId ? (
                        <Chip label={specialization} className={classes.chip} />
                      ) : (
                        <Chip
                          label={specialization}
                          icon={icon}
                          className={classes.chip}
                        />
                      );
                    })
                  : null}
              </Grid>
              <Grid item className={classes.gridItem} xs>
                <Typography gutterBottom variant="subtitle1">
                  <b>Languages spoken </b>:
                </Typography>
                {props.languages
                  ? props.languages.map((languages) => {
                      return (
                        <Chip label={languages} className={classes.chip} />
                      );
                    })
                  : null}
              </Grid>
              <Grid item className={classes.gridItem}>
                <ButtonBase component={Link} to={`/practicians/${props.id}`}>
                  Learn More
                </ButtonBase>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PracticianListing);
