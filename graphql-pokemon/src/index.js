import "babel-polyfill"; // eslint-disable-line import/no-extraneous-dependencies

import app from "./app";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/poketest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = 5000;

(async () => {
  await app.listen(PORT);

  console.log(`GraphQL-Pokemon started on http://localhost:${PORT}/`);
})();
