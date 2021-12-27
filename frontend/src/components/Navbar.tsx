import * as React from "react";
import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
} from "@mui/material";
import { FilterAlt } from "@mui/icons-material";
import AppContext from "../AppContext";

export const Navbar = () => {
  const { toggleFilterDrawer } = React.useContext(AppContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Debt-to-Earnings Dashboard
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleFilterDrawer}
          >
            <FilterAlt />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
