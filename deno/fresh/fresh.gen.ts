// DO NOT EDIT. This file is generated by `fresh`.
// This file SHOULD be checked into source version control.
// To update this file, run `fresh manifest`.

import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/api/joke.ts";
import * as $2 from "./routes/countdown.tsx";
import * as $3 from "./routes/github/[username].tsx";
import * as $4 from "./routes/index.tsx";
import * as $$0 from "./islands/Countdown.tsx";
import * as $$1 from "./islands/Counter.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/api/joke.ts": $1,
    "./routes/countdown.tsx": $2,
    "./routes/github/[username].tsx": $3,
    "./routes/index.tsx": $4,
  },
  islands: {
    "./islands/Countdown.tsx": $$0,
    "./islands/Counter.tsx": $$1,
  },
  baseUrl: import.meta.url,
};

export default manifest;