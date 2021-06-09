import "react-slideshow-image/dist/styles.css";
import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  slideDot: {
    "& .react-slideshow-container .default-nav": {
      display: "none",
    },
  },
}));

const slideImages = ["/banner1.png", "/banner2.png", "/banner3.jpg"];

export default function CustomizedMenus(props) {
  const classes = useStyles();
  return (
    <div className="slideContainer">
      <Slide className={classes.slideDot}>
        <div className="eachSlide">
          <Typography
            component="div"
            variant="body1"
            style={{ height: 600, width: "1500", position: "relative" }}
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              zIndex="999"
              height="100%"
              width="100%"
            >
              <img
                src="/banner1.png"
                style={{ backgroundImage: `url(${slideImages[0]})` }}
                alt="Picture of the author"
                height="100%"
                width="100%"
                backgroung-position="center"
                background-repeat="no-repeat"
                background-size="cover"
              />
            </Box>
            <Box
              position="absolute"
              top="0"
              left="0"
              zIndex="999999"
              height="100%"
              width="35%"
            >
              <div
                style={{
                  paddingTop: "10.75rem",
                  paddingBottom: "18.75rem",
                  paddingLeft: "5rem",
                  background:
                    "linear-gradient(91deg, #27221f, #282320, #0029290a)",
                }}
              >
                <h1
                  style={{
                    color: "white",
                    fontFamily: "Jura",
                    fontSize: "2.25rem",
                    fontWeight: 400,
                  }}
                >
                  We Produce The Best
                </h1>
                <h2
                  style={{
                    color: "white",
                    fontFamily: "Jura",
                    fontSize: "2.25rem",
                    fontWeight: 400,
                  }}
                >
                  Products In Market
                </h2>
                <a
                  style={{
                    color: "white",
                    fontFamily: "Jura",
                    fontSize: "1rem",
                    fontWeight: 400,
                  }}
                  href=""
                  target="_blank"
                >
                  Get Started -
                </a>
              </div>
            </Box>
          </Typography>
        </div>
        <div className="each-slide">
          <Typography
            component="div"
            variant="body1"
            style={{ height: 600, width: "1500", position: "relative" }}
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              zIndex="999"
              height="100%"
              width="100%"
            >
              <img
                src="/banner2.png"
                style={{ backgroundImage: `url(${slideImages[1]})` }}
                alt="Picture of the author"
                height="100%"
                width="100%"
                backgroung-position="center"
                background-repeat="no-repeat"
                background-size="cover"
              />
            </Box>
            <Box
              position="absolute"
              top="0"
              left="0"
              zIndex="999999"
              height="100%"
              width="35%"
            >
              <div
                style={{
                  paddingTop: "10.75rem",
                  paddingBottom: "18.75rem",
                  paddingLeft: "5rem",
                  background:
                    "linear-gradient(91deg, #27221f, #282320, #0029290a)",
                }}
              >
                <h1
                  style={{
                    color: "white",
                    fontFamily: "Jura",
                    fontSize: "2.25rem",
                    fontWeight: 400,
                  }}
                >
                  We Produce The Best
                </h1>
                <h2
                  style={{
                    color: "white",
                    fontFamily: "Jura",
                    fontSize: "2.25rem",
                    fontWeight: 400,
                  }}
                >
                  {" "}
                  Products In Market
                </h2>
                <a
                  style={{
                    color: "white",
                    fontFamily: "Jura",
                    fontSize: "1rem",
                    fontWeight: 400,
                  }}
                  href=""
                  target="_blank"
                >
                  Get Started -
                </a>
              </div>
            </Box>
          </Typography>
        </div>
        <div className="each-slide">
          <Typography
            component="div"
            variant="body1"
            style={{ height: 600, width: "1500", position: "relative" }}
          >
            <Box
              position="absolute"
              top="0"
              left="0"
              zIndex="999"
              height="100%"
              width="100%"
            >
              <img
                src="/banner3.jpg"
                style={{ backgroundImage: `url(${slideImages[2]})` }}
                alt="Picture of the author"
                height="100%"
                width="100%"
                backgroung-position="center"
                background-repeat="no-repeat"
                background-size="cover"
              />
            </Box>
            <Box
              position="absolute"
              top="0"
              left="0"
              zIndex="999999"
              height="100%"
              width="35%"
            >
              <div
                style={{
                  paddingTop: "10.75rem",
                  paddingBottom: "18.75rem",
                  paddingLeft: "5rem",
                  background:
                    "linear-gradient(91deg, #27221f, #282320, #0029290a)",
                }}
              >
                <h1
                  style={{
                    color: "white",
                    fontFamily: "Jura",
                    fontSize: "2.25rem",
                    fontWeight: 400,
                  }}
                >
                  We Produce The Best
                </h1>
                <h2
                  style={{
                    color: "white",
                    fontFamily: "Jura",
                    fontSize: "2.25rem",
                    fontWeight: 400,
                  }}
                >
                  {" "}
                  Products In Market
                </h2>
                <a
                  style={{
                    color: "white",
                    fontFamily: "Jura",
                    fontSize: "1rem",
                    fontWeight: 400,
                  }}
                  href=""
                  target="_blank"
                >
                  Get Started -
                </a>
              </div>
            </Box>
          </Typography>
        </div>
      </Slide>
    </div>
  );
}
