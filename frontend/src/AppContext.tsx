import React from "react";
import { useApi } from "./hooks/useApi";
import { DebtToEarningsData, FilterableProperties, Filter } from "./types";

// Context type for our global app context
type CtxType = {
  isFilterDrawerOpen: boolean;
  toggleFilterDrawer: () => void;
  rawData: DebtToEarningsData[] | null;
  toggleFilter: (
    value: string,
    propertyName: FilterableProperties,
    findFunction: Function
  ) => void;
  filterExists: (value: string, propertyName: FilterableProperties) => boolean;
};

// Initialize appContext with default values
const AppContext = React.createContext<CtxType>({
  isFilterDrawerOpen: false,
  toggleFilterDrawer: () => {},
  rawData: null,
  toggleFilter: () => {},
  filterExists: () => {
    return false;
  },
});

// Provider used to make context values available globally
export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Context variable to store state of filter drawer
  const [isFilterDrawerOpen, setisFilterDrawerOpen] = React.useState(false);

  // Context variable to store all the data returned by API
  const [rawData, setRawData] = React.useState<DebtToEarningsData[] | null>([]);

  // Context variable to store filtered data
  const [filteredData, setFilteredData] = React.useState<
    DebtToEarningsData[] | null
  >([]);

  // Context variable to store all applied filters
  const [filters, setFilters] = React.useState<Filter[]>([]);

  // Filter helper functions
  // Inspiration - https://betterprogramming.pub/advanced-data-filtering-in-react-5ea2fa3befca
  const filterExists = (value: string, propertyName: FilterableProperties) => {
    filters.map((filter) => {});
    return (
      filters.find(
        (f) => f.value === value && f.propertyName === propertyName
      ) !== undefined
    );
  };

  const addFilter = (
    value: string,
    propertyName: FilterableProperties,
    findFunction: Function
  ) => {
    setFilters((currentFilters) => [
      ...currentFilters,
      { value, propertyName, findFunction },
    ]);
  };

  const removeFilter = (value: string, propertyName: FilterableProperties) => {
    setFilters((currentFilters) =>
      currentFilters.filter(
        (f) => !(f.value === value && f.propertyName === propertyName)
      )
    );
  };

  const toggleFilter = (
    value: string,
    propertyName: FilterableProperties,
    findFunction: Function
  ) => {
    if (filterExists(value, propertyName)) {
      removeFilter.apply(null, [value, propertyName]);
    } else {
      addFilter.apply(null, [value, propertyName, findFunction]);
    }
  };

  // For testing
  React.useEffect(() => {
    console.log(filters);
  }, [filters]);

  // Make call to API to retreive data
  const { isLoading, serverError, apiData } = useApi({
    method: "GET",
    url: "URL",
    body: "BODY",
  });

  // Set up rawData once API Req is complete
  React.useEffect(() => {
    if (apiData && apiData !== null) {
      setRawData(apiData);
      setFilteredData(apiData);
    }
  }, [apiData]);

  // Method to change state of filter drawer
  const toggleFilterDrawer = () => {
    setisFilterDrawerOpen(!isFilterDrawerOpen);
  };

  return (
    <AppContext.Provider
      value={{
        isFilterDrawerOpen,
        toggleFilterDrawer,
        rawData,
        toggleFilter,
        filterExists,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
