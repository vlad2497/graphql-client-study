import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

// Queries
const queryAllPets = loader("./gql/queryAllPets.graphql");

export const useQueryAllPets = () => {
  const { loading, error, data /*refetch*/ } = useQuery(queryAllPets);
  return { loading, error, allPets: data ? data.allPets : null };
};
