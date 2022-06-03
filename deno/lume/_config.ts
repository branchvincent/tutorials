import lume from "lume/mod.ts";

const site = lume({
  src: "./src",
  dest: "./dist",
  server: { open: true },
});

export default site;
