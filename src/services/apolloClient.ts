import { ApolloClient, InMemoryCache } from "@apollo/client";

let apolloClient;

function createApolloClient() {
  return new ApolloClient({
    uri: `${process.env.CONTENTFUL_API_URL}/${process.env.CONTENTFUL_SPACE_ID}`,
    cache: new InMemoryCache(),
    credentials: "same-origin",
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (typeof window === "undefined") return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}
