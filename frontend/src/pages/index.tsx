import React from "react";
import type { NextPage } from "next";
import { Grid, Button, Typography } from "@mui/material";
import AppContext from "../AppContext";
import { DebtToEarningsData } from "../types";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { FilterDrawer } from "../components/FilterDrawer";
import { SignupModal } from "../components/SignupModal";
import { DataTable } from "../components/DataTable";

const Home: NextPage = () => {
  const {
    isFilterDrawerOpen,
    toggleFilterDrawer,
    isUserSignupModalOpen,
    closeUserSignupModal,
    updateUserData,
    rawData,
  } = React.useContext(AppContext);

  if (!rawData) {
    // Deal with this later
    return <></>;
  }

  return (
    <Grid
      container
      direction="column"
      spacing={0}
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={2}>
        <Navbar />
      </Grid>
      <Grid item container direction="row" xs={2}>
        <SearchBar />
      </Grid>
      <Grid item container direction="row" style={{ height: "80vh" }}>
        <Grid item xs={1} />
        <Grid
          item
          container
          xs={10}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ height: "100%", width: "100%" }}
        >
          <Grid item xs={1} />
          <Grid item container xs={11} style={{ width: "100%" }}>
            <DataTable data={rawData} />
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <FilterDrawer />
      <SignupModal
        isOpen={isUserSignupModalOpen}
        onClose={closeUserSignupModal}
        onSubmit={updateUserData}
      />
    </Grid>
  );
};

export default Home;
