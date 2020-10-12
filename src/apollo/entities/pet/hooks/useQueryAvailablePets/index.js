import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

// Queries
const queryAvailablePets = loader("./gql/queryAvailablePets.graphql");

export const useQueryAvailablePets = () => {
  return useQuery(queryAvailablePets /*{pollInterval: 500}*/);
};
