import React from "react";
import sample_data from "./sample_data.json";
import { DebtToEarningsData } from "../types";

type useApiHookParams = {
  method: string;
  path: string;
  body: any;
};

// Custom hook for interacting with out DB
/* Inspiration: https://dev.to/keyurparalkar/creating-custom-hook-for-fetching-data-in-react-3mo3 */
export const useApi = ({ method, path, body }: useApiHookParams) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [apiData, setApiData] = React.useState<DebtToEarningsData[] | null>(
    null
  );
  const [serverError, setServerError] = React.useState(null);

  React.useEffect(() => {
    if (!path) return;

    setIsLoading(true);
    const fetchData = async () => {
      setApiData(sample_data);
    };

    /* Add back in the future, stub for now
  
  React.useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios({
          method: method,
          path: path,
          data: body
        });
        const data = await resp?.data;

        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };*/

    fetchData();
  }, [path, method, body]);

  return { isLoading, apiData, serverError };
};
