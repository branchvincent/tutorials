import { gql } from "https://deno.land/x/oak_graphql@0.6.3/mod.ts";

export const typeDefs = gql`
  type User {
    firstName: String
    lastName: String
  }

  input UserInput {
    firstName: String
    lastName: String
  }

  type ResolveType {
    done: Boolean
  }

  type Query {
    getUser(id: String): User
  }

  type Mutation {
    setUser(input: UserInput!): ResolveType!
  }
`;
