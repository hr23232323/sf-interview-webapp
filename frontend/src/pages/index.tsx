import React from "react";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import { Grid, Button } from "@mui/material";
import { ArrowCircleRight } from "@mui/icons-material";

const Home: NextPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        xs={3}
      >
        <Typography variant="h2" gutterBottom>
          Coming soon!
        </Typography>
        <Button
          variant="contained"
          color="success"
          endIcon={<ArrowCircleRight />}
          href="/dashboard"
        >
          Take a sneak peak
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
