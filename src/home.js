import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import StyledAppbar from "./component/styledAppbar";
import StyledSlider from "./component/styledSlider";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledAppbar></StyledAppbar>
      <StyledSlider></StyledSlider>
    </div>
  );
}
