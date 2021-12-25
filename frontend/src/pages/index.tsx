import * as React from "react";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import { Grid } from '@mui/material';

const Home: NextPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3}>
        <Typography variant="h2" gutterBottom>
          Coming soon!
        </Typography>
      </Grid>   
    </Grid> 
  );
};

export default Home;
