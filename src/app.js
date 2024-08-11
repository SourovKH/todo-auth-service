const cookieParser = require('cookie-parser');
const express = require('express');
const setupRouter = require('./router');
const logger = require('./middlewares/logger');

const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded());
  app.use(cookieParser());
  app.use('/', logger);
  app.use('/auth', setupRouter());

  return app;
}

module.exports = createApp;