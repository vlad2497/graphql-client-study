import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  split,
  ApolloLink,
  concat,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";

const uri = "funded-pet-library.moonhighway.com/";
const authToken = localStorage.getItem("token")
  ? `Bearer ${localStorage.getItem("token")}`
  : "";

const httpLink = new HttpLink({ uri: `https://${uri}` });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: authToken,
    },
  }));

  return forward(operation);
});

const webSocketLink = new WebSocketLink({
  uri: `ws://${uri}`,
  options: {
    reconnect: true,
    connectionParams: { authToken },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  webSocketLink,
  concat(authMiddleware, httpLink)
);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});
