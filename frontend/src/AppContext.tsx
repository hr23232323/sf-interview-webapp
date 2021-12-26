import React from "react";
import { useApi } from "./hooks/useApi";
import { DebtToEarningsData } from "./types";

type CtxType = {
  isOpen: boolean;
  toggleSidebar: () => void;
  rawData: DebtToEarningsData[] | null;
};

const AppContext = React.createContext<CtxType>({
  isOpen: false,
  toggleSidebar: () => {},
  rawData: null,
});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [rawData, setRawData] = React.useState<DebtToEarningsData[] | null>([]);
  const { isLoading, serverError, apiData } = useApi({
    method: "GET",
    url: "URL",
    body: "BODY",
  });

  React.useEffect(() => {
    setRawData(apiData);
  }, [apiData]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppContext.Provider value={{ isOpen, toggleSidebar, rawData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
