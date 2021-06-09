import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import StyledMenu from "../component/styledMenu";
import Image from "next/image";
import { GoogleFonts } from "next-google-fonts";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    "& .MuiButton-containedPrimary": {
      borderRadius: "0.063rem",
      color: "#000",
      backgroundColor: "#fff",
    },
    "& .MuiAppBar-colorPrimary": {
      color: "#000",
      backgroundColor: "#fff",
    },
    "& .MuiButton-contained": {
      boxShadow: "none",
      margin: theme.spacing(2),
    },
    "& .MuiButton-root": {
      fontFamily: "Jura",
      fontWeight: "400",
      fontSize: "1rem",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    borderBottom: "2px solid #b6b6b6",
    background: "none",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "#27221f",
    fontFamily: "Jura",
    fontWeight: "400",
    fontSize: "0.813rem",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  logo: {
    padding: "1rem",
  },
  menu: {
    margin: "auto",
    display: "inline-flex",
  },
}));

export default function PrimarySearchAppBar() {
  <GoogleFonts href="https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap" />;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Image
            className={classes.logo}
            src="/perfect.png"
            alt="Picture of the author"
            width={150}
            height={60}
          />
          <div className={classes.menu}>
            <StyledMenu label={"New"}></StyledMenu>
            <StyledMenu label={"Men"}></StyledMenu>
            <StyledMenu label={"Women"}></StyledMenu>
            <StyledMenu label={"Kids"}></StyledMenu>
            <StyledMenu label={"Help"}></StyledMenu>
          </div>
          {/* <div className={classes.grow} /> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
