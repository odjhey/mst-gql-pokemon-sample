import { RootStore } from "../models";
import { gql } from "@apollo/client";
import { apolloClient } from "./gql-client";

const createRootStore = () => {
  const client = apolloClient;
  return RootStore.create(undefined, {
    gqlHttpClient: {
      request: (query: any, variables: any) => {
        if (query.startsWith("mutation")) {
          return client
            .mutate({
              mutation: gql`
                ${query}
              `,
              variables,
              // fetchPolicy: "network-only",
            })
            .then((d: any) => {
              if (d.errors) {
                throw d.errors;
              }
              return d.data;
            });
        } else {
          return client
            .query({
              query: gql`
                ${query}
              `,
              variables,
              // fetchPolicy: "network-only",
            })
            .then((d: any) => {
              if (d.errors) {
                throw d.errors;
              }
              return d.data;
            });
        }
      },
    },
  });
};

export { createRootStore };
