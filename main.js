const express = require("express");
const setupRouter = require("./src/router");

const main = () => {
  const app = express();
  const PORT = process.env.PORT || 8002;

  app.use('/auth', setupRouter());
  
  app.listen(PORT, () => console.log(`App is listening of port ${PORT}`));
};

main();
