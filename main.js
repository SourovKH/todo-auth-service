const express = require("express");
const setupRouter = require("./src/router");
const logger = require("./src/middlewares/logger");
const cookieParser = require("cookie-parser");

const main = () => {
  const app = express();
  const PORT = process.env.PORT || 8002;

  app.use(express.json());
  app.use(express.urlencoded());
  app.use(cookieParser());
  app.use('/', logger);
  app.use('/auth', setupRouter());
  
  app.listen(PORT, () => console.log(`App is listening of port ${PORT}`));
};

main();
