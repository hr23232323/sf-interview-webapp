import React from "react";
import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import { Grid, Button, Container } from "@mui/material";
import AppContext from "../AppContext";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { DebtToEarningsData } from "../types";
import { Navbar } from "../components/Navbar";

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
  const { rawData } = React.useContext(AppContext);
  if (!rawData) {
    // Deal with this later
    return <></>;
  }

  const rows: GridRowsProp = rawData;
  console.log(rows);

  return (
    <Grid container direction="column">
      <Navbar />
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ height: "70vh" }}
        spacing={5}
      >
        <Grid item xs={11} style={{ height: "80%" }}>
          <DataGrid rows={rows} columns={columns} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
