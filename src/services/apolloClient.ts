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

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}
