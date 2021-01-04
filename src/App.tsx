import { FC } from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Root } from "./components/Root";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://safe-springs-74347.herokuapp.com/graphql",
});

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <Root />
    </ApolloProvider>
  );
};

export default App;
