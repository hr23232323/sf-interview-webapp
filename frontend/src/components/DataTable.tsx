import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "institutionName", headerName: "Institution Name", width: 150 },
  { field: "city", headerName: "City", width: 150 },
  { field: "state", headerName: "State", width: 80 },
  { field: "zip", headerName: "Zip", width: 100 },
  { field: "institutionType", headerName: "Institution Type", width: 150 },
  { field: "cipCode", headerName: "CIP Code", width: 100 },
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

export const DataTable = ({ data }) => {
  return <DataGrid rows={data} columns={columns} style={{ width: "100%" }} />;
};
