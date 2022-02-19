import { Application } from "https://deno.land/x/oak@v10.1.0/mod.ts";

import { graphQLRouter } from "./graphql/mod.ts";
import { logResponseTime, setResponseTime } from "./middleware.ts";

const app = new Application();
app.use(logResponseTime);
app.use(setResponseTime);
app.use(graphQLRouter.routes());
app.use(graphQLRouter.allowedMethods());
app.use(
  (ctx) => ctx.request.url.pathname == "/" && ctx.response.redirect("/graphql"),
);

export { app };
