import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  list: {
    padding: ".3rem",
    color: "#27221f",
    fontWeight: "400",
    fontSize: "1rem",
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ul>
            <li className={classes.list}>
              <a href="#">Casual Shoes</a>
            </li>
            <li className={classes.list}>
              <a href="#">Formal Shoes</a>
            </li>
            <li className={classes.list}>
              <a href="#">Mens Sandal</a>
            </li>
            <li className={classes.list}>
              <a href="#">Sports</a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={3}>
          <ul>
            <li className={classes.list}>
              <a href="#">Casual Shoes</a>
            </li>
            <li className={classes.list}>
              <a href="#">Formal Shoes</a>
            </li>
            <li className={classes.list}>
              <a href="#">Mens Sandal</a>
            </li>
            <li className={classes.list}>
              <a href="#">Sports</a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={3}>
          <ul>
            <li className={classes.list}>
              <a href="#">Casual Shoes</a>
            </li>
            <li className={classes.list}>
              <a href="#">Formal Shoes</a>
            </li>
            <li className={classes.list}>
              <a href="#">Mens Sandal</a>
            </li>
            <li className={classes.list}>
              <a href="#">Sports</a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={3}>
          <ul>
            <li className={classes.list}>
              <a href="#">Casual Shoes</a>
            </li>
            <li className={classes.list}>
              <a href="#">Formal Shoes</a>
            </li>
            <li className={classes.list}>
              <a href="#">Mens Sandal</a>
            </li>
            <li className={classes.list}>
              <a href="#">Sports</a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}
