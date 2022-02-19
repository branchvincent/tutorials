import { Router } from "https://deno.land/x/oak@v10.1.0/mod.ts";
import { applyGraphQL } from "https://deno.land/x/oak_graphql@0.6.3/mod.ts";
import { resolvers } from "./resolvers.ts";
import { typeDefs } from "./typeDefs.ts";

export const graphQLRouter = await applyGraphQL<Router>({
  Router,
  typeDefs,
  resolvers,
  context: (ctx) => ({}),
});
