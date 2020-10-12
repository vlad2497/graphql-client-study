import { useMutation } from "@apollo/client";
import { loader } from "graphql.macro";

// Queries
const mutationCreateCustomer = loader("./gql/mutationCreateCustomer.graphql");

export const useMutationCreateCustomer = () => {
  const [createCustomer, { data }] = useMutation(mutationCreateCustomer);
  return { createCustomer, customer: data && data.createAccount };
};
