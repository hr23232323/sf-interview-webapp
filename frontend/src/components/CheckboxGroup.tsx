import React from "react";
import {
  Grid,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import AppContext from "../AppContext";
import { DebtToEarningsData, FilterableProperties } from "../types";

type CheckboxGroupProps = {
  label: string;
  options: any[];
  propertyName: FilterableProperties;
};

export const CheckboxGroup = ({
  label,
  options,
  propertyName,
}: CheckboxGroupProps) => {
  const { toggleFilter, filterExists } = React.useContext(AppContext);
  return (
    <Grid
      container
      direction="column"
      sx={{
        p: 1,
      }}
    >
      <Typography variant="subtitle2">{label}</Typography>

      <FormGroup>
        {options.map((opt, idx) => (
          <FormControlLabel
            key={`${propertyName}-${idx}`}
            control={
              <Checkbox
                checked={filterExists(opt, propertyName)}
                onChange={() => {
                  toggleFilter(
                    opt,
                    propertyName,
                    (dataPoint: DebtToEarningsData) =>
                      dataPoint[propertyName] === opt
                  );
                }}
                name={opt}
              />
            }
            label={<Typography variant="caption">{opt}</Typography>}
          />
        ))}
      </FormGroup>
    </Grid>
  );
};
