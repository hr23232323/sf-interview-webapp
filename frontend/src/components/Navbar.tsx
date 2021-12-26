import * as React from "react";
import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Debt-to-Earnings Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
