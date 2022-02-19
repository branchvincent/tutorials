import { app } from "./app.ts";

const port = 8080;

console.log(`Server start at http://localhost:${port}`);
await app.listen({ port });
