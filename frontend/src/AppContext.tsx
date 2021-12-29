import React from "react";
import {
  DebtToEarningsData,
  FilterableProperties,
  Filter,
  UserData,
} from "./types";
import { applyFilters } from "./utils/filterHelpers";
import axios from "axios";

const BASE_API_URL = "http://0.0.0.0:8000";

// Context type for our global app context
type CtxType = {
  isFilterDrawerOpen: boolean;
  toggleFilterDrawer: () => void;
  rawData: DebtToEarningsData[] | null;
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
  updateGetUrl: (instituteName: string, zipCode: string) => void;
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
  isUserSignupModalOpen: false,
  closeUserSignupModal: () => {},
  userData: null,
  updateUserData: () => {},
  updateGetUrl: () => {},
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

  // For frontend filtering ONLY (master list of all data)
  const [allData, setAllData] = React.useState<DebtToEarningsData[] | null>([]);

  // Context variable to store all applied filters
  const [filters, setFilters] = React.useState<Filter[]>([]);

  // base path of GET (used for search)
  const [getUrl, setGetUrl] = React.useState(
    `${BASE_API_URL}/debt-to-earnings/`
  );

  const [serverError, setServerError] = React.useState(null);

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

  // Set up rawData on app start
  React.useEffect(() => {
    axios
      .get(getUrl)
      .then((response) => {
        setRawData(response?.data);
        setAllData(response?.data);
      })
      .catch((error) => {
        setServerError(error);
      });
  }, [getUrl]);

  // open modal on app startup
  React.useEffect(() => {
    setIsUserSignupModalOpen(true);
  }, []);

  // open modal on app startup
  React.useEffect(() => {
    if (!allData || !allData.length) {
      return;
    }
    setRawData(applyFilters({ rawData: allData, filters }));
  }, [filters]);

  // display server error
  React.useEffect(() => {
    if (!serverError) {
      return;
    } else {
      console.log(serverError);
    }
  }, [serverError]);

  // Helper/wrapper to update signupModal state
  const closeUserSignupModal = () => {
    setIsUserSignupModalOpen(false);
  };

  // Helper/Wrapper to update user data
  const updateUserData = (name: string, email: string) => {
    setUserData({ name: name, email: email });
    closeUserSignupModal();
  };

  // Helper/Wrapper to update GET path
  const updateGetUrl = (instituteName: string, zipCode: string) => {
    if (instituteName) {
      setGetUrl(`${BASE_API_URL}/debt-to-earnings/?search=${instituteName}`);
    } else {
      setGetUrl(`${BASE_API_URL}/debt-to-earnings/?search=${zipCode}`);
    }
  };

  // Make call to api to store user data
  React.useEffect(() => {
    if (!userData) {
      return;
    } else {
      const url = `${BASE_API_URL}/students/`;

      axios.post(url, userData).catch((error) => {
        setServerError(error);
      });
    }
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
        toggleFilter,
        filterExists,
        isUserSignupModalOpen,
        closeUserSignupModal,
        userData,
        updateUserData,
        rawData,
        updateGetUrl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
