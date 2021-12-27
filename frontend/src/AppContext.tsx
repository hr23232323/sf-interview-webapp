import React from "react";
import { useApi } from "./hooks/useApi";
import { DebtToEarningsData } from "./types";

type CtxType = {
  isFilterSidebarOpen: boolean;
  toggleFilterSidebar: () => void;
  rawData: DebtToEarningsData[] | null;
};

const AppContext = React.createContext<CtxType>({
  isFilterSidebarOpen: false,
  toggleFilterSidebar: () => {},
  rawData: null,
});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isFilterSidebarOpen, setisFilterSidebarOpen] = React.useState(false);
  const [rawData, setRawData] = React.useState<DebtToEarningsData[] | null>([]);
  const { isLoading, serverError, apiData } = useApi({
    method: "GET",
    url: "URL",
    body: "BODY",
  });

  React.useEffect(() => {
    setRawData(apiData);
  }, [apiData]);

  const toggleFilterSidebar = () => {
    //console.log(isFilterSidebarOpen);
    setisFilterSidebarOpen(!isFilterSidebarOpen);
  };

  return (
    <AppContext.Provider
      value={{ isFilterSidebarOpen, toggleFilterSidebar, rawData }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
