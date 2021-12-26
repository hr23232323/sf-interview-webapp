import React from "react";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import { Grid, Button } from "@mui/material";
import AppContext from "../AppContext";

const Home: NextPage = () => {
  const { isOpen, toggleSidebar, rawData } = React.useContext(AppContext);

  React.useEffect(() => {
    toggleSidebar();
  }, [toggleSidebar]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Typography variant="h2" gutterBottom>
          Coming soon!
        </Typography>
        <Button
          onClick={() => {
            console.log(rawData);
          }}
        >
          Click me
        </Button>
      </Grid>
    </Grid>
  );
};

export default Home;
