import * as React from "react";
import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FilterAlt } from "@mui/icons-material";
import AppContext from "../AppContext";

export const Navbar = () => {
  const { toggleFilterDrawer } = React.useContext(AppContext);
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color={theme.palette.common.white}
          >
            Debt-to-Earnings Dashboard
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: theme.palette.secondary.main }}
            onClick={toggleFilterDrawer}
          >
            <FilterAlt />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
