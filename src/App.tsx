import { FC } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Root } from "./components/Root";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
});

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <Root />
    </ApolloProvider>
  );
};

export default App;
