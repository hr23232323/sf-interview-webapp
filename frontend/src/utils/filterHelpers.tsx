import React from "react";
import { DebtToEarningsData, FilterableProperties, Filter } from "../types";

// Inspiration - https://betterprogramming.pub/advanced-data-filtering-in-react-5ea2fa3befca

// Helper functions to apply Institute Type filter
const isShownByInstituteType = ({
  dataPoint,
  filters,
}: {
  dataPoint: DebtToEarningsData;
  filters: Filter[];
}) => {
  const instituteTypeFilters = filters.filter(
    (filter) => filter.propertyName === FilterableProperties.INSTITUTIONTYPE
  );
  if (!instituteTypeFilters.length) return true;
  return instituteTypeFilters.some((filter) => filter.findFunction(dataPoint));
};

// Helper functions to apply Credential Level filter
const isShownByCredentialLevel = ({
  dataPoint,
  filters,
}: {
  dataPoint: DebtToEarningsData;
  filters: Filter[];
}) => {
  const credentialLevelFilters = filters.filter(
    (filter) => filter.propertyName === FilterableProperties.CREDENTIALLEVEL
  );
  if (!credentialLevelFilters.length) return true;
  return credentialLevelFilters.some((filter) =>
    filter.findFunction(dataPoint)
  );
};

// Exported function to apply filters to data
export const applyFilters = ({
  rawData,
  filters,
}: {
  rawData: DebtToEarningsData[];
  filters: Filter[];
}) => {
  return rawData.filter((dataPoint) => {
    const showByInstituteType = isShownByInstituteType({ dataPoint, filters });
    const showByCredentialLevel = isShownByCredentialLevel({
      dataPoint,
      filters,
    });
    return showByInstituteType && showByCredentialLevel;
  });
};
