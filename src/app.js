const cookieParser = require("cookie-parser");
const express = require("express");
const setupRouter = require("./router");
const logger = require("./middlewares/logger");
const setupDb = require("./config/db-config");

const createApp = () => {
  const app = express();
  const dbCollection = setupDb();
  app.context = { ...app.context, db: dbCollection };

  app.use(express.json());
  app.use(express.urlencoded());
  app.use(cookieParser());
  app.use("/", logger);
  app.use("/auth", setupRouter());
  return app;
};

module.exports = createApp;
