import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../../lib/Apollo-client";


import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ChakraProvider>
  );
}


export default MyApp;