import React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import { Typography, InputBase, Box, Grid, Button } from "@mui/material";
import {
  Search as SearchIcon,
  FmdGood as FmdGoodIcon,
} from "@mui/icons-material";
import AppContext from "../AppContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
  },
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  width: "100%",
  color: theme.palette.common.white,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

export const SearchBar = () => {
  const theme = useTheme();
  const { updateGetUrl } = React.useContext(AppContext);
  const [instituteName, setInstituteName] = React.useState("");
  const [zipCode, setZipCode] = React.useState("");

  React.useEffect(() => {
    updateGetUrl(instituteName, zipCode);
  }, [instituteName, zipCode, updateGetUrl]);

  return (
    <Grid
      container
      direction="row"
      sx={{
        flexGrow: 1,
        marginTop: theme.spacing(3),
        padding: theme.spacing(2),
      }}
    >
      <Grid item xs={2} />
      <Grid
        item
        container
        direction="row"
        xs={8}
        sx={{
          flexGrow: 1,
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.primary.main,
          padding: theme.spacing(2, 2, 3, 2),
        }}
      >
        <Grid item xs={1} />
        <Grid item container direction="column" xs={5} p={1}>
          <Typography
            variant="caption"
            color={theme.palette.common.white}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            Search by Institution Name
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon
                sx={{
                  color: theme.palette.common.white,
                }}
              />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Institute Name…"
              inputProps={{ "aria-label": "search" }}
              sx={{
                border: 1,
                borderColor: alpha(theme.palette.common.white, 0.5),
              }}
              onChange={(e) => {
                setInstituteName(e.target.value);
              }}
            />
          </Search>
        </Grid>
        <Grid item container direction="column" xs={5} p={1}>
          <Typography
            variant="caption"
            color={theme.palette.common.white}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            Search by Zip Code
          </Typography>
          <Search>
            <SearchIconWrapper>
              <FmdGoodIcon
                sx={{
                  color: theme.palette.common.white,
                }}
              />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Zip…"
              inputProps={{ "aria-label": "search" }}
              sx={{
                border: 1,
                borderColor: alpha(theme.palette.common.white, 0.5),
              }}
              onChange={(e) => {
                setZipCode(e.target.value);
              }}
            />
          </Search>
        </Grid>

        <Grid item xs={1} />
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};
