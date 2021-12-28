import React from "react";
import { Drawer, Divider, IconButton, Typography, Grid } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import AppContext from "../AppContext";
import { SearchBar } from "../components/SearchBar";
import { CheckboxGroup } from "../components/CheckboxGroup";
import {
  uniqueInstituteTypes,
  uniqueCredentialLevels,
} from "../hooks/filterData";
import { FilterableProperties } from "../types";

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
