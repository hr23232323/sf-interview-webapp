import * as React from "react";
import { Drawer, Divider, IconButton, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { styled, useTheme } from "@mui/material/styles";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import AppContext from "../AppContext";

const drawerWidth = 400;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export const FilterDrawer = () => {
  const { isFilterSidebarOpen, toggleFilterSidebar } =
    React.useContext(AppContext);
  const theme = useTheme();

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={isFilterSidebarOpen}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
    >
      <DrawerHeader>
        <IconButton onClick={toggleFilterSidebar}>
          {theme.direction === "rtl" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Filters
        </Typography>
      </DrawerHeader>
      <Divider />
    </Drawer>
  );
};
