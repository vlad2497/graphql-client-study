import { useSubscription } from "@apollo/client";
import { loader } from "graphql.macro";

// Subscription
const subscriptionPet = loader("./gql/subscriptionPet.graphql");

export const useSubscriptionPet = () => {
  const { loading, error, data } = useSubscription(subscriptionPet);
  return {
    loading,
    error,
    pet: data && data.petReturned && data.petReturned.pet,
  };
};

/*
1

mutation($username: ID!, $password: String!){
  logIn(username:$username, password: $password){
    token
  }
}

{
  "username": "ccc",
  "password": "ccc"
}

2

mutation($id: ID!) {
  checkIn(id: $id){
    pet{
      name
    }
  }
}

{
  "id": "C5"
}

{
  "authorization": "Bearer ODfgdfg"
}
*/
