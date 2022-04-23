import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { Fragment } from "react";
import Info from "../Info";
import "./styles.sass";

function Home() {
  return (
    <Fragment>
      <div className="home__container">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ height: "100%" }}
        >
          <Grid container justifyContent="center">
            <Typography align="left" variant="h2">
              <Box sx={{ fontWeight: "regular" }}>Security </Box>
              <Box sx={{ fontWeight: "light" }}>is a </Box>
              <Box sx={{ fontWeight: "bold", color: "#0054B4" }}>priority,</Box>
              <Box sx={{ fontWeight: "light" }}>not an option.</Box>
              <Box sx={{ fontWeight: "bold", color: "#0054B4" }}>
                INSURANCES
              </Box>
            </Typography>
            <Grid container justifyContent="center">
              <Box sx={{ m: 3 }}>
                <Button variant="contained" color="secondary">
                  ENTER
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Info className="home__info" />
      </div>
    </Fragment>
  );
}

export { Home };
