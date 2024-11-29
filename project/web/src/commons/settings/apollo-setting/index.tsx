"use client";

import { initMockAPI } from "@/mocks";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useEffect, useState } from "react";

interface IApolloSetting {
  children: React.ReactNode;
}
export default function ApolloSetting(props: IApolloSetting) {
  const [isLoaded, setIsLoaded] = useState(false);
  const client = new ApolloClient({
    uri: "https://main-hybrid.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    initMockAPI().then(() => {
      setIsLoaded(true);
    });
  }, []);

  if (isLoaded === false) return <></>;

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
