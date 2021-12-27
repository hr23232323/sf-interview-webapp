import React from "react";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import { Grid, Button, Container } from "@mui/material";
import AppContext from "../AppContext";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { DebtToEarningsData } from "../types";
import { Navbar } from "../components/Navbar";
import { FilterDrawer } from "../components/FilterDrawer";

const columns: GridColDef[] = [
  { field: "institutionName", headerName: "Institution Name", width: 150 },
  { field: "city", headerName: "City", width: 150 },
  { field: "state", headerName: "State", width: 100 },
  { field: "zip", headerName: "Zip", width: 150 },
  { field: "institutionType", headerName: "Institution Type", width: 150 },
  { field: "cipCode", headerName: "CIP Code", width: 150 },
  { field: "cipName", headerName: "CIP Name", width: 150 },
  { field: "credentialLevel", headerName: "Credential Level", width: 150 },
  {
    field: "debtToEarningsAnnualRate",
    headerName: "Debt-To-Earnings Annual Rate",
    width: 150,
  },
  {
    field: "meanAnnualEarningsFromSsa",
    headerName: "Mean Annual Earnings From SSA",
    width: 150,
  },
  {
    field: "medianAnnualEarningsfromSsa",
    headerName: "Median Annual Earnings from SSA",
    width: 150,
  },
];

const Dashboard: NextPage = () => {
  const { rawData, isFilterSidebarOpen, toggleFilterSidebar } =
    React.useContext(AppContext);

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
            <DataGrid
              rows={rawData}
              columns={columns}
              style={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <FilterDrawer />
    </Grid>
  );
};

export default Dashboard;
