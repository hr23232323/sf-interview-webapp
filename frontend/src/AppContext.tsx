import React from "react";
import { useApi } from "./hooks/useApi";
import { DebtToEarningsData } from "./types";

// Context type for our global app context
type CtxType = {
  isFilterDrawerOpen: boolean;
  toggleFilterDrawer: () => void;
  rawData: DebtToEarningsData[] | null;
};

// Initialize appContext with default values
const AppContext = React.createContext<CtxType>({
  isFilterDrawerOpen: false,
  toggleFilterDrawer: () => {},
  rawData: null,
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
      value={{ isFilterDrawerOpen, toggleFilterDrawer, rawData }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
