import { Middleware } from "https://deno.land/x/oak@v10.1.0/mod.ts";

export const logResponseTime: Middleware = async (ctx, next) => {
  await next();
  const ms = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${ms}`);
};

export const setResponseTime: Middleware = async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
};
