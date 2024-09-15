const dotenv = require("dotenv");
const createApp = require("./src/app");

const injectDependencies = (app) => {};

const main = () => {
  dotenv.config();
  const PORT = process.env.PORT || 8002;
  const app = createApp();
  injectDependencies(app);

  app.listen(PORT, () => console.log(`App is listening of port ${PORT}`));
};

main();
