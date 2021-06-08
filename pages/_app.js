import "../styles/globals.css";
import Home from "../src/home";
import NoSSR from "@mpth/react-no-ssr";
// import { ThemeProvider } from "@material-ui/core/styles";
// import Theme from "../src/component/theme";
import { GoogleFonts } from "next-google-fonts";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap" />
      <NoSSR>
        <Home></Home>
      </NoSSR>
    </React.Fragment>
  );
}

export default MyApp;
