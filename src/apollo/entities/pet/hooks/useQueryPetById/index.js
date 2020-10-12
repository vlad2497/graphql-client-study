import { useLazyQuery } from "@apollo/client";
import { loader } from "graphql.macro";

// Queries
const queryPetById = loader("./gql/queryPetById.graphql");

export const useQueryPetById = () => {
  const [getPetById, { loading, error, data }] = useLazyQuery(queryPetById);
  return {
    getPetById,
    loading,
    error,
    pet: data && data.petById,
  };
};
