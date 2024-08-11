const createApp = require("./src/app");

const main = () => {
  const app = createApp();
  const PORT = process.env.PORT || 8002;
  
  app.listen(PORT, () => console.log(`App is listening of port ${PORT}`));
};

main();
