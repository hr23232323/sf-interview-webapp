import React from "react";
import { useApi } from "./hooks/useApi";
import {
  DebtToEarningsData,
  FilterableProperties,
  Filter,
  UserData,
} from "./types";
import { applyFilters } from "./utils/filterHelpers";

// Context type for our global app context
type CtxType = {
  isFilterDrawerOpen: boolean;
  toggleFilterDrawer: () => void;
  filteredData: DebtToEarningsData[] | null;
  toggleFilter: (
    value: string,
    propertyName: FilterableProperties,
    findFunction: (dataPoint: DebtToEarningsData) => boolean
  ) => void;
  filterExists: (value: string, propertyName: FilterableProperties) => boolean;
  isUserSignupModalOpen: boolean;
  closeUserSignupModal: () => void;
  userData: UserData | null;
  updateUserData: (name: string, email: string) => void;
};

// Initialize appContext with default values
const AppContext = React.createContext<CtxType>({
  isFilterDrawerOpen: false,
  toggleFilterDrawer: () => {},
  filteredData: null,
  toggleFilter: () => {},
  filterExists: () => {
    return false;
  },
  isUserSignupModalOpen: false,
  closeUserSignupModal: () => {},
  userData: null,
  updateUserData: () => {},
});

// Provider used to make context values available globally
export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Context variable to store state of filter drawer
  const [isFilterDrawerOpen, setisFilterDrawerOpen] = React.useState(false);

  // Context variable to store state of user signup Modal
  const [isUserSignupModalOpen, setIsUserSignupModalOpen] =
    React.useState(false);

  // Context variable to store user data
  const [userData, setUserData] = React.useState<UserData | null>(null);

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
    findFunction: (dataPoint: DebtToEarningsData) => boolean
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
    findFunction: (dataPoint: DebtToEarningsData) => boolean
  ) => {
    if (filterExists(value, propertyName)) {
      removeFilter.apply(null, [value, propertyName]);
    } else {
      addFilter.apply(null, [value, propertyName, findFunction]);
    }
  };

  // Make call to API to retreive data
  const { isLoading, serverError, apiData } = useApi({
    method: "GET",
    path: "PATH",
    body: "BODY",
  });

  // Set up rawData once API Req is complete
  React.useEffect(() => {
    if (apiData && apiData !== null) {
      setRawData(apiData);
      setFilteredData(apiData);
    }
  }, [apiData]);

  // Update filtered data whenever filters are updated
  React.useEffect(() => {
    if (!rawData || !rawData.length) {
      return;
    }
    setFilteredData(applyFilters({ allData: rawData, filters: filters }));
  }, [rawData, filters]);

  React.useEffect(() => {
    console.log("setting modal to open");
    setIsUserSignupModalOpen(true);
  }, []);

  const closeUserSignupModal = () => {
    setIsUserSignupModalOpen(false);
  };

  const updateUserData = (name: string, email: string) => {
    setUserData({ name: name, email: email });
    closeUserSignupModal();
  };

  React.useEffect(() => {
    console.log(userData);
  }, [userData]);

  // Method to change state of filter drawer
  const toggleFilterDrawer = () => {
    setisFilterDrawerOpen(!isFilterDrawerOpen);
  };

  return (
    <AppContext.Provider
      value={{
        isFilterDrawerOpen,
        toggleFilterDrawer,
        filteredData,
        toggleFilter,
        filterExists,
        isUserSignupModalOpen,
        closeUserSignupModal,
        userData,
        updateUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
