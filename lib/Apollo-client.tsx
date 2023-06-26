import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://b70e-114-142-169-3.ngrok-free.app/graphql",
    cache: new InMemoryCache(),
});

export default client;