import { useLazyQuery } from "@apollo/client";
import { loader } from "graphql.macro";

// Queries
const querySpecialList = loader("./gql/querySpecialList.graphql");

export const useQuerySpecialList = () => {
  const [getSpecialList, { loading, error, data }] = useLazyQuery(
    querySpecialList
  );
  return {
    getSpecialList,
    loading,
    error,
    list: data && data.allAvailablePets,
  };
};
