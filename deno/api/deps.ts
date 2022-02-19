/**
 * By convention, this module re-exports all required methods from dependencies.
 * See https://deno.land/manual/examples/manage_dependencies
 */
export {
  Application,
  type Middleware,
  Router,
} from "https://deno.land/x/oak@v10.1.0/mod.ts";
export * from "https://deno.land/x/oak_graphql@0.6.3/mod.ts";
