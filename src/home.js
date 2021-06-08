import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import StyledAppbar from "./component/styledAppbar";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledAppbar></StyledAppbar>
    </div>
  );
}
