import React from "react";
import { Drawer, Divider, IconButton, Typography, Grid } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import AppContext from "../AppContext";
import { SearchBar } from "../components/SearchBar";
import { CheckboxGroup } from "../components/CheckboxGroup";
import { FilterableProperties } from "../types";

export const uniqueInstituteTypes = [
  "PUBLIC 2 TO 3 YEARS",
  "PUBLIC 4 YEARS OR MORE",
  "PROPRIETARY 4 YEARS OR MORE",
  "PRIVATE, NOT-FOR-PROFIT 4 YEARS OR MORE",
  "PROPRIETARY 2 TO 3 YEARS",
  "PRIVATE, NOT-FOR-PROFIT 2 TO 3 YEARS",
  "PUBLIC LESS THAN 2 YEARS",
  "PROPRIETARY LESS THAN 2 YEARS",
  "PRIVATE, NOT-FOR-PROFIT LESS THAN 2 YEARS",
];

export const uniqueCredentialLevels = [
  "01 - UNDERGRADUATE CERTIFICATE",
  "08 - GRADUATE CERTIFICATE",
  "05 - MASTERS DEGREE",
  "03 - BACHELORS DEGREE",
  "04 - POST BACCALAUREATE CERTIFICATE",
  "02 - ASSOCIATES DEGREE",
  "06 - DOCTORAL DEGREE",
  "07 - FIRST PROFESSIONAL DEGREE",
];

const drawerWidth = 400;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const DrawerBody = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  padding: theme.spacing(2, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
  marginLeft: theme.spacing(2),
}));

export const FilterDrawer = () => {
  const { isFilterDrawerOpen, toggleFilterDrawer } =
    React.useContext(AppContext);
  const theme = useTheme();

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={isFilterDrawerOpen}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
    >
      <DrawerHeader>
        <IconButton onClick={toggleFilterDrawer}>
          {theme.direction === "rtl" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Filters
        </Typography>
      </DrawerHeader>
      <Divider />
      <DrawerBody container direction="column">
        <Grid
          container
          direction="column"
          sx={{
            p: 2,
          }}
        >
          <CheckboxGroup
            label="Filter by Institute Types"
            options={uniqueInstituteTypes}
            propertyName={FilterableProperties.INSTITUTIONTYPE}
          />
          <Grid
            sx={{
              p: 2,
            }}
          />
          <CheckboxGroup
            label="Filter by Credential Level"
            options={uniqueCredentialLevels}
            propertyName={FilterableProperties.CREDENTIALLEVEL}
          />
        </Grid>
      </DrawerBody>
    </Drawer>
  );
};
